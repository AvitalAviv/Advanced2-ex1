import React from 'react'

function MessageMe(props) {
    return (
        <div class="chat-message-right pb-4">
            <div class="text-muted small text-nowrap mt-2">{props.time.getHours()}</div>
            <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                <div class="font-weight-bold mb-1">{props.name}</div>
                {props.value}
            </div>
        </div>
    )
}

export default MessageMe