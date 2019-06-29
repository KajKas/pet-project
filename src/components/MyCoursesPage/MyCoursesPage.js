import React from "react";
import placeholder from "../images/placeholder.jpg";
import { Link } from "react-router-dom";
import store from '../../redux/store'
import { setActiveCourse } from "../../redux/actions"
import _ from 'lodash'

const MyCoursesPage = () => {
  const courses = _.values(store.getState().courses)
  const handleCourseClick = (id) => {
    store.dispatch(setActiveCourse(id))
  }

    return (
      <div>
        <h1>List of your courses:</h1>
        {courses.map(course => (
          <div onClick={handleCourseClick(1)} key={course.id}>
            <Link  to={{
              pathname: '/courses/' + course.id,
              course: courses[0]
            }}>
              <img src={placeholder} alt="link-to-video" />
              <h3>{course.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    )
}

export default MyCoursesPage
