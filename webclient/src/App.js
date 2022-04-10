import './signinpage/SignInPage.css';
import React, { Component } from 'react';
import SignInPage from './signinpage/SignInPage';
import DbUsers from './users/DbUsers';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './about/About';
import ErrorPage from "./errorPage/ErrorPage";
import ChatRoom from './chatRoom/ChatRoom';

class App extends Component {
  constructor() {
    super();
    this.dbUsers = new DbUsers();
  }
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<SignInPage DbUsers={this.dbUsers} />} />
          <Route path="/home" element={<SignInPage DbUsers={this.dbUsers} />} />
          <Route path="/chat" element={<ChatRoom DbUsers={this.DbUsers} User={this.userLogged} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    );
  }
}
export default App;