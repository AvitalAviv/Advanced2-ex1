import React, { Component } from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"
import ChatItem from "../chatItem/ChatItem";

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
                <h1 class="h3 mb-3" id="title">TalkToMe</h1>
                <div class="card" id="card">
                    <div class="row">
                        <div class="col-3 col-lg-3 col-xl-4 border-right" id="sidebar__header">
                            <SideBar Dbusers={this.dbUsers} User={this.user} />
                        </div>
                    </div>  
                    <div class="row h-100 g-0" id="sidebar__chats" >
                        <div class=" col-12 col-lg-3 col-xl-4 border-right" id="sidebar__chats_scroll">
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