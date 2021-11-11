import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Createpage from "../components/Createpage";
import Createsubpage from "../components/Createsubpage";
import Viewpage from "../components/Viewpage";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Login from "../components/Login";
import Registration from "../components/Registration";
import Seopage from "../components/Seopage";
import DisplayPage from '../components/Displaypage'
import Displaysubage from '../components/Displaysubpage'
import Profile from "../components/Profile";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/login" exact component={Login} />
      <Route path="/createpage" exact component={Createpage} />
      <Route path="/createsubpage" exact component={Createsubpage} />
      <Route path="/viewpage" exact component={Viewpage} />
      <Route path="/seopage" exact component={Seopage} />
      <Route path="/displaypage" exact component={DisplayPage} />
      <Route path="/displaysubpage" exact component={Displaysubage} />
      <Route path="/profile" exact component={Profile} />
    </Switch>
  </Router>
);