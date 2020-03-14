import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getIsAuth from '../../redux/session/sessionSelectors';

const ProtectedRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
    }
  />
);
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: getIsAuth(state),
});

export default connect(mapStateToProps)(ProtectedRoute);
