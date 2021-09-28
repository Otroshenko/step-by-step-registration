import React from "react";
import {useDispatch} from "react-redux";

import {Options} from "../../store/userTypes";
import {ActionsEnum} from "../../store/registrationReducer";
import "./Select.scss";

interface Props {
  label?: string;
  options: Options[];
}

export function Select(props: Props) {
  const {label, options} = props;

  const dispatch = useDispatch();

  const onChange = (e: string) => {
    const value = options.find((o) => o.label == e);

    dispatch({type: ActionsEnum.infoSource, payload: value});
  };

  return (
    <div className="select-wrapper">
      {label && <label className="select-label">{label}</label>}
      <select className="select" onChange={(e) => onChange(e.target.value)}>
        <option />
        {options.map((option) => (
          <option key={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
}
