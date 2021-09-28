import React, {FC, memo} from "react";
import {useSelector} from "react-redux";

import {steps, UserState} from "../../store/registrationReducer";
import "./ProgressBar.scss";

export const ProgressBar: FC = memo(() => {
  const {step} = useSelector((state: UserState) => state);
  const complete = (100 / steps.length) * (steps.indexOf(step) + 1);

  return (
    <div className="progress-bar">
      <div className="filler" style={{width: `${complete}%`}} />
    </div>
  );
});
