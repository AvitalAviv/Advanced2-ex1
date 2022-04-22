import { Component, useEffect, useState , Element } from 'react';
import "./LeftSideChat.css"
import React from 'react'
import ChatItem from '../chatItem/ChatItem';
import { Modal } from 'react-bootstrap';
import Chat from '../users/chat/Chat';

/**
 * left side of the chat room - including all the chat items components and add chat button
 * @param {database,user} props 
 * @returns 
 */
function LeftSideChat(props) {
    const [show, setShow] = useState(false);
    /**
     * @returns new chat item component
     */
    const handleModalClick = () => {
        var input_nick_name = document.getElementById("nick_name_other").value;
        var other_user = props.DbUsers.db.get(input_nick_name);

        //check if user in db and it's not myself
        if (other_user && props.User.user_name !== input_nick_name) {
            var input_user_name = props.DbUsers.user_nickname_db.get(input_nick_name);
            //search the chat in the user chats, if exist - do nothing.
            if (props.DbUsers.db.get(props.User.user_name).searchChat(input_user_name)) {
                setShow(false);
                return;
            }
            props.DbUsers.db.get(props.User.user_name).chats.push(new Chat(props.User.nick_name, other_user.nick_name, props.User.img_url, other_user.img_url));
            setShow(false);
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

    useEffect(() => {
        var element = document.getElementById("scroll-bar");
        if (element != null) {
            element.scrollIntoView();
        }
    });

    var chats = props.DbUsers.db.get(props.User.user_name).chats;
    return (
        <div className="col-4 container d-flex flex-column leftSideBack">
            {/*chat blocks*/}
            <div className="row d-flex flex-row topBar">
                <div className='col-2 align-items-center left-side-image d-flex' style={{ background: "none", width: "20%",justifyContent: "center" }}><img className='rounded-circle align-self-center avatar' alt="Avatar" src={props.User.img_url}/></div>
                <div className='col text-truncate' style={{ background: "orange", width: "55%", background: "none", fontSize: "130%", paddingLeft: "4%", color: "white", paddingTop: "4.5%" }}>{props.User.nick_name}</div>
                <div className='col-2 d-flex' style={{ background: "purple", width: "20%", background: "none", justifyContent: "center" }}>
                    <button type="button" className="btn btn-outline-secondary d-flex align-items-center" id='side_bar_Button' onClick={showModule} data-bs-toggle="Modal" data-bs-target="#exampleModal" data-bs-whatever="Omer" style={{alignSelf: "center", border: "none"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill d-flex" viewBox="0 0 16 16" style={{color: "white"}}>
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/*chat blocks*/}
            <div className="row d-flex align-content-start sideChatsBack flex-row scrollbar">
                {chats.map((chat, key) => {
                    return (
                        <button key={key} onClick={(e) => {
                            props.setSelected([chat].concat([]));
                            props.setMode(true);
                        }} style={{ background: "none", border: "none" }}><ChatItem chat={chat} setSelected={props.setSelected} key={key} User={props.User} setMode={props.setMode} /></button>
                    )
                })}
                <span id='scroll-bar'></span>
            </div>
            <Modal show={show}>
                <Modal.Header closeButton onClick={hideModule}>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new chat
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="form-group">
                    {/* <label for="exampleFormControlInput1">Email address</label> */}
                    <input type="text" className="form-control" id="nick_name_other" placeholder="Enter user username"></input>
                </div>
                    {/* <input placeholder="Enter user username" id="nick_name_other"></input> */}
                </Modal.Body>
                <Modal.Footer>
                    {/* <button variant="danger" onClick={hideModule}>Close</button> */}
                    <button className="btn btn-secondary btn-sm btn-block" onClick={handleModalClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                    </button>
                </Modal.Footer>
            </Modal>
        </div >
    );
}
export default LeftSideChat;