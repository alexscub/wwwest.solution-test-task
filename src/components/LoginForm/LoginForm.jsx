import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { doLogin } from '../../redux/session/sessionActions';

class Login extends Component {
  static propTypes = {
    doLogin: PropTypes.func.isRequired,
  };

  state = {
    username: '',
    password: '',
  };

  notify = message => toast.error(message);

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-shadow
    const { doLogin } = this.props;
    const { username, password } = this.state;
    if (!username) {
      return this.notify('Username is required');
    }
    if (!password) {
      return this.notify('Password is required');
    }
    return doLogin({ username, password }).catch(error =>
      this.notify(error.message),
    );
  };

  render() {
    const { username, password } = this.state;
    return (
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop ">
                <form
                  autoComplete="off"
                  method="POST"
                  onSubmit={this.handleSubmit}
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
                          onChange={this.handleChange}
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
                          onChange={this.handleChange}
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
  }
}

export default connect(null, { doLogin })(Login);
