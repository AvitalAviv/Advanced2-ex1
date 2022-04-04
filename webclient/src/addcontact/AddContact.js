import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';



export class AddContact extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new contact
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-field d-flex align-items-center"> <span className="fas fa-key"></span>
                        <input type="text" name="nickName" id="nickName" placeholder="Display name"></input></div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Add</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
