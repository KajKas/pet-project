import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"
import search_icon from '../../images/search_icon.png'

const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: #000;
  display: flex;
  align-items: center;
  >a {
    color: #fff;
    text-decoration: none;
    float: left;
    width: 250px;
  }
  >a:last-of-type {
    float: right;
  }
`

const TopLink = styled(NavLink)`
  height: 100%;
  line-height: 60px;
  border-right: 1px solid #fff;
  text-align: center;
  transition: 0.2s;
  &:hover {
    color: #000;
    background-color: #fff;
    border-bottom: 1px solid #000;
    box-sizing: border-box;
  }
`

const SearchBox = styled.div`
  flex: 1;
`

const SearchBar = styled.input`
  height: 30px;
  border-radius: 10px;
  border: 1px solid #000;
  width: 90%;
  padding-left: 10px;
  margin-left: 20px;
`

const SearchIcon = styled.a`
  position: relative;
  right: 30px;
  top: 4px;
  img {
    height: 20px;
    width: auto;
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
        <SearchBox>
          <SearchBar type="text" placeholder='Search...' />
          <SearchIcon href="#"><img src={search_icon} alt="magnify"/></SearchIcon>
        </SearchBox>
        <TopLink to="/" exact>
          Log Out
        </TopLink>
      </MenuContainer>
    );
  }
}

export default MenuTop;
