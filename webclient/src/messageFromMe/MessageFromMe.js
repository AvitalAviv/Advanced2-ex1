import './MessageFromMe.css';
import React, { Component } from 'react';
import logo from '../messageFromMe/MessageFromMe';
import Chat from '../users/chat/Chat';
import MessageMe from '../messageFromMe/MessageMe';

class MessageFromMe extends Component {
    constructor(props) {
        super(props);
        this.chat = props.chat;
        debugger;
        this.name = null;
    }
    render() {
        return (
            <div>
                {this.chat.one_user_message.map((message, key) => {
                    return <MessageMe time={message.time} name={this.chat.two_user} value={message.value} key={key} />
                })}
            </div>

        );
    }
}

export default MessageFromMe;