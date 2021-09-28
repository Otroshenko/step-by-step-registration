import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {GenderEnum} from "../../store/userTypes";
import {ActionsEnum, UserState} from "../../store/registrationReducer";
import "./Input.scss";

interface Props {
  label?: string;
}

export function GenderChecker({label}: Props) {
  const {gender} = useSelector((state: UserState) => state);
  const dispatch = useDispatch();

  const [checkedValue, setCheckedValue] = useState<string | null>(gender);

  useEffect(() => {
    dispatch({type: ActionsEnum.gender, payload: checkedValue});
  }, [checkedValue]);

  return (
    <div>
      {label && <label className="input-date-label">{label}</label>}
      <div className="radio-buttons">
        <label className={`label__left ${checkedValue == GenderEnum.male && "checked"}`}>
          <input
            name={GenderEnum.male}
            type="radio"
            checked={checkedValue == GenderEnum.male}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckedValue(e.target.name)}
          />
          <span>Male</span>
        </label>
        <label className={`${checkedValue == GenderEnum.female && "checked"}`}>
          <input
            name={GenderEnum.female}
            type="radio"
            checked={checkedValue == GenderEnum.female}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckedValue(e.target.name)}
          />
          <span>Male</span>
        </label>
        <label className={`label__right ${checkedValue == GenderEnum.unspecified && "checked"}`}>
          <input
            name={GenderEnum.unspecified}
            type="radio"
            checked={checkedValue == GenderEnum.unspecified}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCheckedValue(e.target.name)}
          />
          <span>Male</span>
        </label>
      </div>
    </div>
  );
}
