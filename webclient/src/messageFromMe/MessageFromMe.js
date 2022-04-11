import './MessageFromMe.css';
import React, { Component } from 'react';
import logo from '../messageFromMe/MessageFromMe';
import Chat from '../users/chat/Chat';
import MessageMe from '../messageFromMe/MessageMe';

class MessageFromMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat_partner: props.current_chat_partner
        }
        this.user = props.User;
        this.dbUsers = props.dbUsers;
    }
    render() {
        return (
            <div>
                {this.dbUsers[this.user.name][this.state.chat_partner].map((message, key) => {
                    return <MessageMe time={message.time} name={this.user.name} value={message.value} key={key} />
                })}
            </div>

        );
    }
}

export default MessageFromMe;