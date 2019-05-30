import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const SideMenuContainer = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 200px;
  background-color: #696B6F;
`

const SideLink = styled(NavLink)`
  display: block;
  padding: 25px 0;
  text-decoration: none;
  color: #fff;
`

class MenuSide extends React.Component {


  render() {
    return (
      <SideMenuContainer>
        <SideLink to="/home" exact>
          Home
        </SideLink>
        <SideLink to="/courses">
          My courses
        </SideLink>
        <SideLink to="/tasks">
          Tasks
        </SideLink>
        <SideLink to="/tests">
          Tests
        </SideLink>
        <SideLink to="/added">
          Added courses
        </SideLink>
        <SideLink to="/contact">
          Contact
        </SideLink>
      </SideMenuContainer>
    )
  }
}

export default MenuSide
