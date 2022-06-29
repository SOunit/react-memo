import { FC, ReactNode } from "react";

type ButtonContainerProps = {
  children: ReactNode;
};

const ButtonContainer: FC<ButtonContainerProps> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "50%",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default ButtonContainer;
