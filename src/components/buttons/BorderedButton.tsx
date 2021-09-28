import React, {FC} from "react";
import "./Button.scss";

interface Props {
  onClick(e: React.MouseEvent): void;
}

export const BorderedButton: FC<Props> = ({onClick, children}) => {
  return (
    <div className="bordered-button-wrapper">
      <button
        className="bordered-button"
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </button>
    </div>
  );
};
