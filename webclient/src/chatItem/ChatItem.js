import { Component, useState } from 'react';
import "./ChatItem.css"
import React from 'react'
import logo from '../chatItem/logo.png';

function ChatItem(props) {
    let chat = props.chat;
    debugger;
    //{this.userChat.getLastMessage().time.getHours() + ":" + this.userChat.getLastMessage().time.getMinutes()}
    // {this.userChat.getLastMessage().getMessageForRevirew()}
    //{this.userChat.getLastMessage().getMessageForRevirew()}
    return (
        <div className="chat__item">
            <div class="list-group-item list-group-item-action border-0">
                <div className="containter">
                    <div className="row">
                        <div className="px-2 col-2 d-flex align-items-center">
                            <img src={chat.second_user_photo} className="rounded-circle" id="image__chat__item" width="40" height="40"></img>
                        </div>
                        <div className="col-10 align-items-center">
                            <div className="row">
                                <div className="col-8 d-flex align-items-center">
                                    <h6 class="flex-grow-1" id="side_bar_room_name">{chat.two_user}</h6>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <div class="flex-grow-1" id="side_bar_time"> {chat.getLastMessage().time.getHours() + ":" + chat.getLastMessage().time.getMinutes()} </div>
                                </div>
                            </div>
                            <div className="row">
                                <div class="flex-grow-1" id="side_bar_last_message">{chat.last_message.getMessageForRevirew()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ChatItem;