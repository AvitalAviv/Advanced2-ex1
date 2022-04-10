import './ChatWindowUpper.css';
import React, { Component } from 'react';
import logo from "../chatWindowUpper/logo.png";

class ChatWindowUpper extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="d-flex align-items-center upper-bar">
                <div className="row d-flex flex-grow-1 align-items-center g-0">
                    <div className="col-1 image-upper-bar" style={{ width: "90%" }}>
                        <img src={logo} class="rounded-circle upper-bar-image" width="55" height="55" id="side_bar_img"></img>
                    </div>
                    <div className="col-11 align-items-center name-upper-bar" style={{ marginTop: "-30%", marginLeft: "50%" }}>
                        <h4 class="align-items-center side_bar_nickName" id="side_bar_nickName">user name</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatWindowUpper; 