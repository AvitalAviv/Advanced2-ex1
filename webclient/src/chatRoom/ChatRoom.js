import React, { Component, useState } from 'react';
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";
import ChatWindowUpper from "../chatWindowUpper/ChatWindowUpper";
import MessageFromMe from '../messageFromMe/MessageFromMe';
import MessageFromOther from '../messageFromOther/MessageFromOther';


class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 0
        }
        this.currentChat = "null";
        this.userChats = props.User.chats;
        this.dbusers = props.DbUsers;
        this.user = props.User;
    }
    render() {
        const present = () => {
            if (this.state.currentState > 0) {
                return (
                    <div class="chat-messages p-4">
                        <MessageFromMe chat={this.currentChat} />
                        <MessageFromOther chat={this.currentChat} />
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
                                    return <div onClick={() => { this.currentChat = chat; this.setState({ currentState: this.state.currentState + 1 }); console.log(this.currentChat) }}><ChatItem userChat={chat} User={this.user} DbUsers={this.dbUsers} key={key} /></div>
                                })}
                            </lu>
                        </div>
                        <div className="col-8 col-lg-8 col-xl-9 position-relative chat-window-all">
                            {present()}

                            {/* <div className="col align-self-end" style={{ background: "yellow", paddingBottom: "1%" }}>
                                    ghm
                            </div> */}
                            <div class="flex-grow-1 d-flex py-2 px-3 border-buttom align-items-center chat-window-text-box">
                                <div className='sending-options px-3'>
                                    <button type="button" class="btn btn-secondary btn-sm" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                        </svg>
                                    </button>
                                </div>

                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Type your message"></input>
                                    <button class="btn btn-secondary btn-sm">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default ChatRoom;