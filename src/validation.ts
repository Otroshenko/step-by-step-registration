import {validationMessage, ValidationsEnum} from "./validationMessage";

export interface InputValidations {
  isEmpty: boolean;
  minLength: number;
  email: boolean;
}

export interface AmountValidation {
  minValue: number;
  maxValue: number;
}

export interface DateInputValidations {
  minAge: number;
}

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputValidation = (value: string, validations: Partial<InputValidations>): string | null => {
  for (const validation in validations) {
    if (validation == ValidationsEnum.isEmpty && !value) return validationMessage[ValidationsEnum.isEmpty];

    if (validation == ValidationsEnum.minLength && validations.minLength && value.length < validations.minLength)
      return validationMessage[ValidationsEnum.minLength](validations.minLength);

    if (validation == ValidationsEnum.email && !emailRegex.test(value.toLocaleLowerCase()))
      return validationMessage[ValidationsEnum.email];
  }

  return null;
};

export const amountValidation = (value: number, validations: Partial<AmountValidation>): string | null => {
  for (const validation in validations) {
    if (validation == ValidationsEnum.minValue) {
      if (validations.minValue && value < validations.minValue)
        return validationMessage[ValidationsEnum.minValue](validations.minValue);
    }

    if (validation == ValidationsEnum.maxValue) {
      if (validations.maxValue && value > validations.maxValue)
        return validationMessage[ValidationsEnum.maxValue](validations.maxValue);
    }
  }

  return null;
};
