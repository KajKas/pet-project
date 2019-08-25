import React from 'react'
import styled from 'styled-components'

const TestContainer = styled.div`
  padding-top: 50px;
`

const Answer = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 25px;
  margin-bottom: 12px;
  margin-right: 30px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border-radius: 50%;
    border: 2px solid #000;
    margin-top: 3px;
  }

  & input:checked ~ span {
    background-color: #000;
  }
  
  & span:after {
    content: "";
    position: absolute;
    display: none;
    top: 5px;
    left: 5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: white;
  }
  
  & input:checked ~ span:after {
    display: block;
  }
`

const SubmitButton = styled.a`
  display: block;
  margin-top: 20px;
  height: 40px;
  width: 150px;
  border: 1px solid #000;
  border-radius: 5px;
  color: #000;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  font-size: 15px;
  transition: 0.2s;
  
  &:hover {
      color: #fff;
      background-color: #000;
    }
`

class TestsPage extends React.Component {


  render() {
    return (
      <div>
        <h1>Tests</h1>
        <h3>Passing tests is is required to acquire the certificate for finishing your courses. The minimum to pass is 70% of correct answers.</h3>
        <TestContainer>
          <h2>Test 1.1</h2>
          <div>
            <h3>Question 1</h3>
            <p>How much is 2 + 2?</p>
            <Answer>
              <input type="radio" name='question1'/>1
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question1'/>2
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question1'/>3
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question1'/>4
              <span></span>
            </Answer>
          </div>
          <div>
            <h3>Question 2</h3>
            <p>How much is 2 + 2?</p>
            <Answer>
              <input type="radio" name='question2'/>1
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question2'/>2
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question2'/>3
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question2'/>4
              <span></span>
            </Answer>
          </div>
          <div>
            <h3>Question 3</h3>
            <p>How much is 2 + 2?</p>
            <Answer>
              <input type="radio" name='question3'/>1
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question3'/>2
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question3'/>3
              <span></span>
            </Answer>
            <Answer>
              <input type="radio" name='question3'/>4
              <span></span>
            </Answer>
          </div>
          <SubmitButton href="#">Submit answers</SubmitButton>
        </TestContainer>
      </div>
    )
  }
}

export default TestsPage
