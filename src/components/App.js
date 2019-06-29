import React from "react"
import styled from "styled-components"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

// import PageNotFound from "./PageNotFound"
import LogInPage from "./LogInPage/LogInPage"
import MenuTop from "./MenuTop/MenuTop"
import MenuSide from "./MenuSide/MenuSide"
import HomePage from "./HomePage/HomePage"
import MyCoursesPage from "./MyCoursesPage/MyCoursesPage"
import CoursePage from "./CoursePage/CoursePage"
import TasksPage from "./TasksPage/TasksPage"
import TestsPage from "./TestsPage/TestsPage"
import AddedPage from "./AddedPage/AddedPage"
import ContactPage from "./ContactPage/ContactPage"
import ForumPage from "./ForumPage/ForumPage"
import CategoriesPage from "./CategoriesPage/CategoriesPage"

const PageContainer = styled.div`
  padding-top: 60px;
  padding-left: 200px;
  background-color: #87898c;
`

function App({ store }) {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={LogInPage} />
            <div>
              <MenuTop />
              <MenuSide />
              <PageContainer>
                <Route path="/home" component={HomePage} />
                <Route exact path="/courses" component={MyCoursesPage} />
                <Route path="/courses/:id" component={CoursePage} />
                <Route path="/tasks" component={TasksPage} />
                <Route path="/tests" component={TestsPage} />
                <Route path="/added" component={AddedPage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/forum" component={ForumPage} />
                <Route path="/categories" component={CategoriesPage} />
              </PageContainer>
            </div>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App
