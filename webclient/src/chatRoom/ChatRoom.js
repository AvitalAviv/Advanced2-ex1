import React, { Component } from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"
class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.user = props.User;
        this.dbUsers = props.DbUsers;
    }

    render() {
        const handleClick = (event) => {
            event.preventDefault();
            this.dbUsers.printDb();
            this.user.printName();
        }
        return (
            <div className="chatRoom">
                <div className="chatRoom_body">
                    <SideBar />
                    <button class="btn mt-3" onClick={handleClick}>print db</button>
                    {/*body*/}
                </div>
            </div>
        )
    }
}
export default ChatRoom;