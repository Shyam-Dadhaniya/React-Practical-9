import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage/HomePage";
import SignUpContainer from "../container/SignUpContainer";
import { useSelector } from "react-redux";
const Routes = () => {
  const isAuth = useSelector((state) => {
    return state.user.isAuth;
  });
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/signup" />
      </Route>
      <ProtectedRoute path="/homepage" auth={isAuth} redirect="/signup">
        <HomePage />
      </ProtectedRoute>
      <ProtectedRoute path="/signup" redirect="/homepage" auth={!isAuth}>
        <SignUpContainer />
      </ProtectedRoute>
    </Switch>
  );
};

export default Routes;
