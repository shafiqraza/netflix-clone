import React from "react";

import logo from "../../logo.svg";

import { Background, Container, LogoContainer, SigninLink, ChildrenContainer} from "./header.styles";

import routes from "../../constants/routes";

const Header = ({children}) => {
  return (
    <Background>
      <Container>
        <LogoContainer to={routes.HOME}>
          <img src={logo} alt="Netflix logo" />
        </LogoContainer>
        <SigninLink to={routes.SIGNIN}>Sign In</SigninLink>
      </Container>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Background>
  );
}

export default Header;