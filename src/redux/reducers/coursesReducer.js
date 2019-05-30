import initialState from './initialState'

export default function coursesReducer(state = initialState.courses, action) {
  switch (action.type) {
    case 'LOAD_COURSES_SUCCESS':
      return action.courses
    default:
      return state
  }
}
