import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import "./App.css";
import Login from "./components/LoginJava";
import Home from "./components/HomeComponent";
import Contact from "./components/Contact";
import Step from "./components/Step";
import Register from "./components/RegisterComp";
import Payment from "./components/Payment";
import StudentRegis from "./components/StudentRegis";
import TeacherRegis from "./components/TeacherRegis";
import SubRegis from "./components/SubRegis";
import Courses from "./components/Courses";
import Table from "./components/Table";
import TableTeacher from "./components/TableTeacher";
import TutorDetail from "./components/TutorDetail";
import Mycourse from "./components/Mycourse";
import Tutorcourse from "./components/Tutorcourse";
import StartLearn from "./components/StartLearn";
import StartTeacher from "./components/StartTeacher";
import { BrowserRouter as Router, Route } from "react-router-dom";
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/contact" component={Contact} />
      <Route path="/steps" component={Step} />
      <Route path="/register" component={Register} />
      <Route path="/payment" component={Payment} />
      <Route path="/student_register" component={StudentRegis} />
      <Route path="/teacher_register" component={TeacherRegis} />
      <Route path="/subject_register" component={SubRegis} />
      <Route path="/courses" component={Courses} />
      <Route path="/table" component={Table} />
      <Route path="/table_teacher" component={TableTeacher} />
      <Route path="/tutor_detail" component={TutorDetail} />
      <Route path="/st_course" component={Mycourse} />
      <Route path="/tt_course" component={Tutorcourse} />
      <Route path="/start" component={StartLearn} />
      <Route path="/start_teach" component={StartTeacher} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(<NvBarCom></NvBarCom>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
