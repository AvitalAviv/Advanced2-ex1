import "./ChatItem.css";
import React, { Component } from 'react';


class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.userChat = props.userChat;
    };
    render() {
        return (
            <div>
                <div>-user name -</div>
                <div>last massage</div>
                <div>time</div>
                <div>on click put in Link</div>
            </div>
        )
    }
}

export default ChatItem;