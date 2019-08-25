import React from 'react'
import styled from 'styled-components'

const TaskContainer = styled.div`
  padding-top: 50px;
`

const TaskTitle = styled.h2`
  margin-left: 40px;
`

const TaskCheckboxContainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  
  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  & span {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #fff;
    border: 2px solid #000;
    border-radius: 5px;
  }
  
  & input:checked ~ span {
    background-color: #000;
  }
  
  & span:after {
    content: "";
    position: absolute;
    display: none;
  }
  
  & input:checked ~ span:after {
    display: block;
  }
  
  & span:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`

const OuterDiv = styled.div`
  height: 300px;
  width: 300px;
  background-color: blue
`

const MiddleDiv = styled.div`
  height: 200px;
  width: 200px;
  background-color: red
`

const InnerDiv = styled.div`
  height: 100px;
  width: 100px;
  background-color: yellow
`

class TasksPage extends React.Component {


  render() {
    return (
      <div>
        <h1>Tasks</h1>
        <h3>These are the tasks to perform as homework. They are not obligatory but very useful in practicing your newly acquired skills</h3>

        <TaskContainer>
          <div>
            <TaskCheckboxContainer>
              <input type="checkbox"/>
              <span></span>
            </TaskCheckboxContainer>
            <TaskTitle>Task 1.1</TaskTitle>
          </div>

          <p>Using knowledge from lesson 1, create three divs inside of each other with different sizes and colors. The effect of your work should be similar to this:</p>
          <OuterDiv>
            <MiddleDiv>
              <InnerDiv></InnerDiv>
            </MiddleDiv>
          </OuterDiv>
        </TaskContainer>
      </div>
    )
  }
}

export default TasksPage
