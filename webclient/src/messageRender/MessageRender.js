import "./MessageRender.css"
import React from 'react'

function MessageRender(props) {
    var flag = false;
    if (props.message.nick_name === props.User.nick_name) {
        flag = true;
    }
    if (flag) {
        return (
            <div className="chat-message-right pb-4" >
                <div className="text-muted small text-nowrap mt-2">{props.message.time}</div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3 user_message_{props.message.getValue()}" >
                    <div className="font-weight-bold mb-1 user_message_name">{props.message.nick_name}</div>
                    {props.message.getValue()}
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="chat-message-left pb-4" >
                <div className="text-muted small text-nowrap mt-2">{props.message.time}</div>
                <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 user_message_{props.message.getValue()}" >
                    <div className="font-weight-bold mb-1 user_message_name" >{props.message.nick_name}</div>
                    {props.message.getValue()}
                </div>
            </div>
        );

    }
}
export default MessageRender;