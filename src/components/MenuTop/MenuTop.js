import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #000;
  a {
    color: #fff;
    text-decoration: none;
    float: left;
    width: 250px;
  }
  a:last-of-type {
    float: right;
  }
`

const TopLink = styled(NavLink)`
  height: 100%;
  line-height: 60px;
  border-right: 1px solid #fff;
  text-align: center;
  &:hover {
    color: #000;
    background-color: #fff;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
  }
`

class MenuTop extends React.Component {
  render() {
    return (
      <MenuContainer>
        <TopLink to="/home" exact>
          LOGO
        </TopLink>
        <TopLink to="/forum" exact>
          Forum
        </TopLink>
        <TopLink to="/categories" exact>
          Categories
        </TopLink>
        <TopLink to="/" exact>
          Log Out
        </TopLink>
      </MenuContainer>
    );
  }
}

export default MenuTop;
