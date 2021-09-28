import React from "react";
import {useSelector} from "react-redux";

import {BorderedButton} from "../buttons/BorderedButton";
import success from "./assets/checkmark.svg";
import {RegistrationSteps, UserState} from "../../store/registrationReducer";

export function Success() {
  const {dateOfBirth, ...state} = useSelector((state: UserState) => state);

  const showResult = () => {
    const {day, month, year} = dateOfBirth || {};
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    console.log({...state, date});
  };

  return (
    <div className={`form-fields ${state.step == RegistrationSteps.success && "bottom"}`}>
      <div className="success">
        <img src={success} alt="Success" />
      </div>
      <BorderedButton onClick={showResult}>{"Go to Dashboard ->"}</BorderedButton>
    </div>
  );
}
