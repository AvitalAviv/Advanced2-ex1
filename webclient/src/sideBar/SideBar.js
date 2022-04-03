import "./SideBar.css"
import React, { Component } from "react";
import ChatItem from "../chatItem/ChatItem";



class SideBar extends Component{
    constructor(props){
        super(props);
        this.user = props.user;
    }
    render(){
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
}

function sideBar() {
    
}

export default sideBar;