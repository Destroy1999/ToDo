import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class editCard extends Component {

    constructor(props) {
        super(props)
        // this.state = {}
    }

    render() {

        return (

            <Modal show={true} animation={false} onHide={this.props.editHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={this.props.editCardTitle}
                        onChange={this.props.editinputOnchange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.editHandleClose}>
                        Cancle
                  </Button>
                    <Button variant="success" onClick={this.props.saveEditCard}>
                        Save
                  </Button>
                </Modal.Footer>
            </Modal>

        )

    }
}

export default editCard;