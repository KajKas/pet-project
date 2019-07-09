export default function getAllCourses(state = {}, action)  {
  switch (action.type) {
    case 'GET_ALL_COURSES':
      return action.payload
    default:
      return state
  }
}
