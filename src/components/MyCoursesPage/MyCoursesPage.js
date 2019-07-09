import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import * as actions from "../../redux/actions"
import placeholder from "../images/placeholder.jpg"

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
            <div onClick={handleCourseClick.bind(null, course.id)} key={course.id}>
              <Link  to={'/courses/' + course.id}>
                <img src={placeholder} alt="link-to-video" />
                <h3>{course.name}</h3>
              </Link>
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

export default connect(mapStateToProps, actions)(MyCoursesPage)
