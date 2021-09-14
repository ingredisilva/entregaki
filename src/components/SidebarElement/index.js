import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWraper,
  SidebarLink,
  SidebarMenu,
} from "./SidebarElement";

export const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onCLick="toggle">
      <Icon onCLick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarWraper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            Sobre
          </SidebarLink>
          <SidebarLink to="serviços" onClick={toggle}>
            Serviços
          </SidebarLink>
          <SidebarLink to="equipe" onClick={toggle}>
            Equipe
          </SidebarLink>
          <SidebarLink to="signin" onClick={toggle}>
            Entrar
          </SidebarLink>
        </SidebarMenu>
      </SidebarWraper>
    </SidebarContainer>
  );
};

export default Sidebar;
