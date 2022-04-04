import './ChatWindow.css';
import React, { Component } from 'react';
import logo from '../chatWindow/logo.png';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        console.log("avital");
        return(
            <div className='chat__window'>
                <div className='chat__header'>
                    <img src={logo} class="rounded-circle"></img>
                    <h5 className="sidebar__header__userName">User Name</h5>
                </div>

                <div className='chat__body'>

                </div>

                <div className='chat__down__window'>

                </div>
            </div>
        );
    }
}

export default ChatWindow;