import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.nav`
  background: #0a81ab;
  height: 80px;
  /*margin-top: -80px; */
  display: flex;
  justify-content: center;
  font-family: "Encode Sans Extended", sans-serif;
  font-size: 1rem;
  position: sticky;
  top: 0;

  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0, 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
  color: #fff;
  letter-spacing: 1px;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;

  margin-left: 24px;
  font-weight: 800;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 4vh;
    right: 1vh;
    transform: translate(-100, 60);
    font-size: 1.8rem;
    cursor: pointer;
    color: greenyellow;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItems = styled.li`
  height: 80px;
`;

/* Cor #261C2C */

export const NavLinks = styled(LinkScroll)`
  font-family: "Encode Sans Extend", sans-serif;
  font-weight: 400;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  
  &:hover {
    transition: all 0.2s ease-in-out;

    color: #261c2c;
  }
  }

  &.active {
    border-bottom: 3px solid #a1bf71;
  };
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLinks = styled(LinkScroll)`
  font-family: "Encode Sans Extend", sans-serif;
  border-radius: 50px;
  background: #fff;
  white-space: nowrap;
  padding: 10px 25px;
  color: #261c2c;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #261c2c;
  }
`;
