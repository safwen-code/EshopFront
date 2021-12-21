import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavbarToggler,
  NavLink,
  NavbarText,
} from "reactstrap";
import React from "react";

import { LinkContainer } from "react-router-bootstrap";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
const Header = () => {
  return (
    <div>
      <Navbar color="secondary" dark expand="md" light>
        <LinkContainer to="/">
          <NavbarBrand>Eshop</NavbarBrand>
        </LinkContainer>

        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <LinkContainer to="/">
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/contact">
              <NavItem>
                <NavLink>Contact</NavLink>
              </NavItem>
            </LinkContainer>
          </Nav>
          <LinkContainer to="/cart">
            <NavbarText className="mx-3">
              <AiOutlineShoppingCart></AiOutlineShoppingCart>
              {"   "}Cart
            </NavbarText>
          </LinkContainer>
          <LinkContainer to="/login">
            <NavbarText>
              <AiOutlineUserAdd></AiOutlineUserAdd>
              {"  "}signIn
            </NavbarText>
          </LinkContainer>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
