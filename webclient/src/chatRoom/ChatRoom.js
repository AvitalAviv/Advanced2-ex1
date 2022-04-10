import React, { Component } from 'react'
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
        this.user = props.User;
        this.dbUsers = props.DbUsers;
        this.isNew = true ? this.user.user_name === "Omer" || this.user.user_name === "Avital" : false;
        this.state = {
            currentChat: null
        }
    }

    render() {


        if (this.state.currentChat !== null) {
            console.log(this.state.currentChat.last_message.value);
        }

        return (
            <div class="container-fluid" id="chatRoom">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <h1 className="h3 mb-3" id="title"></h1>
                <div className="card d-flex flex-column" id="card">
                    <div className="row g-0 d-flex align-items-center upper-bar">
                        <div className="col-4 align-items-center col-lg-4 col-xl-3 border-right" id="sidebar__header">
                            <SideBar Dbusers={this.dbUsers} User={this.user} />
                        </div>
                        <div className="col-8 d-flex align-items-center col-lg-8 col-xl-9 chat-window-upper" id="aa">
                            <ChatWindowUpper />
                        </div>
                    </div>
                    <div class="row h-100 g-0" id="sidebar__chats" >
                        <div className="col-4 col-lg-4 col-xl-3 border-right" id="sidebar__chats_scroll">
                            <lu>
                                {this.user.chats.map((chat, key) => {
                                    return <div onClick={() => this.setState({ currentChat: chat })}><ChatItem userChat={chat} User={this.user} DbUsers={this.dbUsers} key={key} /></div>
                                })}
                            </lu>
                        </div>
                        <div className="col-8 col-lg-8 col-xl-9">
                                <div className="row-4 chat-messages p-4 chat-window-messages">
                                        <MessageFromMe/>
                                        <MessageFromOther/>
                                </div>
                            
                            {/* <div className="col align-self-end" style={{ background: "yellow", paddingBottom: "1%" }}>
                                    ghm
                            </div> */}
                            <div className="py-2 px-4 h-100 border-top chat-window-text-box">
                                <div className="input-group">
                                    <input type="text" class="form-control" placeholder="Type your message..."></input>
							        <button class="btn btn-outline-secondary btn-sm">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {/*<ChatWindow User={this.user} /> */}
            </div >
        )
    }

}
export default ChatRoom;