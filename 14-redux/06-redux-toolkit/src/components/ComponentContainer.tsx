import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ComponentContainer: FC<Props> = (props) => {
  return (
    <div style={{ backgroundColor: "pink", padding: "1rem", margin: "1rem" }}>
      {props.children}
    </div>
  );
};

export default ComponentContainer;
