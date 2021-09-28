import React from "react";

import {Input} from "../inputs/Input";
import {UserFieldsEnum} from "../../store/userTypes";

export function UserDetails() {
  return (
    <div className="form-fields">
      <Input name={UserFieldsEnum.email} label="Email" validations={{email: true, isEmpty: true}} />
      <Input
        name={UserFieldsEnum.password}
        type="password"
        label="Password"
        validations={{minLength: 3, isEmpty: true}}
      />
      <Input
        name={UserFieldsEnum.confirmPassword}
        type="password"
        label="Confirm password"
        validations={{minLength: 3, isEmpty: true}}
      />
    </div>
  );
}
