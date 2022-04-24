import React, { Component, useState } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import Message from '../users/message/Message';

/**
 * function used to to get the image from chat
 * @param {chat} props
 * @returns add the image to chat list
 */
function ImageInput(props) {
    const [show, setShow] = useState(false);
    const [imageURL, setImageURL] = useState("null");
    var image_url = "null";
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ClickImage = () => {
        console.log(image_url);
        var current = new Date();
        var time_now = current.getHours() + ':' + current.getMinutes();
        var new_message = new Message(props.User.nick_name, "image", image_url, time_now);
        props.selected.addMessage(new_message);
        props.setSelected([props.selected].concat([]));
        setShow(false);
    }

    return (
        <>
            <button type="button" onClick={handleShow} className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
            </svg>
            </button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Image</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="form-group align-items-center d-flex">
                            <input type="file" onChange={(event) => {
                                image_url = URL.createObjectURL(event.target.files[0]);
                            }} id="image-user-input" className="form-control-file" accept="image/*"></input>
                            <button type="button" onClick={ClickImage} className="btn btn-secondary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ImageInput;