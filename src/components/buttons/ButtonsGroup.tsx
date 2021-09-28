import React, {FC} from "react";

import "./ButtonsGroup.scss";

export const ButtonsGroup: FC = ({children}) => {
  return <div className="buttons-group">{children}</div>;
};
