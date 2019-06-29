import React from 'react'
import store from '../../redux/store'

const CoursePage = () => {
  const state = store.getState()
  const { courses, activeCourse } = state

  return (
    <div>
      <h1>course name</h1>
      <iframe
        title={courses[activeCourse].name}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        src={courses[activeCourse].address}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )
}

export default CoursePage
