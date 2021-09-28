import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {amountValidation, DateInputValidations} from "../../validation";
import "./Input.scss";
import {ActionsEnum, UserState} from "../../store/registrationReducer";
import {UserDate, UserFieldsEnum} from "../../store/userTypes";

interface DatePlaceholder {
  day: string;
  month: string;
  year: string;
}

interface Props {
  label?: string;
  datePlaceholder?: DatePlaceholder;
  validations: DateInputValidations;
}

export function InputDate({label, datePlaceholder, validations}: Props) {
  const {dateOfBirth, errors} = useSelector((state: UserState) => state);
  const {day, month, year} = dateOfBirth || {day: null, month: null, year: null};

  const [isDirty, setDirty] = useState<boolean>(false);

  const message =
    errors[UserFieldsEnum.dateOfBirth]?.day ||
    errors[UserFieldsEnum.dateOfBirth]?.month ||
    errors[UserFieldsEnum.dateOfBirth]?.year;

  const dispatch = useDispatch();

  const getError = (date: Partial<UserDate>) => {
    const {day, month, year} = date;
    const {dateOfBirth} = errors;

    if (day) return {...dateOfBirth, day: amountValidation(day, {minValue: 1, maxValue: 31})};

    if (month) return {...dateOfBirth, month: amountValidation(month, {minValue: 1, maxValue: 12})};

    if (year)
      return {
        ...dateOfBirth,
        year: amountValidation(year, {
          minValue: 1900,
          maxValue: validations.minAge ? new Date().getFullYear() - validations.minAge : new Date().getFullYear(),
        }),
      };
  };

  const getDate = (date: Partial<UserDate>) => {
    const {day, month, year} = date;

    if (day != undefined) return {...dateOfBirth, day};

    if (month != undefined) return {...dateOfBirth, month};

    if (year != undefined) return {...dateOfBirth, year};
  };

  const onChange = (date: Partial<UserDate>) => {
    const newDate = getDate(date);
    const error = {...errors, dateOfBirth: getError(date)};

    dispatch({type: ActionsEnum.errors, payload: error});
    dispatch({type: ActionsEnum.dateOfBirth, payload: newDate});
  };

  const onBlur = () => setDirty(true);

  return (
    <div>
      {label && (
        <label className={`input-date-label ${isDirty && message && "input-error"}`}>
          {label} {isDirty && message}
        </label>
      )}
      <div className="input-date">
        <input
          type="text"
          name="day"
          className="input-date__left"
          value={day || ""}
          maxLength={2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({day: Number(e.target.value)})}
          onBlur={onBlur}
          placeholder={datePlaceholder?.day}
        />
        <input
          type="text"
          name="month"
          value={month || ""}
          maxLength={2}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({month: Number(e.target.value)})}
          onBlur={onBlur}
          placeholder={datePlaceholder?.month}
        />
        <input
          type="text"
          name="year"
          className="input-date__right"
          value={year || ""}
          maxLength={4}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange({year: Number(e.target.value)})}
          onBlur={onBlur}
          placeholder={datePlaceholder?.year}
        />
      </div>
    </div>
  );
}
