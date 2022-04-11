import './ToolBar.css';
import React, { Component , useState } from 'react';
import { OverlayTrigger , Popover, Button } from 'react-bootstrap';
import ImageInput from '../toolBar/ImageInput';
import VideoInput from '../toolBar/VideoInput';
import VoiceInput from '../toolBar/VoiceInput';

class ToolBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const popover = (
            <Popover rootClose id="popover-basic">
              <Popover.Body>
                <div class="btn-group" role="group" aria-label="...">
                    <VoiceInput/>
                    <ImageInput/>
                    <VideoInput/>
                </div>
              </Popover.Body>
            </Popover>
          );

        const ButtonClick = () => (
            <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                <button type="button" id="action__button" class="btn btn-secondary btn-sm" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                        </svg>
                </button> 
            </OverlayTrigger>
          );

        return (
            <div class="flex-grow-1 d-flex px-3 border-buttom align-items-center chat-window-text-box">
                <div className='sending-options px-3'>
                    <ButtonClick/> 
                </div>

                <div class="input-group">
                    <input type="text" id="user_textbox_input" class="form-control" placeholder="Type your message"></input>
                    <button class="btn btn-secondary btn-sm">Send</button>
                </div>
            </div>
        );
    }
}

export default ToolBar;