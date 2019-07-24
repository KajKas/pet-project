import axios from 'axios'

export const setActiveCourse = id => ({
  type: 'SET_ACTIVE_COURSE',
  payload: id
})

export const getAllCourses = () => ({
  type: 'GET_ALL_COURSES',
})
