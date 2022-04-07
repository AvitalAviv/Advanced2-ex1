import './MessageFromMe.css';
import React, { Component } from 'react';
import logo from '../messageFromMe/MessageFromMe';

class MessageFromMe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div class="chat-message-right pb-4">
                <div class="text-muted small text-nowrap mt-2">2:33 am</div>
                <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div class="font-weight-bold mb-1">You</div>
                    Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
                </div>
            </div>
        );
    }
}

export default MessageFromMe;