import React from "react";
import { FaBars } from "react-icons/fa";
import Cards from "../Cards/Cards";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">MemoCode</NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/Cards">Cards</NavLinks>
              
            </NavItem>
            <NavItem>
              <NavLinks to="Train">Train</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/auth">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;