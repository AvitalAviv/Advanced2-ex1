import './signinpage/SignInPage.css';
import React, { useState, Component } from 'react';
import SignInPage from './signinpage/SignInPage';
import DbUsers from './users/DbUsers';

class App extends Component {
  constructor() {
    super();
    this.dbUsers = new DbUsers();
  }
  render() {
    return (
      <SignInPage DbUsers={this.dbUsers} />
    );
  }
}
export default App;