import React, { useState } from "react";
import "./Navigation.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";

const Navigation = ({ isLoggedIn }) => {
  const logout = () => {
    window.localStorage.clear();
  };

  return (
    <div className="Navigation">
      <Navbar className="Navigation navbar-expand-md">
        <NavbarBrand href="/">Jobly</NavbarBrand>
        {isLoggedIn ? (
          <Nav className="ml-auto">
            <NavItem className="mr-4">
              <NavLink exact to="/companies">
                Companies
              </NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink exact to="/jobs">
                Jobs
              </NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink exact to="/profile">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/" onClick={logout}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav className="login ml-auto">
            <NavItem>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
