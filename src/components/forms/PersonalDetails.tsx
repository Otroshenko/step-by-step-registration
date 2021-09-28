import React from "react";

import {InputDate} from "../inputs/InputDate";
import {GenderChecker} from "../inputs/GenderChecker";
import {Select} from "../inputs/Select";
import {infoOptions} from "../../demoData";

export function PersonalDetails() {
  return (
    <div className="form-fields">
      <InputDate
        label="Date of birth"
        datePlaceholder={{day: "dd", month: "mm", year: "yyyy"}}
        validations={{minAge: 18}}
      />

      <GenderChecker label="Gender" />

      <Select label="Where did you hear about is?" options={infoOptions} />
    </div>
  );
}
