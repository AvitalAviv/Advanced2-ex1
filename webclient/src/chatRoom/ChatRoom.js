import React from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"

function ChatRoom() {
    return (
        <div className="chatRoom">
            <div className="chatRoom_body">
                <SideBar/>
                {/*body*/}
            </div>
        </div>
    )
}

export default ChatRoom