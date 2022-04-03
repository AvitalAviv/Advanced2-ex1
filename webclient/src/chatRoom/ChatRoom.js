import React from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"

function ChatRoom() {
    return (
        <div className="chatRoom">
            <div className="chatRoom_body">
               <div className="sideBar">
                    <div className="chatItem">
                        <img src={user_image} > </img>
                        <div>nick_name</div>
                        <div>time</div>
                        <div>last message</div>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default ChatRoom