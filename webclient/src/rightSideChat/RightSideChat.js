import { Component, useState } from 'react';
import "./RightSideChat.css"
import React from 'react'
import MessageRender from '../messageRender/MessageRender';
import Message from '../users/message/Message';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import ImageInput from './ImageInput';
import VideoInput from './VideoInput';
import VoiceInput from './VoiceInput';

function RightSideChat(props) {
    debugger;

    let user = props.User;
    let current_chat = props.selected;
    let photo_preview = current_chat.second_user_photo;
    let nick_name_preview = current_chat.two_user;
    if (user.nick_name === nick_name_preview) {
        photo_preview = current_chat.one_user_photo;
        nick_name_preview = current_chat.one_user;
    }


    const SendText = (event) => {
        var input = document.getElementById("user-input-textbox").value;
        document.getElementById("user-input-textbox").value = "";
        if (input==="") {
            return;
        }
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();
        props.selected.addMessage(new Message(props.User.nick_name, "text", input, time_now));
        props.setSelected(props.selected.chats.concat([]));
        // console.log(input);
    }

    const popover = (
        <Popover rootClose id="popover-basic">
          <Popover.Body>
            <div class="btn-group" role="group" aria-label="...">
                <div class="btn-group" role="group" aria-label="..." width="100%">

                    <VideoInput/>
                    <VoiceInput/>
                    <ImageInput/>

                </div>
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
        <div className="col-8 container d-flex flex-column" style={{ background: "black", color: "white" }}>
            <div className="row d-flex flex-row" style={{ background: "lightsalmon", height: "12.7%" }}>
                <table>
                    <tr>
                        <img src={photo_preview} style={{ width: "20%", background: "hotpink" }}></img>
                        <td style={{ width: "70%", background: "darkseagreen" }}>{nick_name_preview}</td>
                        {/* <td style={{ width: "10%", background: "cadetblue" }}>icon</td> */}
                    </tr>
                </table>
            </div>
            
            <div className="row d-flex flex-row align-content-start flex-wrap" style={{ background: "lightskyblue", height: "79.3%", overflowY: "scroll" }}>
                {current_chat.messages.map((message, key) => {
                    return (
                        <MessageRender message={message} key={key} User={props.User} />
                    )
                })}
            </div>

            <div className="row d-flex flex-row flex-wrap" style={{ background: "white" }}>
                <table>
                    <tr>
                        <td style={{ width: "8%", background: "maroon" }}>
                            <div className='d-flex'style={{ justifyContent: "center"}} >
                                <ButtonClick/>
                            </div>
                        </td>
                        
                        <div class="input-group flex-row px-2 py-1" style={{ background: "crimson", whiteSpace: "nowrap" }}>
                            <input id="user-input-textbox" type="text" class="form-control" placeholder="Type your message..."></input>
                            <button onClick={(event) => { SendText(event) }} class="btn btn-secondary btn-sm">Send</button>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default RightSideChat;