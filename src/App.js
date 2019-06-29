import React from "react"
import styled from "styled-components"
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import PageNotFound from "./PageNotFound"
import LogInPage from "./components/LogInPage/LogInPage"
import MenuTop from "./components/MenuTop/MenuTop"
import MenuSide from "./components/MenuSide/MenuSide"
import HomePage from "./components/HomePage/HomePage"
import MyCoursesPage from "./components/MyCoursesPage/MyCoursesPage"
import CoursePage from "./components/CoursePage/CoursePage"
import TasksPage from "./components/TasksPage/TasksPage"
import TestsPage from "./components/TestsPage/TestsPage"
import AddedPage from "./components/AddedPage/AddedPage"
import ContactPage from "./components/ContactPage/ContactPage"
import ForumPage from "./components/ForumPage/ForumPage"
import CategoriesPage from "./components/CategoriesPage/CategoriesPage"

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
                <Route exact path="/courses" render={() => <MyCoursesPage courses={store.getState().courses} />} />
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
