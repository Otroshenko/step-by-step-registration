import React from "react";
import {useDispatch, useSelector} from "react-redux";

import {UserDetails} from "./UserDetails";
import {PersonalDetails} from "./PersonalDetails";
import {ButtonsGroup} from "../buttons/ButtonsGroup";
import {Button} from "../buttons/Button";
import {ProgressBar} from "../progressBar/ProgressBar";
import {ActionsEnum, RegistrationSteps, steps, UserState} from "../../store/registrationReducer";
import "./RegistrationForm.scss";
import {Success} from "./Success";

export function RegistrationForm() {
  const dispatch = useDispatch();
  const {step, errors, ...fields} = useSelector((state: UserState) => state);

  const title = step == RegistrationSteps.success ? "Thank you!" : "Signup";

  const isValidFields = () => {
    const {email, password, confirmPassword, dateOfBirth} = fields;

    if (step == RegistrationSteps.userDetails) {
      const eqPasswords = password == confirmPassword;

      return !(email && password && confirmPassword) || !eqPasswords;
    }

    if (step == RegistrationSteps.personalInfo)
      return Object.values(dateOfBirth || {}).filter((e) => e).length != Object.keys(dateOfBirth || {}).length;
  };

  const isError = () => {
    const {dateOfBirth, ...elseErrors} = errors;

    const isFieldsError = Object.values(elseErrors).filter((e) => e).length > 0;
    const isDateError = Object.values(dateOfBirth || {}).filter((e) => e).length > 0;

    return isFieldsError || isDateError || isValidFields();
  };

  const back = () => dispatch({type: ActionsEnum.previous, step});

  const next = () => dispatch({type: ActionsEnum.next, step});

  return (
    <form className="form-wrapper">
      <span className="registration-form-title">{title}</span>

      <ProgressBar />

      {step == RegistrationSteps.userDetails && <UserDetails />}
      {step == RegistrationSteps.personalInfo && <PersonalDetails />}
      {step == RegistrationSteps.success && <Success />}

      {step != RegistrationSteps.success && (
        <ButtonsGroup>
          <Button type="button" disable={!steps.indexOf(step)} onClick={back}>
            {"<-Back"}
          </Button>
          <Button type="button" disable={steps.indexOf(step) == steps.length - 1 || isError()} onClick={next}>
            {"Next->"}
          </Button>
        </ButtonsGroup>
      )}
    </form>
  );
}
