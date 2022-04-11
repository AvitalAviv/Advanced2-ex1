import "./ChatItem.css";
import React, { Component } from 'react';
import logo from "../chatItem/logo.png";

class ChatItem extends Component {
    constructor(props) {
        super(props);
        this.userChat = props.userChat;
        this.user = props.User;
        this.db = props.Dbusers;
        //need to set default photo to user that do not entered a photo
    };

    // <div className="containter-fluid">
    // <div className="row">
    // <div className="col-2 align-items-center">
    //     <img src={logo} className="rounded-circle" id="image__chat__item" width="40" height="40"></img>
    // </div>
    // <div className="col-7 align-items-center">
    //     <h6 class="flex-grow-1" id="side_bar_room_name">Room name</h6>
    //     <div class="flex-grow-1" id="side_bar_last_message">last message... </div>
    // </div>
    // <div className="col-3 d-flex align-items-center">
    // <div class="flex-grow-1" id="side_bar_time">time </div>
    // </div>
    // </div>
    // </div>

    render() {
        return (
            <div className="chat__item">
                <a class="list-group-item list-group-item-action border-0">
                    <div className="containter-fluid">
                        <div className="row">
                            <div className="px-2 col-2 d-flex align-items-center">
                                <img src={this.userChat.second_user_photo} className="rounded-circle" id="image__chat__item" width="40" height="40"></img>
                            </div>
                            <div className="col-10 align-items-center">
                                <div className="row">
                                    <div className="col-8 d-flex align-items-center">
                                        <h6 class="flex-grow-1" id="side_bar_room_name">{this.userChat.two_user}</h6>
                                    </div>
                                    <div className="col-4 d-flex align-items-center">
                                        <div class="flex-grow-1" id="side_bar_time">{this.userChat.getLastMessage().time.getHours() + ":" + this.userChat.getLastMessage().time.getMinutes()} </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="flex-grow-1" id="side_bar_last_message">{this.userChat.getLastMessage().getMessageForRevirew()}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default ChatItem;

