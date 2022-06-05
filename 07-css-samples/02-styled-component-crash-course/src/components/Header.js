import React from "react";
import { Button } from "./styles/Button.styled";
import Container from "./styles/Container.styled";
import { Logo, Nav, StyledHeader } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="./images/logo.svg" alt="" />
          <Button>Try It Free</Button>
        </Nav>
        <h1>Header</h1>
      </Container>
    </StyledHeader>
  );
};

export default Header;
