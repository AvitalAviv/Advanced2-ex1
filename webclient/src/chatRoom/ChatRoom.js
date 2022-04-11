import React, { Component, useState } from 'react';
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";
import ChatWindowUpper from "../chatWindowUpper/ChatWindowUpper";
import MessageFromMe from '../messageFromMe/MessageFromMe';
import MessageFromOther from '../messageFromOther/MessageFromOther';
import ToolBar from '../toolBar/ToolBar';
import ChatPreview from '../chatPreview/ChatPreview';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current_chat_partner: ""
        }
        this.chat_name = "";
        this.userChats = props.User.chats;
        this.dbusers = props.DbUsers;
        this.user = props.User;
        // debugger;
    }
    render() {
        const showChatWindow = () => {
            return (
                <div class="chat-messages p-4">
                    <ChatPreview current_chat_partner={this.state.current_chat_partner} dbUsers={this.dbusers} User={this.user} />
                </div>
            )
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
                                <div onClick={(event) => { console.log(event.currentTarget); this.setState({ current_chat_partner: "Avitalos" }); }}>
                                    {< ChatItem userChat={this.userChats["Avitalos"]} User={this.user} DbUsers={this.dbusers} />}
                                </div>
                                <div onClick={(event) => { console.log(event.currentTarget); this.setState({ current_chat_partner: "Ronen" }); }}>
                                    {< ChatItem userChat={this.userChats["Ronen"]} User={this.user} DbUsers={this.dbusers} />}
                                </div>

                                {/* {this.userChats.map((chat, key) => {
                                    return <div onClick={() => this.setState({ current_chat_partner: chat.two_user })}><ChatItem userChat={chat} User={this.user} DbUsers={this.dbUsers} key={key} /></div>
                                })} */}
                            </lu>
                            {showChatWindow()}
                            {/* <button onClick={() => { console.log(this.state.current_chat_partner) }}>Check state</button> */}
                        </div>
                        <div className="col-8 col-lg-8 col-xl-9 position-relative chat-window-all">
                            <div class="chat-messages p-4">
                            </div>
                            <div class="flex-grow-1 d-flex py-2 px-3 border-buttom align-items-center chat-window-text-box">
                                <ToolBar/>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default ChatRoom;