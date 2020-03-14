import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import LoginPage from '../pages/LoginPage/LoginPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import HomePage from '../pages/HomePage/HomePage';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/news" component={NewsPage} />
        <ProtectedRoute path="/profile" component={ProfilePage} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
