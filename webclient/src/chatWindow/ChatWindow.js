import './ChatWindow.css';
import React, { Component } from 'react';
import logo from '../chatWindow/logo.png';
import MessageFromMe from '../messageFromMe/MessageFromMe';
import MessageFromOther from '../messageFromOther/MessageFromOther';

class ChatWindow extends Component {
    constructor(props) {
        super(props);
        this.user = props.User;
    }

    render() {
        return (
            <div class="position-relative">
                <div class="chat-messages p-4">
                    <MessageFromMe/>
                    <MessageFromOther/>
                </div>
            </div>
        );
    }
}

export default ChatWindow;