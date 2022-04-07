import './MessageFromOther.css';
import React, { Component } from 'react';
import logo from './MessageFromOther';

class MessageFromOther extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div class="chat-message-left pb-4">
				<div class="text-muted small text-nowrap mt-2">2:34 am</div>
				<div class="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
					<div class="font-weight-bold mb-1">Sharon Lessman</div>
					Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
				</div>
			</div>
        );
    }
}

export default MessageFromOther;