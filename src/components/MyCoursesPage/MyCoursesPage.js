import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { getAllCourses, setActiveCourse } from "../../redux/actions"
import placeholder from "../../images/placeholder.jpg"
import styled from 'styled-components'

const LastVideo = styled.iframe`
  height: 550px;
  width: 980px;
  margin-bottom: 70px;
`

const VideoLink = styled(Link)`
  color: #000;
  text-decoration: none;
  img {
    width: 100%;
  }
  h3 {
    margin: 5px 0 30px 0;
  }
`

const VideosContainer = styled.div`
  display: flex;
  width: 95%;
  flex-wrap: wrap;
  div {
    width: 24%;
    padding-right: 1%;
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
        <h1>Your courses:</h1>
        <h2>Continue your last course:</h2>
        <LastVideo
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <h2>List of all your courses:</h2>
        <VideosContainer>
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
        </VideosContainer>

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
