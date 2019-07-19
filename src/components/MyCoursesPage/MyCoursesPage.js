import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { getAllCourses, setActiveCourse } from "../../redux/actions"
import placeholder from "../../images/placeholder.jpg"
import styled from 'styled-components'

const VideoLink = styled(Link)`
  color: #000;
  text-decoration: none;
  h3 {
    margin: 5px 0 30px 0;
  }
`

class MyCoursesPage extends Component {
  componentDidMount() {
    this.props.getAllCourses()
  }

  render() {
    const courses = _.values(this.props.courses)
    const handleCourseClick = id => {
      this.props.setActiveCourse(id)
    }

    return (
      <div>
        <h1>List of your courses:</h1>
        {
          courses.map(course => (
            <div onClick={() => handleCourseClick(course.id)} key={course.id}>
              <VideoLink  to={'/courses/' + course.id}>
                <img src={placeholder} alt="link-to-video" />
                <h3>{course.name}</h3>
              </VideoLink>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

const actions = {
  getAllCourses,
  setActiveCourse
}

export default connect(mapStateToProps, actions)(MyCoursesPage)
