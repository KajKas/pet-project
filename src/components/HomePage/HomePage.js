import React from "react";
import styled from "styled-components";

const LastVideo = styled.iframe`
  height: 550px;
  width: 980px;
`;

const PreviousVideos = styled.iframe`
  height: 200px;
  width: 350px;
`

const SuggestedVideos = styled.iframe`
  height: 150px;
  width: 250px;
`

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Continue last course:</h1>
        <LastVideo
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <h2>Your previous courses:</h2>
        <PreviousVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <PreviousVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <PreviousVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <h3>Suggestions:</h3>
        <SuggestedVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <SuggestedVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <SuggestedVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
        <SuggestedVideos
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          src="https://www.youtube.com/embed/7Erbf5NXQQw?rel=0"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default HomePage;
