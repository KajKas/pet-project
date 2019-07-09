import axios from 'axios'

export const setActiveCourse = id => ({
  type: 'SET_ACTIVE_COURSE',
  payload: id
})

export const getAllCourses = () => {
  return (dispatch) => {
    return axios.get('http://localhost:4000/courses').then((response) => {
      const data = response.data
      dispatch({
        type: 'GET_ALL_COURSES',
        payload: data
      })
    })
  }
}
