import React from "react";
import placeholder from "../images/placeholder.jpg";
import { Link } from "react-router-dom";

class MyCoursesPage extends React.Component {
  state = {
    courses: [
      {
        id: 1,
        name: "part 1",
        address: "https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
      },
      {
        id: 2,
        name: "part 2",
        address: "https://www.youtube.com/embed/wZVzeob4ywc"
      },
      {
        id: 3,
        name: "part 3",
        address: "https://www.youtube.com/embed/Fq15pkckMqQ"
      },
      {
        id: 4,
        name: "part 4",
        address: "https://www.youtube.com/embed/Lt4P9BKOPfI"
      },
      {
        id: 5,
        name: "part 5",
        address: "https://www.youtube.com/embed/Spui2z-m93g"
      },
      {
        id: 6,
        name: "part 6",
        address: "https://www.youtube.com/embed/grZ4BVcFmeA"
      },
      {
        id: 7,
        name: "part 7",
        address: "https://www.youtube.com/embed/Sqkm39rqmEg"
      },
      {
        id: 8,
        name: "part 8",
        address: "https://www.youtube.com/embed/eUMbH6X_Adc"
      }
    ]
  };

  render() {
    return (
      <div>
        <h1>List of your courses:</h1>
        {this.state.courses.map(course => (
          <Link to={{
            pathname: '/courses/' + course.id,
            course: this.state.courses[0]
          }} key={course.id}>
            <img src={placeholder} alt="link-to-video" />
            <h3>{course.name}</h3>
          </Link>
        ))}
      </div>
    );
  }
}

export default MyCoursesPage;
