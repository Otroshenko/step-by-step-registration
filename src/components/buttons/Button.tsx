import React, {FC} from "react";

import "./Button.scss";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  disable?: boolean;
  onClick(e: React.MouseEvent): void;
}

export const Button: FC<ButtonProps> = ({type = "submit", ...props}) => {
  const {disable, onClick, children} = props;

  return (
    <button
      className={`button ${disable && "disable"}`}
      disabled={disable}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </button>
  );
};
