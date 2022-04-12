import { Component, useState } from 'react';
import "./RightSideChat.css"
import React from 'react'
import MessageRender from '../messageRender/MessageRender';
import Message from '../users/message/Message';


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
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();
        props.selected.addMessage(new Message(props.User.nick_name, "text", input, time_now));
        props.setSelected(props.selected.concat([]));
        // console.log(input);
    }

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
                        <td style={{ width: "8%", background: "maroon" }}>record</td>
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

export default RightSideChat