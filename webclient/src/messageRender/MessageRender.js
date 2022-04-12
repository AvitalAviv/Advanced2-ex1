import { Component, useState } from 'react';
import "./MessageRender.css"
import React from 'react'

function MessageRender( nick_name , type, value, time, flag) {
    //message from me
    if (flag=="0") {
        return (
        <div class="chat-message-right pb-4">
            <div class="text-muted small text-nowrap mt-2">{time.getHours() + ":" + time.getMinutes()}</div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 user_message_value">
                <div class="font-weight-bold mb-1 user_message_name">{nick_name}</div>
                {value}
            </div>
        </div>
    );
    }
    //message from other
    if (flag=="1") {
        return(
            <div class="chat-message-left pb-4">
                <div class="text-muted small text-nowrap mt-2">{time.getHours() + ":" + time.getMinutes()}</div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 user_message_value">
                    <div class="font-weight-bold mb-1 user_message_name">{nick_name}</div>
                    {value}
                </div>
            </div>
        );
    }
}
export default MessageRender;