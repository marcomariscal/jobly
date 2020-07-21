import React from "react";
import "./Navigation.css";
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from "reactstrap";

const Navigation = ({ isLoggedIn = true }) => {
  return (
    <div className="Navigation">
      <Navbar className="Navigation navbar-expand-md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        {isLoggedIn ? (
          <Nav className="ml-auto">
            <NavItem className="mr-4">
              <NavLink href="/companies">Companies</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink href="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/logout">Logout</NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
