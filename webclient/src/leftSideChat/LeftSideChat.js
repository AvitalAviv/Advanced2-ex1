import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';

function LeftSideChat() {
    return(
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "14.6%" }}>
                <table>
                    <tr>
                        <td style={{ width: "22%", background: "orange" }}>image</td>
                        <td style={{ width: "55%", background: "purple" }}>user name</td>
                        <td style={{ width: "12%", background: "yellow" }}>icon</td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex align-content-start" style={{ background: "pink", height: "100%", overflowY: "scroll" }}>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                <ChatItem/>
                </div>
        </div>
    );
}
export default LeftSideChat;