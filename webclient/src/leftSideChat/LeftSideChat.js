import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';

function LeftSideChat(props) {
    var current_chats = props.DbUsers.db[props.User.user_name].chats;
    var values = Array.from(current_chats.values());


    return (
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "12.7%" }}>
                <table>
                    <tr>
                        <td className='align-items-center' style={{ width: "20%", background: "red", position: "center" }}>
                            <img className='rounded-circle' src={props.User.img_url} style={{ width: "80%", background: "blue" }}></img>
                        </td>
                        <td style={{ width: "55%", background: "purple", fontSize:"130%", paddingLeft:"4%"}}>{props.User.nick_name}</td>
                        <td style={{ width: "20%", background: "yellow" }}>
                            <button type="button" class="btn btn-secondary d-flex align-items-center" id='side_bar_Button' data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex align-content-start" style={{ background: "pink", height: "100%", overflowY: "scroll" }}>
                {values.map((chat, key) => {
                    return (
                        <button onClick={(e) => props.setSelected(chat)}><ChatItem chat={chat} setSelected={props.setSelected} key={key} User={props.User} /></button>
                    )
                })}
            </div>
        </div >
    );
}
export default LeftSideChat;