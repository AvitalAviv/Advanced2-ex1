import './ChatWindow.css';
import React, { Component } from 'react';
import logo from '../chatWindow/logo.png';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.user = props.User;
    }

    render() {
        return (

            <div className='chat__window'>

                <div className='chat__header'>
                    <div className='chat__header__info'>
                        <img src={logo} class="rounded-circle"></img>
                        <h5 className="chatWindow__header__userName">other user nickname</h5>
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