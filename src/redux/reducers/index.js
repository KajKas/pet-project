import { combineReducers } from "redux"
import activeCourse from './activeCourse'
import courses from './courses'

export default combineReducers({
  courses,
  activeCourse
})
