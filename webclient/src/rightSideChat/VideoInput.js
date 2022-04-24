import React, { Component, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Message from '../users/message/Message';

/**
 * video option sending function
 * @param {user,db} props 
 * @returns - new video message
 */
function VideoInput(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    var video_url = "null";

    //add the video message to the current chat db
    const ClickVideo = () => {
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();
        var new_message = new Message(props.User.nick_name, "video", video_url, time_now);
        props.selected.addMessage(new_message);
        props.setSelected([props.selected].concat([]));
        setShow(false);
    }

    return (
        <>
            <button type="button" onClick={handleShow} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-play" viewBox="0 0 16 16">
                <path d="M6 6.883v4.234a.5.5 0 0 0 .757.429l3.528-2.117a.5.5 0 0 0 0-.858L6.757 6.454a.5.5 0 0 0-.757.43z" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group align-items-center d-flex">
                            <input type="file" onChange={(event) => {
                                video_url = URL.createObjectURL(event.target.files[0]);
                            }} id="image-user-input" className="form-control-file" accept="video/*"></input>
                            <button type="button" onClick={ClickVideo} className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default VideoInput;