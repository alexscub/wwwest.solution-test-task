/* eslint-disable prefer-promise-reject-errors */
import types from '../types';

// Login
export const login = () => ({
  type: types.LOGIN,
});

// Logout
export const logout = () => ({
  type: types.LOGOUT,
});

const fakeLoginRequest = ({ username, password }) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (username === 'admin') {
        if (password === '12345') {
          return resolve({ username });
        }
        return reject('wrong password');
      }
      return reject('No such user');
    }, 1000),
  );

export const doLogin = user => async dispatch => {
  try {
    await fakeLoginRequest(user);
    dispatch(login());
  } catch (error) {
    throw new Error(error);
  }
};

export const doLogout = () => dispatch => {
  dispatch(logout());
};
