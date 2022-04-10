import './MessageFromOther.css';
import React, { Component } from 'react';
import logo from './MessageFromOther';
import MessageOther from './MessageOther';

class MessageFromOther extends Component {
    constructor(props) {
        super(props);
        this.chat = props.chat;
        this.name = null;
    }

    render() {
        return (
            <div>
                {this.chat.two_user_message.map((message, key) => {
                    return <MessageOther time={message.time} name={this.chat.two_user} value={message.value} key={key} />
                })}
            </div>

        );
    }
}

export default MessageFromOther;