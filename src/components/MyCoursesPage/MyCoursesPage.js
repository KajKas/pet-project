import React from "react";
import placeholder from "../images/placeholder.jpg";
import { Link } from "react-router-dom";

class MyCoursesPage extends React.Component {
  state = {

  };

  render() {
    return (
      <div>
        <h1>List of your courses:</h1>
        {this.props.courses.map(course => (
          <Link to={{
            pathname: '/courses/' + course.id,
            course: this.props.courses[0]
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
