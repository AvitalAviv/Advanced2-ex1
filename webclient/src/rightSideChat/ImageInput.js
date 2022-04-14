import React, { Component , useState } from 'react';
import { Modal, Form , Button } from 'react-bootstrap';
import Message from '../users/message/Message';

function ImageInput(props) {
    const [show, setShow] = useState(false);
    const [imageURL, setImageURL] = useState("null");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ClickImage = (event) => {
        setShow(false);
        // var image = document.getElementById('image-user-input').files[0].name;
        setImageURL(URL.createObjectURL(event.target.files[0]));
        debugger;
    }

    return (
        <>
        <button type="button" onClick={handleShow} class="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-image" viewBox="0 0 16 16">
            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
            <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
            </svg>
        </button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Image</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div class="form-group align-items-center d-flex">
                        <input type="file" id="image-user-input" class="form-control-file" accept="image/*"></input>
                        <button type="button" onClick={ClickImage} class="btn btn-secondary">Submit</button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    </>
    );
  }

export default ImageInput;