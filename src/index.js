import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { store, persistor } from './redux/store';
import App from './components/App';
import 'normalize.css';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.css';
import './stylesheet/main.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router basename="/">
        <Route component={App} />
      </Router>
    </PersistGate>{' '}
  </Provider>,
  document.getElementById('root'),
);
