export enum UserFieldsEnum {
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  dateOfBirth = "dateOfBirth",
  gender = "gender",
  infoSource = "infoSource",
}

export enum GenderEnum {
  male = "male",
  female = "female",
  unspecified = "unspecified",
}

export interface Options {
  value: number;
  label: string;
}

export interface UserDate {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface UserFields {
  [UserFieldsEnum.email]: string | null;
  [UserFieldsEnum.password]: string | null;
  [UserFieldsEnum.confirmPassword]: string | null;
  [UserFieldsEnum.dateOfBirth]: UserDate | null;
  [UserFieldsEnum.gender]: string | null;
  [UserFieldsEnum.infoSource]?: string;
}
