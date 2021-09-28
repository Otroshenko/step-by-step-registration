import {UserFields, UserDate, GenderEnum} from "./userTypes";

export enum ActionsEnum {
  next = "next",
  previous = "previous",
  email = "email",
  password = "password",
  confirmPassword = "confirmPassword",
  dateOfBirth = "dateOfBirth",
  gender = "gender",
  errors = "errors",
  infoSource = "infoSource",
}

export enum RegistrationSteps {
  userDetails = "userDetails",
  personalInfo = "personalInfo",
  success = "success",
}

export const steps = [RegistrationSteps.userDetails, RegistrationSteps.personalInfo, RegistrationSteps.success];

interface UserAction {
  type: ActionsEnum;
  payload: any;
}

export interface UserState extends UserFields {
  errors: UserFields;
  step: RegistrationSteps;
}

const initialDateOfBirth: UserDate = {day: null, month: null, year: null};

const initialState: UserState = {
  email: "",
  password: "",
  confirmPassword: "",
  dateOfBirth: initialDateOfBirth,
  gender: GenderEnum.male,
  errors: {
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: null,
    gender: null,
  },
  step: RegistrationSteps.userDetails,
};

const getStep = (step: RegistrationSteps, action: ActionsEnum) => {
  if (action == ActionsEnum.next && step != RegistrationSteps.success) return steps[steps.indexOf(step) + 1];

  if (action == ActionsEnum.previous && step != RegistrationSteps.userDetails) return steps[steps.indexOf(step) - 1];

  return step;
};

export const registrationReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case ActionsEnum.next:
      return {...state, step: getStep(state.step, ActionsEnum.next)};
    case ActionsEnum.previous:
      return {...state, step: getStep(state.step, ActionsEnum.previous)};
    case ActionsEnum.email:
      return {...state, email: action.payload};
    case ActionsEnum.password:
      return {...state, password: action.payload};
    case ActionsEnum.confirmPassword:
      return {...state, confirmPassword: action.payload};
    case ActionsEnum.dateOfBirth:
      return {...state, dateOfBirth: action.payload};
    case ActionsEnum.gender:
      return {...state, gender: action.payload};
    case ActionsEnum.infoSource:
      return {...state, infoSource: action.payload};
    case ActionsEnum.errors:
      return {...state, errors: action.payload};
    default:
      return state;
  }
};
