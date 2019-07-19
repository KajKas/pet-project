import React, { Component } from 'react'
import { connect } from "react-redux"
import { getAllCourses, setActiveCourse } from "../../redux/actions"

class CoursePage extends Component {
  componentDidMount() {
    this.props.getAllCourses()
  }

  render() {
    const courseId = this.props.location.pathname.split('courses/')[1]

    return (
      this.props.courses && courseId &&
      <div>
        {console.log(this.props.courses)}
        <h1>course name</h1>
        <iframe
          title={this.props.courses[courseId].name} // TODO: change to getting from the address, or fail after reload
          src={this.props.courses[courseId].address}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    activeCourse: state.activeCourse
  }
}

const actions = {
  getAllCourses,
  setActiveCourse
}

export default connect(mapStateToProps, actions)(CoursePage)
