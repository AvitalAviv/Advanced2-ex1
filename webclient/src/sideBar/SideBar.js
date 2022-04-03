import "./SideBar.css"
import React from "react";
import ChatItem from "../chatItem/ChatItem";

function sideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar_upper_bar">

            </div>
            <div className="sidebar_search">

            </div>
            <div className="sidebar_chats">
                <ChatItem />
            </div>

        </div>
    );
}

export default sideBar;