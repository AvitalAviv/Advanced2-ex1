import React, { Component } from 'react';
import logo from '../messageFromMe/MessageFromMe';
import Chat from '../users/chat/Chat';
import MessageOther from '../messageFromOther/MessageOther';

class ChatPreview extends Component {
    constructor(props) {
        super(props);
        this.chat_person = props.current_chat_partner;
        this.user = props.User;
        this.dbUsers = props.dbUsers;
        this.newOne = props.newOnel
    }
    componentDidUpdate(props) {
        this.chat_person = props.current_chat_partner;
        console.log("in chatpreview " + this.chat_person);
    }


    render() {
        return (
            <div>
                {this.chat_person}
                {/* {this.dbUsers[this.user.user_name].chats[this.state.chat_partner].map((message, key) => {
                    return <MessageOther time={message.time} name={this.user.name} value={message.value} key={key} />
                })} */}
                {/* {this.dbUsers[this.user.user_name].chats["Avitalos"]} */}
            </div>

        );
    }
}

export default ChatPreview;