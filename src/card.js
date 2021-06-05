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
            <Card className={`text-center border border-primary ${this.state.checked ? "bg-danger" : myCardIndex % 2 === 0 ? "bg-warning" : "bg-success"} `} >
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
                        X
                    </Button>
                    <Button
                        variant="success"
                        onClick={this.props.editToggleIn}
                        disabled={disabled}
                    >
                        \
                    </Button>
                </Card.Body>
            </Card >

        )
    }
}

export default Cardss