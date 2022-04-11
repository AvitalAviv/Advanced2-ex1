import { Component, useState } from 'react';
import "./RightSideChat.css"
import React from 'react'

function RightSideChat() {
    return (
        <div className="col-8 container d-flex flex-column" style={{ background: "black", color: "white" }}>
            <div className="row d-flex flex-row" style={{ background: "lightsalmon", height: "12.7%" }}>
                <table>
                    <tr>
                        <td style={{ width: "20%", background: "hotpink" }}>image</td>
                        <td style={{ width: "70%", background: "darkseagreen" }}>name</td>
                        <td style={{ width: "10%", background: "cadetblue" }}>icon</td>
                    </tr>
                </table>
            </div>
            <div className="row d-flex flex-row align-content-start flex-wrap" style={{ background: "lightskyblue", height: "79.3%", overflowY: "scroll" }}>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 1</div>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 2</div>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 3</div>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 4</div>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 5</div>
                <div style={{ height: "20%", background: "black", color: "white" }}>M 6</div>
            </div>
            <div className="row d-flex flex-row flex-wrap" style={{ background: "white", height: "8%" }}>
                <table>
                    <tr>
                        <td style={{ width: "8%", background: "maroon" }}>record</td>
                        <td style={{ width: "84%", background: "crimson", whiteSpace: "nowrap" }}>message text</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default RightSideChat;