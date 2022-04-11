import React, { Component, useState } from 'react';
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";
import ChatWindowUpper from "../chatWindowUpper/ChatWindowUpper";
import MessageFromMe from '../messageFromMe/MessageFromMe';
import MessageFromOther from '../messageFromOther/MessageFromOther';
import ToolBar from '../toolBar/ToolBar';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 0,
            a_chat: "null"
        }
        this.currentChat = "null";
        this.userChats = props.User.chats;
        this.dbusers = props.DbUsers;
        this.user = props.User;
    }
    render() {
        const present = () => {
            if (this.state.a_chat !== "null") {
                return (
                    <div class="chat-messages p-4">
                        <MessageFromMe chat={this.state.a_chat} />
                        <MessageFromOther chat={this.state.a_chat} />
                    </div>
                )
            }
        }
        return (
            <div class="container-fluid" id="chatRoom">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <h1 className="h3 mb-3" id="title"></h1>
                <div className="card d-flex flex-column" id="card">
                    <div className="row g-0 d-flex align-items-center upper-bar">
                        <div className="col-4 align-items-center col-lg-4 col-xl-3 border-right" id="sidebar__header">
                            <SideBar Dbusers={this.dbusers} User={this.user} />
                        </div>
                        <div className="col-8 d-flex align-items-center col-lg-8 col-xl-9 chat-window-upper" id="aa">
                            <ChatWindowUpper />
                        </div>
                    </div>
                    <div class="row h-100 g-0" id="sidebar__chats" >
                        <div className="col-4 col-lg-4 col-xl-3 border-right" id="sidebar__chats_scroll">
                            <lu>
                                {this.userChats.map((chat, key) => {
                                    return <div onClick={() => { this.currentChat = chat; this.setState({ a_chat: chat }); console.log(this.state.a_chat); }}><ChatItem userChat={chat} User={this.user} DbUsers={this.dbUsers} key={key} /></div>
                                })}
                            </lu>
                        </div>
                        <div className="col-8 col-lg-8 col-xl-9 position-relative chat-window-all">
                            {present()}

                            {/* <div className="col align-self-end" style={{ background: "yellow", paddingBottom: "1%" }}>
                                    ghm
                            </div> */}
                            <div class="flex-grow-1 d-flex py-2 px-3 border-buttom align-items-center chat-window-text-box">
                                <ToolBar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default ChatRoom;