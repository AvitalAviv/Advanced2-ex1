import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';

function LeftSideChat(props) {
    return (
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "12.7%" }}>
                <table>
                    <tr>
                        <img src={props.User.img_url} style={{ width: "22%", background: "orange" }}></img>
                        <td style={{ width: "55%", background: "purple" }}>{props.User.nick_name}</td>
                        <td style={{ width: "12%", background: "yellow" }}>icon</td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex align-content-start" style={{ background: "pink", height: "100%", overflowY: "scroll" }}>
                <button id="Avitalos" onClick={(e) => props.setSelected(props.DbUsers.db["Omer"].chats["Avitalos"])} > <ChatItem chat={props.DbUsers.db["Omer"].chats["Avitalos"]} setSelected={props.setSelected} /></button>
                <button id="Ronen" onClick={(e) => props.setSelected(props.DbUsers.db["Omer"].chats["Ronen"])}><ChatItem chat={props.DbUsers.db["Omer"].chats["Ronen"]} setSelected={props.setSelected} /></button>
            </div>
        </div >
    );
}
export default LeftSideChat;