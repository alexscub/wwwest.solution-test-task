import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import getIsAuth from '../redux/session/sessionSelectors';

const withAuthRedirect = Component => {
  function WithAuthRedirect({ isAuth, ...restProps }) {
    return isAuth ? <Redirect to="/profile" /> : <Component {...restProps} />;
  }

  const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
  });

  WithAuthRedirect.propTypes = {
    isAuth: PropTypes.bool.isRequired,
  };

  return connect(mapStateToProps)(WithAuthRedirect);
};

export default withAuthRedirect;
