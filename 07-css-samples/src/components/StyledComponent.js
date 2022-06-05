import React from "react";
import styled from "styled-components";

const StyledBox = styled("div")`
  padding: 1rem;
  border: 3px solid grey;
  background-color: yellow;
  cursor: pointer;
  :hover {
    background-color: pink;
  }
`;

const StyledComponent = () => {
  return <StyledBox>StyledComponent</StyledBox>;
};

export default StyledComponent;
