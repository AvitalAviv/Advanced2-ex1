import React, { Component } from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
import ChatWindow from "../chatWindow/ChatWindow"

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
            <div className="chatRoom">
                <div className="chatRoom__body">
                    <SideBar/>
                    <ChatWindow/>
                </div>

            </div>
        )
    }

}
export default ChatRoom;