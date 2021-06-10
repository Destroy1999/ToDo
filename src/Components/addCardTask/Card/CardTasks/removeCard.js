import React from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function RemoveCard(props) {

    return (
        <Modal show={true} animation={false} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title className="text-info">Confirm the action</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-secondary h5">Are you sure you want to delete {props.deleteCheckBoxCards} cards ?</Modal.Body>
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