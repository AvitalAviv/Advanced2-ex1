import { Component, useState } from 'react';
import "./LeftSideChat.css"
import React from 'react'

function LeftSideChat() {
    return(
        <div className="col-4 container d-flex flex-column" style={{ background: "lightblue" }}>
            <div className="row d-flex flex-row" style={{ background: "white", height: "14.6%" }}>
                <table>
                    <tr>
                        <td style={{ width: "22%", background: "orange" }}>image</td>
                        <td style={{ width: "55%", background: "purple" }}>user name</td>
                        <td style={{ width: "12%", background: "yellow" }}>icon</td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex align-content-start flex-wrap" style={{ background: "pink", height: "100%", overflowY: "scroll" }}>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 1</div>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 2</div>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 3</div>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 4</div>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 5</div>
                    <div style={{ height: "20%", background: "black", color: "white" }}>Block 6</div>
                </div>
        </div>
    );
}
export default LeftSideChat;