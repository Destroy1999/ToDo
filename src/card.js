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
        const { disabled, ToDoState } = this.props
        return (
            <Card className={`text-center border border-primary ${myCardIndex % 2 === 0 ? "bg-warning" : "bg-success"} `} >
                <Card.Body>
                    <input
                        type="checkbox"
                        // checked={myCard.checked}
                        // onClick={() => this.props.elemSelectCheckBox(myCard, myCard._id)} 
                        onClick={this.checkedFunction}
                        key={myCard._id}
                        disabled={!!ToDoState.acceptDeleteSelectedCards}
                    />
                    <Card.Title>{myCard.text.slice(0, 6)}</Card.Title>
                    <Card.Text>{myCard.text}</Card.Text>
                    <Button
                        variant="primary"
                        onClick={() => this.props.deleteCard(myCard._id)}
                        disabled={disabled}
                    >
                        X
                    </Button>
                </Card.Body>
            </Card>

        )
    }
}

export default Cardss