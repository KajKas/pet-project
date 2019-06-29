export default function setActiveCourse(state = null, action)  {
  switch (action.type) {
    case 'SET_ACTIVE_COURSE':
      return action.payload
    default:
      return state
  }
}
