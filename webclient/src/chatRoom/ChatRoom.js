import React from 'react'
import "./ChatRoom.css"
import SideBar from "../sideBar/SideBar"

function ChatRoom() {
    return (
    <div class="chatItem">
        <img src="logo.png" id="image"> </img>
        <div>nick name</div>
        <div>last message </div>
        <div>last modified </div>
    </div>
    )
}

export default ChatRoom