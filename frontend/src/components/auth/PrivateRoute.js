// frontend/src/components/authentication/PrivateRoute.js
import React from "react";
import PropTypes from "prop-types";

import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux'


const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector(state => state.auth)

    return (<Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />);

}
PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default PrivateRoute;