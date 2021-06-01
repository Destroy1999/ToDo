import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cardss from "./card"
import AddTask from "./addTask"
import IdGenerator from "./IdGenerator"
import RemoveCard from "./removeCard"
// import Cardss from "./twoCard"


class ToDo extends Component {
    state = {
        MyArray: [],
        // acceptDeleteSelectedCards: false,
        deleteCheckBoxCards: new Set(),
    }

    deleteCard = (genId) => {
        const newDelete = this.state.MyArray.filter(e => e._id !== genId)
        this.setState({
            MyArray: newDelete
        })
    }

    elemSelectCheckBox = (card) => {
        const deleteCheckBoxCards = new Set(this.state.deleteCheckBoxCards)

        if (deleteCheckBoxCards.has(card)) {
            deleteCheckBoxCards.delete(card)
            // elem.checked = false
        } else {
            deleteCheckBoxCards.add(card)
            // elem.checked = true
        }
        this.setState({
            deleteCheckBoxCards,
        })



        // const { deleteCheckBoxCards } = this.state
        // const findActiveCheckBox = deleteCheckBoxCards.find(e => e === card)
        // if (findActiveCheckBox === undefined) {
        //     const allDeleteCheckBoxCards = [card, ...deleteCheckBoxCards]
        //     this.setState({
        //         deleteCheckBoxCards: allDeleteCheckBoxCards
        //     })
        // } else {
        //     const Clear = deleteCheckBoxCards.filter(id => id !== card)
        //     this.setState({
        //         deleteCheckBoxCards: Clear
        //     })
        // }
    }

    deleteAllSelectedCheckBoxCards = () => {
        let MyArray = [...this.state.MyArray]
        this.state.deleteCheckBoxCards.forEach((id) => {
            MyArray = MyArray.filter(e => e._id !== id)
        })
        this.setState({
            MyArray,
            deleteCheckBoxCards: new Set(),
            // acceptDeleteSelectedCards: !this.state.acceptDeleteSelectedCards
        })




        // const { deleteCheckBoxCards, MyArray } = this.state
        // const newDeleteCards = MyArray.filter(elem => !deleteCheckBoxCards.includes(elem))
        // this.setState({
        //     MyArray: newDeleteCards,
        //     deleteCheckBoxCards: [],
        // })
    }

    // ToogleInConfirmationWindow = () => {
    //     this.setState({
    //         acceptDeleteSelectedCards: !this.state.acceptDeleteSelectedCards
    //     })
    // }

    // ToogleOutConfirmationWindow = () => {
    //     this.setState({
    //         acceptDeleteSelectedCards: !this.state.acceptDeleteSelectedCards
    //     })
    // }

    AddFunction = (value) => {
        const newTask = {
            // checked: false,
            text: value,
            _id: IdGenerator(),
        }

        const newMyArray = [newTask, ...this.state.MyArray]
        this.setState({
            MyArray: newMyArray,
        })
    }

    render() {
        const { deleteCheckBoxCards } = this.state
        const newMyArray = this.state.MyArray.map((e, i) => {
            return (
                <Col className={` mb-4 Card_N${i}`} key={i} xs={12} sm={6} md={4} lg={3} xl={2} >
                    <Cardss
                        elem={e}
                        index={i}
                        deleteCard={this.deleteCard}
                        elemSelectCheckBox={this.elemSelectCheckBox}
                        disabled={!!deleteCheckBoxCards.size}
                        ToDoState={this.state}
                    />
                </Col>
            )
        })

        return (
            <>
                <Container className="d-flex justify-content-center align-items-center p-5 bg-primary">
                    <Row>
                        <Col className="d-flex flex-column">
                            <AddTask
                                onAdd={this.AddFunction}
                                disabled={!!deleteCheckBoxCards.size}
                            />
                        </Col>
                    </Row>
                </Container>

                <Container className="bg-dark p-5">
                    <Row className="justify-content-center pb-5">
                        <input
                            onClick={this.ToogleInConfirmationWindow}
                            disabled={!deleteCheckBoxCards.size}
                            type="submit"
                            value="Delete"
                            className={` btn ${deleteCheckBoxCards.size > 0 ? "btn-success" : "btn-danger"}`}
                        />
                    </Row>
                    {/* <Row className="justify-content-center pb-5">
                        {
                            this.state.acceptDeleteSelectedCards ?
                                <>
                                    <Card className="bg-primary">
                                        <Card.Body>
                                            <Card.Title className="text-center text-light">Are you sure you want to delete all selected cards</Card.Title>
                                            <Row className="justify-content-around">
                                                <Button
                                                    variant="success"
                                                    onClick={this.deleteAllSelectedCheckBoxCards}
                                                >
                                                    Yes
                                            </Button>
                                                <Button
                                                    variant="danger"
                                                    onClick={this.ToogleOutConfirmationWindow}
                                                >
                                                    No
                                            </Button>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </>
                                :
                                null
                        }
                    </Row> */}
                    <Row className="justify-content-center">
                        {newMyArray}
                    </Row>

                </Container>


                <RemoveCard
                    handleClose={() => { console.log("done") }}
                    handleSave={() => { console.log("done") }}
                />

            </>
        )
    }
}

export default ToDo