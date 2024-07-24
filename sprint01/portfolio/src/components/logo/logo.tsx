import React from "react";
import Icon from "../Icon/icon";
import styled from "styled-components";



const Logo = () => {
  return (
    <StyledLogo href="#">
      <Icon iconId={"logo"} />
      <p>Voris</p>
    </StyledLogo>
  );
};

const StyledLogo = styled.a`

`

export default Logo;
