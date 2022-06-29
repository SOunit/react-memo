import React, { FC, MouseEventHandler, ReactNode } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
};

const Button: FC<Props> = (props) => {
  const { children, onClick } = props;
  return (
    <button
      style={{
        backgroundColor: "orange",
        padding: "0.8rem 1.5rem",
        color: "white",
        border: "none",
        cursor: "pointer",
        margin: ".5rem 0",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
