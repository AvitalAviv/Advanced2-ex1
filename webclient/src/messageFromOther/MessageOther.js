import React from 'react'
import '../messageFromOther/MessageFromOther.css';

function messageOther(props) {
    return (
        <div class="chat-message-left pb-4">
            <div class="text-muted small text-nowrap mt-2">{props.time.getHours()}</div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3 user_message_value">
                <div class="font-weight-bold mb-1 user_message_name">{props.name}</div>
                {props.value}
            </div>
        </div>
    )
}

export default messageOther