import React, {useState, FC} from "react";
import {useDispatch, useSelector} from "react-redux";

import {UserFieldsEnum} from "../../store/userTypes";
import {ActionsEnum, UserState} from "../../store/registrationReducer";
import {inputValidation, InputValidations} from "../../validation";
import "./Input.scss";

interface Props {
  name: UserFieldsEnum;
  type?: string;
  label?: string;
  validations: Partial<InputValidations>;
}

export const Input: FC<Props> = ({type = "text", ...props}) => {
  const {name, label, validations} = props;

  const dispatch = useDispatch();
  const value = useSelector((state: UserState) => state[name]);
  const {errors} = useSelector((state: UserState) => state);

  const message = inputValidation(value as string, validations);

  const [isDirty, setDirty] = useState<boolean>(false);

  const onChange = (e: string) => {
    const newErrors = {...errors, [name]: inputValidation(e, validations)};

    dispatch({type: ActionsEnum.errors, payload: newErrors});
    dispatch({type: ActionsEnum[name], payload: e});
  };

  const onBlur = () => {
    setDirty(true);
  };

  return (
    <div className="input-wrapper">
      {label && (
        <label className={`input-label ${isDirty && message && "input-error"}`}>
          {label} {isDirty && message}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value as string}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
        onBlur={onBlur}
        className="input"
      />
    </div>
  );
};
