import React from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const CourseBarContainer = styled.div`
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  width: 250px;
  background-color: #fff;
  border-left: 2px solid #000;
  overflow-y: scroll;
`

const CourseBarLink = styled(NavLink)`
  display: block;
  padding: 25px;
  text-decoration: none;
  color: #000;
  border-bottom: 1px solid #000;
  transition: 0.2s;
  &:hover {
    color: #fff;
    background-color: #000;
  }
`

class CourseBar extends React.Component {


  render() {
    return (
      <CourseBarContainer>
        <CourseBarLink to="/">
          Setting Environment
        </CourseBarLink>
        <CourseBarLink to="/">
          Create React App
        </CourseBarLink>
        <CourseBarLink to="/">
          My first component
        </CourseBarLink>
        <CourseBarLink to="/">
          Reusing components
        </CourseBarLink>
        <CourseBarLink to="/">
          Mapping arrays
        </CourseBarLink>
        <CourseBarLink to="/">
          Reducing arrays
        </CourseBarLink>
        <CourseBarLink to="/">
          Async
        </CourseBarLink>
        <CourseBarLink to="/">
          Intro to redux
        </CourseBarLink>
        <CourseBarLink to="/">
          Async redux
        </CourseBarLink>
        <CourseBarLink to="/">
          Setting Environment
        </CourseBarLink>
        <CourseBarLink to="/">
          Create React App
        </CourseBarLink>
        <CourseBarLink to="/">
          My first component
        </CourseBarLink>
        <CourseBarLink to="/">
          Reusing components
        </CourseBarLink>
        <CourseBarLink to="/">
          Mapping arrays
        </CourseBarLink>
        <CourseBarLink to="/">
          Reducing arrays
        </CourseBarLink>
        <CourseBarLink to="/">
          Async
        </CourseBarLink>
        <CourseBarLink to="/">
          Intro to redux
        </CourseBarLink>
        <CourseBarLink to="/">
          Async redux
        </CourseBarLink>
      </CourseBarContainer>
    )
  }
}

export default CourseBar
