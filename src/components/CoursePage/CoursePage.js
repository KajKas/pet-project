import React, { Component } from 'react'
import { connect } from "react-redux"
import styled from 'styled-components'
import CourseBar from "../CourseBar/CourseBar";

const Video = styled.iframe`
  width: 1280px;
  height: 720px;
`

class CoursePage extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.courses[this.props.activeCourse].name}</h1>
        <Video
          title={this.props.courses[this.props.activeCourse].name}
          src={this.props.courses[this.props.activeCourse].address}
          frameBorder="0"
          allowFullScreen
        />
        <CourseBar />
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
