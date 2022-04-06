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
                <a href="/#" class="list-group-item list-group-item-action border-0">
                    <div class="d-flex align-items-center">
                        <img src={logo} className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"></img>
                        <div class="flex-grow-1 ml-3" id="side_bar_room_name">Room name </div>
                        <div class="flex-grow-1 ml-3" id="side_bar_last_message">last message... </div>
                        <div class="flex-grow-1 ml-3" id="side_bar_time">time </div>
                    </div>
                </a>
            </div>
        )
    }
}

export default ChatItem;

