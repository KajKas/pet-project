export default function getAllCourses(state = {
  courses: [
    {
      "id": 0,
      "name": "part 1",
      "address": "https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
    },
    {
      "id": 1,
      "name": "part 2",
      "address": "https://www.youtube.com/embed/wZVzeob4ywc"
    },
    {
      "id": 2,
      "name": "part 3",
      "address": "https://www.youtube.com/embed/Fq15pkckMqQ"
    },
    {
      "id": 3,
      "name": "part 4",
      "address": "https://www.youtube.com/embed/Lt4P9BKOPfI"
    },
    {
      "id": 4,
      "name": "part 5",
      "address": "https://www.youtube.com/embed/Spui2z-m93g"
    },
    {
      "id": 5,
      "name": "part 6",
      "address": "https://www.youtube.com/embed/grZ4BVcFmeA"
    },
    {
      "id": 6,
      "name": "part 7",
      "address": "https://www.youtube.com/embed/Sqkm39rqmEg"
    },
    {
      "id": 7,
      "name": "part 8",
      "address": "https://www.youtube.com/embed/eUMbH6X_Adc"
    }
  ]
}, action)  {
  switch (action.type) {
    case 'GET_ALL_COURSES':
      return state.courses
    default:
      return state
  }
}
