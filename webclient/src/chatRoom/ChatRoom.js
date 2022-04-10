import React, { useState } from 'react';
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";
import ChatWindowUpper from "../chatWindowUpper/ChatWindowUpper";
import MessageFromMe from '../messageFromMe/MessageFromMe';
import MessageFromOther from '../messageFromOther/MessageFromOther';



function ChatRoom(props) {
    const [currentChat, setCurrentChat] = useState({ Chat: "" });
    const [currentState, setCurrentState] = useState(false);

    function present() {
        if (currentState) {
            return (
                <div class="chat-messages p-4">
                    <MessageFromMe chat={currentChat} />
                    <MessageFromOther chat={currentChat} />
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
                        <SideBar Dbusers={props.DbUsers} User={props.User} />
                    </div>
                    <div className="col-8 d-flex align-items-center col-lg-8 col-xl-9 chat-window-upper" id="aa">
                        <ChatWindowUpper />
                    </div>
                </div>
                <div class="row h-100 g-0" id="sidebar__chats" >
                    <div className="col-4 col-lg-4 col-xl-3 border-right" id="sidebar__chats_scroll">
                        <lu>
                            {props.User.chats.map((chat, key) => {
                                return <div onClick={()=>{setCurrentChat(chat);setCurrentState(true)}}><ChatItem userChat={chat} User={props.User} DbUsers={props.DbUsers} key={key} /></div>
                            })}
                        </lu>
                    </div>
                    <div className="col-8 col-lg-8 col-xl-9 position-relative chat-window-all">
                        {present()}

                        {/* <div className="col align-self-end" style={{ background: "yellow", paddingBottom: "1%" }}>
                                    ghm
                            </div> */}
                        <div class="flex-grow-0 py-3 px-4 border-top chat-window-text-box">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Type your message"></input>
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {/*<ChatWindow User={this.user} /> */}
        </div >

    )

}

// class ChatRoom extends Component {
//     constructor(props) {
//         super(props);
//         this.user = props.User;
//         this.dbUsers = props.DbUsers;
//         this.currentChat = this.user.chat[0];
//     }

//     render() {
//         const [currentChat, seCurrentChat] = useState(this.user.chat[0]);

//         return (

//         )
//     }

// }
export default ChatRoom;