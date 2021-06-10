import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'

class editCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ...props.data
        }
    }

    editinputOnchange = (content) => {
        this.setState({
            text: content.target.value
        })
    }

    handleSave = () => {
        const { text } = this.state
        if (!text) {
            return
        }
        this.props.onSave(this.state)
    }

    render() {
        const { text } = this.state
        return (
            <Modal show={true} animation={false} onHide={this.props.editHandleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input
                        type="text"
                        value={text}
                        onChange={this.editinputOnchange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={this.props.editHandleClose}>
                        Cancle
                  </Button>
                    <Button variant="success" onClick={this.handleSave}>
                        Save
                  </Button>
                </Modal.Footer>
            </Modal>

        )

    }
}

export default editCard;