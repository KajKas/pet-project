import React from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  margin-top: 50px;
`

const CategoryLink = styled.a`
  font-size: 30px;
  display: block;
  color: #000;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const SubcategoryLink = styled.a`
  font-size: 20px;
  color: #000;
  text-decoration: none;
  margin-right: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`

class CategoriesPage extends React.Component {


  render() {
    return (
      <div>
        <h1>Categories</h1>
        <h3>You can browse our courses by categories or subcategories:</h3>
        <CategoryContainer>
          <CategoryLink href="#">Computer skills</CategoryLink>
          <SubcategoryLink href="#">JavaScript</SubcategoryLink><SubcategoryLink href="#">React</SubcategoryLink>
          <SubcategoryLink href="#">Angular</SubcategoryLink><SubcategoryLink href="#">Express</SubcategoryLink>
          <SubcategoryLink href="#">Nest</SubcategoryLink><SubcategoryLink href="#">Vue</SubcategoryLink>
          <SubcategoryLink href="#">Ember</SubcategoryLink>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryLink href="#">Sciences</CategoryLink>
          <SubcategoryLink href="#">Biology</SubcategoryLink><SubcategoryLink href="#">Physics</SubcategoryLink>
          <SubcategoryLink href="#">Chemistry</SubcategoryLink>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryLink href="#">Social sciences</CategoryLink>
          <SubcategoryLink href="#">Psychology</SubcategoryLink><SubcategoryLink href="#">Political science</SubcategoryLink>
          <SubcategoryLink href="#">History</SubcategoryLink><SubcategoryLink href="#">Sociology</SubcategoryLink>
          <SubcategoryLink href="#">Economics</SubcategoryLink><SubcategoryLink href="#">Anthropology</SubcategoryLink>
          <SubcategoryLink href="#">Linguistics</SubcategoryLink>
        </CategoryContainer>
      </div>
    )
  }
}

export default CategoriesPage
