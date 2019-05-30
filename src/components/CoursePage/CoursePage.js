import React from 'react'

class CoursePage extends React.Component {


  render() {
    return (
      <div>
        <h1>{this.props.location.course.name}</h1>
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src={this.props.location.course.address}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  } 
}

export default CoursePage
