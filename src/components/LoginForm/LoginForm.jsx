import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { doLogin } from '../../redux/session/sessionActions';

// eslint-disable-next-line no-shadow
const LoginForm = ({ doLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const notify = message => toast.error(message);
  const handleSubmit = e => {
    e.preventDefault();
    if (!username) {
      return notify('Username is required');
    }
    if (!password) {
      return notify('Password is required');
    }
    return doLogin({ username, password }).catch(error =>
      notify(error.message),
    );
  };
  return (
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop ">
              <form
                autoComplete="off"
                method="POST"
                onSubmit={handleSubmit}
                action="#"
                className="box"
              >
                <div className="field">
                  <label htmlFor="username" className="label">
                    Email
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        placeholder="input name here"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        name="username"
                        type="text"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label htmlFor="password" className="label">
                    Password
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        name="password"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </label>
                </div>
                <div className="field">
                  <button
                    type="submit"
                    className="button is-primary is-medium is-normal is-fullwidth"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </section>
  );
};
LoginForm.propTypes = {
  doLogin: PropTypes.func.isRequired,
};
export default connect(null, { doLogin })(LoginForm);
