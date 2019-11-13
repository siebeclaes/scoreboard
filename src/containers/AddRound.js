import React from 'react'
import { connect } from 'react-redux'
import { addRound } from '../actions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddRound extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            name: "",
            maxPoints: "",
            jokerAllowed: false
        }

        this.dispatch = props.dispatch

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.name.trim()) {
            this.nameInput.focus();
        }
        if (!this.state.number.trim() || !this.state.name.trim() || !this.state.maxPoints.trim()) {
            return
        }
        const number = parseInt(this.state.number, 10)
        const maxPoints = parseInt(this.state.maxPoints, 10)
        if (!isNaN(number))
            this.dispatch(addRound(number, this.state.name, maxPoints, this.state.jokerAllowed))

        this.setState({
            number: "",
            name: "",
            maxPoints: "",
            jokerAllowed: false
        })
        this.numberInput.focus();
    }

    render() {
        return (
            <Form className="p-4" onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col className="col-md-2">
                        <Form.Control name="number" placeholder="Reeksnummer" ref={(input) => {this.numberInput = input; }} value={this.state.number} onChange={this.handleInputChange} />
                    </Col>
                    <Col>
                        <Form.Control name="name" placeholder="Reeksnaam" ref={(input) => {this.nameInput = input; }} value={this.state.name} onChange={this.handleInputChange} />
                    </Col>
                    <Col>
                        <Form.Control name="maxPoints" placeholder="Maximum score" ref={(input) => {this.maxInput = input; }} value={this.state.maxPoints} onChange={this.handleInputChange} />
                    </Col>
                    <Col>
                        <Form.Check label="Joker toegestaan" name="jokerAllowed" checked={this.state.jokerAllowed} onChange={this.handleInputChange} />
                    </Col>
                    <Button type="submit">Reeks toevoegen</Button>
                </Form.Row>
            </Form>
        )
    }
}

export default connect()(AddRound)
