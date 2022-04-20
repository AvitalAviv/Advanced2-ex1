import { Component, useState , useEffect, useRef } from 'react';
import "./RightSideChat.css"
import backgroundImage from '../rightSideChat/background.jpg';
import React from 'react'
import MessageRender from '../messageRender/MessageRender';
import Message from '../users/message/Message';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Chat from '../users/chat/Chat';
import ImageInput from './ImageInput';
import VideoInput from './VideoInput';
import VoiceInput from './VoiceInput';

/**
 * right side of the window - the chat himself
 * @param {user,chat} props 
 * @returns the chat
 */
function RightSideChat(props) {
    let user = props.User;
    let current_chat = props.selected[0];
    let photo_preview = current_chat.second_user_photo;
    let nick_name_preview = current_chat.two_user;
    if (user.nick_name === nick_name_preview) {
        photo_preview = current_chat.one_user_photo;
        nick_name_preview = current_chat.one_user;
    }

    const scrollBar = useRef(null);

    // send text message
    const SendText = (event) => {
        debugger;
        var input = document.getElementById("user-input-textbox").value;
        document.getElementById("user-input-textbox").value = "";
        if (input === "") {
            return;
        }
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();
        current_chat.addMessage(new Message(props.User.nick_name, "text", input, time_now));
        props.setSelected([current_chat].concat([]));
    }

    const popover = (
        <Popover rootClose id="popover-basic">
            <Popover.Body>
                <div class="btn-group" role="group" aria-label="..." >
                    <div class="btn-group" role="group" aria-label="..." width="100%">
                        <VoiceInput User={props.User} selected={props.selected[0]} setSelected={props.setSelected} />
                        <VideoInput User={props.User} selected={props.selected[0]} setSelected={props.setSelected} />
                        <ImageInput User={props.User} selected={props.selected[0]} setSelected={props.setSelected} />
                    </div>
                </div>
            </Popover.Body>
        </Popover>
    );

    //button to trigger the video/voice/photo window
    const ButtonClick = () => (
        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
            <button type="button" id="action__button" className="btn btn-secondary btn-sm send-file" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." style={{width: "fit-content", height: "fit-content", alignSelf: "center"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip" viewBox="0 0 16 16">
                    <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
            </button>
        </OverlayTrigger>
    );

    // //useEffect(() => {
    //     var element = document.getElementById("scroll-bar");
    //     if (element != null) {
    //         element.scrollIntoView();
    //     }
    // });

    return (
        <div className="col-8 container d-flex flex-column" style={{ height: "100%", background: "black", color: "black", minHeight: "70%" }}>
            <div className="row d-flex flex-row topBarRight">
                <div className='col-2 align-items-center left-side-image d-flex' style={{ background: "none", width: "20%", justifyContent: "center" }}><img className='rounded-circle align-self-center avatar' alt="Avatar" src={photo_preview} /></div>
                <div className='col text-truncate' style={{ background: "orange", width: "55%", background: "none", fontSize: "130%", paddingLeft: "4%", color: "white", paddingTop: "2.3%" }}>{nick_name_preview}</div>
            </div>

            <div className="row d-flex flex-row align-content-start flex-wrap chat-background scrollbar" id="box" style={{ height: "81%", overflow: "auto", paddingTop: "1%" }}>
                {current_chat.messages.map((message, key) => {
                    return (
                        <MessageRender message={message} key={key} User={props.User} />
                    );
                })}
            </div>
            <div ref={scrollBar}></div>
            {/* <span id='scroll-bar'></span> */}

            <div className="row d-flex flex-row " style={{ background: "#01011f" }}>
                <div className=' d-flex send-file-div'><ButtonClick /></div>
                <div className='col input-group flex-row px-2 py-1 sendBox' style={{ whiteSpace: "nowrap", width: "55%", background: "none", fontSize: "130%", paddingLeft: "4%", color: "white", paddingTop: "4.5%" }}>
                    <input type="text" id="user-input-textbox" className="form-control sendBox" placeholder="Type your message..." style={{borderRadius: "2rem", marginLeft: "-1%"}}/> {/*DO NOT delete this style definition and put in CSS - leave this here */}
                    <button onClick={(event) => { SendText(event) }} className="btn btn-secondary btn-sm send-icon-div" style={{ borderRadius: "2rem" }}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                    </svg></button>
                </div>
            </div>
        </div>
    );
}

export default RightSideChat;