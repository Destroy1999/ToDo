import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function RemoveCard(props) {

    return (
        <Modal show={true} animation={false} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Duk ardzok uzumek jnjel {props.deleteCheckBoxCards} card ?</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.handleClose}>
                    Cancle
              </Button>
                <Button variant="success" onClick={props.handleSave}>
                    Delete
              </Button>
            </Modal.Footer>
        </Modal>

    )

}