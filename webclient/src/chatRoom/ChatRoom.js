import { Component, useState } from 'react';
import "./ChatRoom.css"
import React from 'react'

function ChatRoom() {
    //entry mode - only left side is rendered.
    return (
        <div className="container-fluid d-flex flex-column" style={{width: "100%", height: "100%", background: "blue", position: "absolute", blockSize:"cover"}}>
            <div className="card align-self-center" style={{width: "80%", height: "90%", position:"realtive", backgroundColor:"white" , margin: "2.8%", marginTop: "2%", marginLeft: "9%" ,alignSelf: 'center'}}>
                <div className="row" style={{background: "red", blockSize: "cover", marginLeft:"-0.01%", height: "100%", width: "100%"}}>
                    
                </div>
            </div>
        </div>
    )
}

export default ChatRoom