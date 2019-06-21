import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { createStore } from "redux";

import reducer from './redux/reducers/index'
import PageNotFound from "./PageNotFound";
import LogInPage from "./components/LogInPage/LogInPage";
import MenuTop from "./components/MenuTop/MenuTop";
import MenuSide from "./components/MenuSide/MenuSide";
import HomePage from "./components/HomePage/HomePage";
import MyCoursesPage from "./components/MyCoursesPage/MyCoursesPage";
import CoursePage from "./components/CoursePage/CoursePage";
import TasksPage from "./components/TasksPage/TasksPage";
import TestsPage from "./components/TestsPage/TestsPage";
import AddedPage from "./components/AddedPage/AddedPage";
import ContactPage from "./components/ContactPage/ContactPage";
import ForumPage from "./components/ForumPage/ForumPage";
import CategoriesPage from "./components/CategoriesPage/CategoriesPage";

const PageContainer = styled.div`
  padding-top: 60px;
  padding-left: 200px;
  background-color: #87898c;
`;

const initialState = {
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
}

const store = createStore(reducer, initialState)

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
