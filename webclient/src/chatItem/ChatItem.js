import "./ChatItem.css";
import React, { Component } from 'react';
import logo from "../chatItem/logo.png";

class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.userChat = props.userChat;
        //need to set default photo to user that do not entered a photo
    };
    render() {
        return (
            <div className="chat__item">
                <img src={logo} class="rounded-circle"></img>
                <div className="chat__item__info">
                    <h5>room name</h5>
                    <p>last message...</p>
                    <p>time</p>
                </div>
            </div>
        )
    }
}

export default ChatItem;