import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

class Cardss extends Component {
    state = {
        checked: false,
    }
    checkedFunction = () => {
        this.setState({
            checked: !this.state.checked
        })
        const { elemSelectCheckBox, elem } = this.props
        elemSelectCheckBox(elem._id)
    }

    render() {
        const myCard = this.props.elem
        const myCardIndex = this.props.index
        const { disabled } = this.props
        return (
            <Card className={`text-center border border-primary ${this.state.checked && disabled ? "bg-danger" : myCardIndex % 2 === 0 ? "bg-warning" : "bg-success"} `} >
                {/* <Card className={`text-center border border-primary ${myCardIndex % 2 === 0 ? "bg-warning" : "bg-success"} `} > */}
                <Card.Body>
                    <input
                        type="checkbox"
                        onClick={this.checkedFunction}
                        key={myCard._id}
                    />
                    <Card.Title>{myCard.text.slice(0, 6)}</Card.Title>
                    <Card.Text>{myCard.text}</Card.Text>
                    <Button
                        variant="danger"
                        onClick={() => this.props.deleteCard(myCard._id)}
                        disabled={disabled}
                    >
                        <i className="fas fa-trash-alt text-light"></i>
                    </Button>
                    <Button
                        variant="info"
                        onClick={this.props.editToggleIn}
                        disabled={disabled}
                    >
                        <i className="fas fa-pencil-alt text-light"></i>
                    </Button>
                </Card.Body>
            </Card >

        )
    }
}

export default Cardss