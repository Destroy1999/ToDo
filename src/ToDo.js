import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Cardss from "./card"
import AddTask from "./addTask"
import IdGenerator from "./IdGenerator"
import RemoveCard from "./removeCard"
import EditCard from "./editCard"


class ToDo extends Component {
    state = {
        MyArray: [],
        deleteCheckBoxCards: new Set(),
        toggleAccept: false,
        editCardTitle: ""
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
        } else {
            deleteCheckBoxCards.add(card)
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

    handleSave = () => {
        let MyArray = [...this.state.MyArray]
        this.state.deleteCheckBoxCards.forEach((id) => {
            MyArray = MyArray.filter(e => e._id !== id)
        })
        this.setState({
            MyArray,
            deleteCheckBoxCards: new Set(),
            toggleAccept: false
        })



        // const { deleteCheckBoxCards, MyArray } = this.state
        // const newDeleteCards = MyArray.filter(elem => !deleteCheckBoxCards.includes(elem))
        // this.setState({
        //     MyArray: newDeleteCards,
        //     deleteCheckBoxCards: [],
        // })

    }

    ToogleInConfirmationWindow = () => {
        this.setState({
            toggleAccept: true
        })
    }

    handleClose = () => {
        this.setState({
            toggleAccept: false
        })
    }

    AddFunction = (value) => {
        const newTask = {
            text: value,
            _id: IdGenerator(),
        }

        const newMyArray = [newTask, ...this.state.MyArray]
        this.setState({
            MyArray: newMyArray,
        })
    }

    editToggleIn = (newTask) => {
        this.setState({
            toggleEdit: newTask,
            editCardTitle: newTask.text
        })
    }

    editHandleClose = () => {
        this.setState({
            toggleEdit: false
        })
    }

    editinputOnchange = (content) => {
        this.setState({
            editCardTitle: content.target.value
        })
    }

    saveEditCard = (e) => {
        
    }

    render() {
        const { deleteCheckBoxCards, toggleAccept, toggleEdit } = this.state
        const newMyArray = this.state.MyArray.map((e, i) => {
            return (
                <Col className={`mb-4 Card_N${i}`} key={i} xs={12} sm={6} md={4} lg={3} xl={2} >
                    <Cardss
                        elem={e}
                        index={i}
                        deleteCard={this.deleteCard}
                        elemSelectCheckBox={this.elemSelectCheckBox}
                        disabled={!!deleteCheckBoxCards.size}
                        editToggleIn={() => { this.editToggleIn(e) }}
                        saveEditCard={() => { this.saveEditCard(e) }}
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

                    <Row className="justify-content-center">
                        {newMyArray}
                    </Row>

                </Container>

                {toggleAccept &&
                    <RemoveCard
                        handleClose={this.handleClose}
                        handleSave={this.handleSave}
                        deleteCheckBoxCards={deleteCheckBoxCards.size}
                    />
                }

                {!!toggleEdit &&
                    <EditCard
                        editHandleClose={this.editHandleClose}
                        editCardTitle={this.state.editCardTitle}
                        editCard={this.editCard}
                        editinputOnchange={this.editinputOnchange}
                    />
                }


            </>
        )
    }
}

export default ToDo