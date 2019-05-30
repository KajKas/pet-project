import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #43464b;
  a {
    color: #fff;
    text-decoration: none;
  }
  a:last-of-type {
    float: right;
  }
`;

class MenuTop extends React.Component {
  render() {
    return (
      <MenuContainer>
        <NavLink to="/home" exact>
          LOGO
        </NavLink>
        {" | "}
        <NavLink to="/forum" exact>
          Forum
        </NavLink>
        {" | "}
        <NavLink to="/categories" exact>
          Categories
        </NavLink>
        <NavLink to="/" exact>
          Log Out
        </NavLink>
      </MenuContainer>
    );
  }
}

export default MenuTop;
