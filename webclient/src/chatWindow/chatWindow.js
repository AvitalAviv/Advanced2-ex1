import './ChatWindow.css';
import React, { Component } from 'react';
import logo from '../chatWindow/logo.png';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className='chat__window'>

                <div className='chat__header'>
                    <div className='chat__header__info'>
                        <img src={logo} class="rounded-circle"></img>
                        <h6 className="chatWindow__header__userName">User Name</h6>
                    </div>

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