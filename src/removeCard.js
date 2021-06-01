import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function RemoveCard(props) {

    return (

        <Modal show={true} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
export default RemoveCard