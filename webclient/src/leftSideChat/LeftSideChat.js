import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';

function LeftSideChat() {
    return(
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "12.7%" }}>
                <table>
                    <tr>
                        <td style={{ width: "22%", background: "orange" }}>image</td>
                        <td style={{ width: "55%", background: "purple" }}>user name</td>
                        <td style={{ width: "12%", background: "yellow" }}>icon</td>
                    </tr>
                </table>
            </div>
            <div className="row align-self-end d-flex" style={{ background: "pink", height: "87.2%", width: "100%", marginTop:"20.5%", overflowY: "scroll",position:"absolute", maxHeight: "100%"}}>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
            </div>
        </div>
    );
}
export default LeftSideChat;