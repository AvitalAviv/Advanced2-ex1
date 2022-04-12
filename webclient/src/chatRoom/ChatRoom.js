import { Component, useState } from 'react';
import "./ChatRoom.css"
import React from 'react'
import LeftSideChat from '../leftSideChat/LeftSideChat';
import RightSideChat from '../rightSideChat/RightSideChat';

function ChatRoom(props) {
    const [selected, setSelected] = React.useState("null");
    if (selected === "null") {
        return (
            <div className="container-fluid d-flex flex-column background-page" style={{ width: "100%", height: "100%", position: "absolute", blockSize: "cover" }}>
                <div className="card" style={{ width: "80%", height: "90%", position: "absolute", backgroundColor: "white", margin: "5.8%", marginTop: "2.3%", alignSelf: "center" }}>
                    <div className="row" style={{ background: "blue", blockSize: "cover", marginLeft: "-0.01%", height: "100%", width: "100%" }}>

                        <LeftSideChat User={props.User} DbUsers={props.DbUsers} setSelected={setSelected} />
                        <RightSideChat User={props.User} DbUsers={props.DbUsers} setSelected={setSelected} />
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container-fluid d-flex flex-column background-page" style={{ width: "100%", height: "100%", position: "absolute", blockSize: "cover" }}>
                <div className="card" style={{ width: "80%", height: "90%", position: "absolute", backgroundColor: "white", margin: "5.8%", marginTop: "2.3%", alignSelf: "center" }}>
                    <div className="row" style={{ background: "blue", blockSize: "cover", marginLeft: "-0.01%", height: "100%", width: "100%" }}>
                        <LeftSideChat User={props.User} DbUsers={props.DbUsers} setSelected={setSelected} />
                        <RightSideChat User={props.User} DbUsers={props.DbUsers} setSelected={setSelected} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatRoom