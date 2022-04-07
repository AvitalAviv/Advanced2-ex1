import React, { Component } from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";
import ChatWindowUpper from "../chatWindowUpper/ChatWindowUpper";

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.user = props.User;
        this.dbUsers = props.DbUsers;
        this.isNew = true ? this.user.user_name === "Omer" || this.user.user_name === "Avital" : false;
    }

    render() {
        const handleClick = (event) => {
            console.log(this.isNew);
            event.preventDefault();
        }

        return (
            <div class="container-fluid" id="chatRoom">
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
                <h1 className="h3 mb-3" id="title">TalkToMe</h1>
                <div className="card" id="card">
                    <div className="row g-0 d-flex align-items-center">
                        <div className="col-4 align-items-center col-lg-4 col-xl-3 border-right" id="sidebar__header">
                            <SideBar Dbusers={this.dbUsers} User={this.user} />
                        </div>
                        <div className="col-8 align-items-center col-lg-8 col-xl-9 border-left" id="aa">
                            <ChatWindowUpper/>
                        </div>
                    </div>
                    <div class="row h-100 g-0" id="sidebar__chats" >
                        <div class="col-4 col-lg-4 col-xl-3 border-right" id="sidebar__chats_scroll">
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
                            <ChatItem/>
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
         </div>
        {/*<ChatWindow User={this.user} /> */}
    </div>
        )
    }

}
export default ChatRoom;