import { Component, useState } from 'react';
import "./MessageRender.css"
import React from 'react'

function MessageRender(props) {
    var flag = false;
    if (props.message.nick_name === props.User.nick_name) {
        flag = true;
    }
    if (flag) {
        return (
            <div class="chat-message-right pb-4">
                <div class="text-muted small text-nowrap mt-2">{props.message.time}</div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 user_message_{props.message.getValue()}">
                    <div class="font-weight-bold mb-1 user_message_name">{props.message.nick_name}</div>
                    {props.message.getValue()}
                </div>
            </div>
        );
    }
    else {
        return (
            <div class="chat-message-left pb-4">
                <div class="text-muted small text-nowrap mt-2">{props.message.time}</div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 user_message_{props.message.getValue()}">
                    <div class="font-weight-bold mb-1 user_message_name">{props.message.nick_name}</div>
                    {props.message.getValue()}
                </div>
            </div>
        );

    }
}
export default MessageRender;