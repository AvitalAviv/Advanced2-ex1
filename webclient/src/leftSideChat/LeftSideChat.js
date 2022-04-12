import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';
import { Modal } from 'react-bootstrap';
import { Alert } from 'bootstrap';
import Chat from '../users/chat/Chat';

function LeftSideChat(props) {
    // debugger;
    const [show, setShow] = useState(false);

    const handleModalClick = () => {
        var input_nick_name = document.getElementById("nick_name_other").value;
        var other_user = props.DbUsers.db[input_nick_name];
        //check if user in db and it's not myself
        if (other_user && props.User.user_name !== input_nick_name) {
            props.DbUsers.db[props.User.user_name].chats.push(new Chat(props.User.nick_name, other_user.nick_name, props.User.img_url, other_user.img_url));
        } else {
            alert("Wrong user name");
        }
    }

    const showModule = () => {
        setShow(true);
    }
    const hideModule = () => {
        setShow(false);
    }
    var chats = props.DbUsers.db[props.User.user_name].chats;
    return (
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "12.7%" }}>
                <table>
                    <tr>
                        <td className='align-items-center' style={{ width: "20%", background: "red", position: "center" }}>
                            <img className='rounded-circle' src={props.User.img_url} style={{ width: "80%", background: "blue" }}></img>
                        </td>
                        <td style={{ width: "55%", background: "purple", fontSize: "130%", paddingLeft: "4%" }}>{props.User.nick_name}</td>
                        <td style={{ width: "20%", background: "yellow" }}>
                            <button variant='primary' onClick={showModule}>
                                Add new Chat
                            </button>

                            {/* <button type="button" class="btn btn-secondary d-flex align-items-center" id='side_bar_Button' data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                            </button> */}
                        </td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex align-content-start" style={{ background: "pink", height: "100%", overflowY: "scroll" }}>
                {chats.map((chat, key) => {
                    return (
                        <button onClick={(e) => {
                            props.setSelected([chat].concat([]));
                            props.setMode(true);
                        }}><ChatItem chat={chat} setSelected={props.setSelected} key={key} User={props.User} setMode={props.setMode} /></button>
                    )
                })}
            </div>
            <Modal show={show}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input placeholder="Enter user nickname" id="nick_name_other"></input>
                </Modal.Body>
                <Modal.Footer>
                    <button variant="danger" onClick={hideModule}>Close</button>
                    <button onClick={handleModalClick}>Chat</button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
export default LeftSideChat;