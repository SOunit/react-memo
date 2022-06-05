import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: ${(props) => props.bg};
  background-color: ${({ bg }) => bg};
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  /* h1 {
    color: red;
  }

  &:hover {
    background-color: black;
  } */
`;

export default StyledHeader;
