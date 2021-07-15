import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "./component/dashboard/Dashboard";
import { Tables } from "./component/Tables";
import { Hero404 } from "./component/error/Hero404";
import { Profile } from "./component/profile/Profile";
import  Login  from "./component/auth/Login"
import  Signup  from "./component/auth/Signup"
import './App.css';

function App() {
	
  return (
    <div>
     <Fragment>
      <BrowserRouter>
        <Route exact path="/" render={() => <Login/> } />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/signup" component={Signup} />
        <Route path="/tables" component={Tables} />
        <Route path="/hero404" component={Hero404} />
        <Route path="/profile" component={Profile} />
      </BrowserRouter>
    </Fragment>
    </div>
  );
}

export default App;
