import React, { Component } from 'react'


export default class addTask extends Component {
    state = {
        InputTitleValue: "",
    }
    MyTitleInputChange = (e) => {
        this.setState({
            InputTitleValue: e.target.value
        })
    }

    AddKeyDownFunction = (e) => {
        if (e.key === "Enter") {
            this.AddFunction()
        }
    }

    AddFunction = () => {
        const { InputTitleValue } = this.state

        if (!InputTitleValue) {
            return
        }
        this.props.onAdd(InputTitleValue)
        this.setState({
            InputTitleValue: '',
        })

    }
    render() {
        const { InputTitleValue } = this.state
        const { disabled } = this.props
        return (
            <>
                <input
                    onChange={this.MyTitleInputChange}
                    value={InputTitleValue}
                    type="text"
                    placeholder="TiTle"
                    onKeyDown={this.AddKeyDownFunction}
                    disabled={disabled}
                />
                <input
                    onClick={this.AddFunction}
                    disabled={!InputTitleValue || disabled}
                    type="submit"
                    value="Add"
                    className={` btn ${InputTitleValue.length > 0 ? "btn-success" : "btn-danger"}`}
                />
            </>
        )
    }
}
