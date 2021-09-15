import React from "react";
import { FaBars } from "react-icons/fa";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItems,
  NavLinks,
  NavBtn,
  NavBtnLinks,
} from "./NavbarElementos";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">EntregAKI</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItems>
              <NavLinks to="about">Sobre</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="serviços">Serviços</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="equipe">Equipe</NavLinks>
            </NavItems>
            <NavItems>
              <NavLinks to="contato">Contato</NavLinks>
            </NavItems>
          </NavMenu>
          <NavBtn>
            <NavBtnLinks to="signin">Entrar</NavBtnLinks>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};
export default Navbar;
