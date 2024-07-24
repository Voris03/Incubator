import React from "react";
import styled from "styled-components";
import Logo from "../../components/logo/logo";
import Menu from "../../components/menu/menu";

const items = ["Home", "Skills", "Works", "Testimony", "Contact"]


const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menuItems={items}/>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: #1F1F20;
  display: flex;
  alight-item: center;
  justify-content: space-between; 
`

export default Header;
