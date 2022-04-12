import { Component, useState } from 'react';
import "./RightSideChat.css"
import React from 'react'
import MessageRender from '../messageRender/MessageRender';
import Message from '../users/message/Message';


function RightSideChat(props) {
    let current_chat = props.selected;
    debugger;
    const SendText = (event) => {
        var input = document.getElementById("user-input-textbox").value;
        document.getElementById("user-input-textbox").value = "";
        props.selected.addMessage(new Message(props.User.nick_name, "text", input, new Date()));
        props.setSelected(props.selected);
        debugger;
        // console.log(input);
    }

    return (
        <div className="col-8 container d-flex flex-column" style={{ background: "black", color: "white" }}>
            <div className="row d-flex flex-row" style={{ background: "lightsalmon", height: "12.7%" }}>
                <table>
                    <tr>
                        <img src={current_chat.second_user_photo} style={{ width: "20%", background: "hotpink" }}></img>
                        <td style={{ width: "70%", background: "darkseagreen" }}>{current_chat.two_user}</td>
                        {/* <td style={{ width: "10%", background: "cadetblue" }}>icon</td> */}
                    </tr>
                </table>
            </div>
            <div className="row d-flex flex-row align-content-start flex-wrap" style={{ background: "lightskyblue", height: "79.3%", overflowY: "scroll" }}>
                {/* <MessageRender flag={"0"} data={"omgggggggg bey"}/>
                <MessageRender flag={"1"} data={"good morningg my friend"}/> */}

            </div>
            <div className="row d-flex flex-row flex-wrap" style={{ background: "white" }}>
                <table>
                    <tr>

                        <td style={{ background: "maroon" }}>record</td>

                        <div class="input-group flex-row px-2 py-1" style={{ background: "crimson", whiteSpace: "nowrap" }}>
                            <input id="user-input-textbox" type="text" class="form-control" placeholder="Type your message..."></input>
                            <button onClick={(event) => { SendText(event) }} class="btn btn-secondary btn-sm">Send</button>
                        </div>
                        <td style={{ width: "8%", background: "maroon" }}>record</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default RightSideChat