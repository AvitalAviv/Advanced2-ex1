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
                    
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="type here your message..." aria-label="Recipient's username" aria-describedby="basic-addon2"></input>
                        <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button">Send</button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ChatWindow;