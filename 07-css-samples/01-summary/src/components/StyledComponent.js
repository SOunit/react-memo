import React from "react";
import styled from "styled-components";

const StyledBox = styled("div")`
  padding: 1rem;
  border: 3px solid grey;
  background-color: ${(props) => props.backgroundColor};
  cursor: pointer;
  &:hover {
    background-color: pink;
  }
`;

const StyledComponent = ({ backgroundColor }) => {
  return (
    <StyledBox backgroundColor={backgroundColor}>StyledComponent</StyledBox>
  );
};

export default StyledComponent;
