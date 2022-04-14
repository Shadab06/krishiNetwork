import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProvateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) => {
        const admin = JSON.parse(localStorage.getItem("profile"));
        if (admin) {
          return <Component {...props} />;
        } else {
          return <Redirect to={"/register"} />;
        }
      }}
    />
  );
};

export default ProvateRoute;
