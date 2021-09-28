export enum ValidationsEnum {
  isEmpty = "isEmpty",
  minLength = "minLength",
  email = "email",
  minAge = "minAge",
  minValue = "minValue",
  maxValue = "maxValue",
}

export const validationMessage = {
  [ValidationsEnum.isEmpty]: "is required",
  [ValidationsEnum.minLength]: (length: number) => `length must be more than ${length}`,
  [ValidationsEnum.email]: "is not valid",
  [ValidationsEnum.minAge]: (age: number) => `age must be older than ${age}`,
  [ValidationsEnum.minValue]: (value: number) => `must be more than ${value}`,
  [ValidationsEnum.maxValue]: (value: number) => `must be less than ${value}`,
};
