import React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const LoginPage = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin-top: 0;
  }
  input {
    height: 20px;
    width: 250px;
    margin-bottom: 5px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
  }
  a {
    margin-top: 30px;
    height: 40px;
    width: 150px;
    border: 1px solid #000;
    border-radius: 5px;
    color: #000;
    text-decoration: none;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    &:hover {
      color: #fff;
      background-color: #000;
    }
  }
`

class LogInPage extends React.Component {
  render() {
    return (
      <LoginPage>
        <LoginContainer>
          <h1>Log In</h1>
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Password' />
          <Link to="/home">Log In</Link>
        </LoginContainer>
      </LoginPage>
    )
  }
}

export default LogInPage
