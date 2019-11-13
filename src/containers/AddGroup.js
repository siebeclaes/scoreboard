import React from 'react'
import { connect } from 'react-redux'
import { addGroup } from '../actions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

class AddGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: "",
            name: ""
        }

        this.dispatch = props.dispatch

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
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
        if (!this.state.number.trim() || !this.state.name.trim()) {
            return
        }
        const number = parseInt(this.state.number, 10)
        if (!isNaN(number))
            this.dispatch(addGroup(number, this.state.name))

        this.setState({
            number: "",
            name: ""
        })
        this.numberInput.focus();
    }

    render() {
        return (
            <Form className="p-4" onSubmit={this.handleSubmit}>
                <Form.Row>
                    <Col className="col-md-2">
                        <Form.Control name="number" placeholder="Tafelnummer" ref={(input) => {this.numberInput = input; }} value={this.state.number} onChange={this.handleInputChange} />
                    </Col>
                    <Col>
                        <Form.Control name="name" placeholder="Ploegsnaam" ref={(input) => {this.nameInput = input; }} value={this.state.name} onChange={this.handleInputChange} />
                    </Col>
                    <Button type="submit">Ploeg toevoegen</Button>
                </Form.Row>
            </Form>
        )
    }
}

export default connect()(AddGroup)
