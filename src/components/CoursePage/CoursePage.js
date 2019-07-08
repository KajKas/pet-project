import React, { Component } from 'react'
import { connect } from "react-redux"

class CoursePage extends Component {
  render() {
    return (
      <div>
        <h1>course name</h1>
        <iframe
          title={this.props.courses[this.props.activeCourse].name} // TODO: change to getting from the address, or fail after reload
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src={this.props.courses[this.props.activeCourse].address}
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

export default connect(mapStateToProps)(CoursePage)
