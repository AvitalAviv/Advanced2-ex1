import { Component, useState } from 'react';
import "./MessageRender.css"
import React from 'react'

function MessageRender({ flag , data }) {
    //{props.time.getHours() + ":" + props.time.getMinutes()}
    //{props.name}
    //{props.value}


    //message from me
    if (flag=="0") {
        return (
        <div class="chat-message-right pb-4">
            <div class="text-muted small text-nowrap mt-2">time</div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 user_message_value">
                <div class="font-weight-bold mb-1 user_message_name">Me</div>
                {data}
            </div>
        </div>
    );
    }
    //message from other
    if (flag=="1") {
        return(
            <div class="chat-message-left pb-4">
                <div class="text-muted small text-nowrap mt-2">time</div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 user_message_value">
                    <div class="font-weight-bold mb-1 user_message_name">other</div>
                    {data}
                </div>
            </div>
        );
    }
}
export default MessageRender;