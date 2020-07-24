import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";

const Routes = () => {
  const renderCompany = (props) => {
    const { handle } = props.match.params;
    return <Company handle={handle} />;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={false} />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/companies/:handle" render={renderCompany} />
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
