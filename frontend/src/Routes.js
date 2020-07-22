import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import Companies from "./Companies";
import Company from "./Company";
import Jobs from "./Jobs";
import Login from "./Login";
import Profile from "./Profile";
import Search from "./Search";

const Routes = () => {
  const renderCompany = (props) => {
    const { company } = props.match.params;

    return <Company company={company} />;
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/companies">
          <Search />
          <Companies />
        </Route>
        <Route exact path="/companies/:company" render={renderCompany} />
        <Route exact path="/jobs">
          <Jobs />
        </Route>
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
