import React from 'react'
import { connect } from 'react-redux'
import { addScore } from '../actions'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { getGroupNumbers, getGroupsThatUsedJoker } from '../selectors'
import findIndex from 'lodash/findIndex'
import Modal from 'react-bootstrap/Modal'

class AddScore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group: "",
            points: "",
            showError: false,
            errorText: ""
        }
        this.round = props.round

        this.dispatch = props.dispatch

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClose(event) {
        this.setState({
            showError: false,
            errorText: ""
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        if (!this.state.points.trim()) {
            this.pointsInput.focus();
        }
        if (!this.state.group.trim() || !this.state.points.trim()) {
            return
        }
        // Round constraints
        const jokerAllowed = this.round.jokerAllowed
        const maxPoints = this.round.maxPoints
        const groupsThatUsedJoker = this.props.groupsThatUsedJoker

        // Form inputs
        const group = parseInt(this.state.group, 10)
        const points = parseInt(this.state.points, 10)
        const joker = this.state.points.includes('+')

        if (!isNaN(group) && !isNaN(points)) {
            // Check if group number exists
            if (findIndex(this.props.groupNumbers, (item) => item === group) === -1) {
                console.log("Group number not found")
                this.groupInput.focus()
                this.setState({
                    showError: true,
                    errorText: "Het opgegeven tafelnummer bestaat niet."
                })
                return
            } else if (points > maxPoints) {
                this.setState({
                    showError: true,
                    errorText: "De ingegeven score is meer dan het maximum in deze ronde."
                })
                return
            } else if (joker && !jokerAllowed) {
                this.setState({
                    showError: true,
                    errorText: "De joker kan niet gebruikt worden in deze ronde."
                })
                return
            } else if (joker && findIndex(groupsThatUsedJoker, (item) => item === group) !== -1) {
                console.log("Group has already used joker")
                this.pointsInput.focus()
                this.setState({
                    showError: true,
                    errorText: "Deze groep heeft zijn joker al eens ingezet."
                })
                return
            } else {
                this.dispatch(addScore(this.round.number, group, points, joker))
            }
        }
        
        const nextGroup = group + 1
        this.setState({
            group: nextGroup.toString(),
            points: "",
            showError: false,
            errorText: ""
        })
        this.pointsInput.focus();
    }

    render() {
        return (
            <React.Fragment>
                <Form className="p-4" onSubmit={this.handleSubmit}>
                    <Form.Row>
                        <Col className="col-md-2">
                            <Form.Control name="group" placeholder="Tafelnummer" ref={(input) => {this.groupInput = input; }} value={this.state.group} onChange={this.handleInputChange} />
                        </Col>
                        <Col>
                            <Form.Control name="points" placeholder="Aantal punten" ref={(input) => {this.pointsInput = input; }} value={this.state.points} onChange={this.handleInputChange} />
                        </Col>
                        <Button type="submit">Punt toevoegen</Button>
                    </Form.Row>
                </Form>
                <Modal show={this.state.showError} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Fout bij ingeven van score</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.errorText}</Modal.Body>
                    <Modal.Footer>
                        <Button varian="secondary" onClick={this.handleClose}>Sluiten</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
  return {
    groupNumbers: getGroupNumbers(state),
    groupsThatUsedJoker: getGroupsThatUsedJoker(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddScore)
