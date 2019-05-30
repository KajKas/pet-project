import React from 'react'
import { Link } from "react-router-dom";

class LogInPage extends React.Component {


  render() {
    return (
      <div>
        <h1>Log In</h1>
        <Link to="/home">Log In</Link>
      </div>
    )
  }
}

export default LogInPage
