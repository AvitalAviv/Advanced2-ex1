import './App.css';
import CheckUser from './users/CheckUser.js'
import AlertWindow from './alertwindow/AlertWindow.js'
import React, { useState, Component } from 'react';
import signInPage from './signinpage/SignInPage';
import { render } from '@testing-library/react';
import SignInPage from './signinpage/SignInPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      user: ""
    };
  };
  render() {
    if (this.state.isLogged == false) {
      console.log(this.state.isLogged);
      return (<SignInPage />);
    }
    else {
      return (<div>In App</div>)
    }
  };
};
export default App;