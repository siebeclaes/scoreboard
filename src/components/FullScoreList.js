import React from 'react'
import PropTypes from 'prop-types'
import FinalScore from './FinalScore'
import Table from 'react-bootstrap/Table'

class FullScoreList extends React.Component {
    constructor(props) {
        super(props)

        const { finalScores } = props

        this.numPages = Math.ceil(finalScores.scores.length / 10)
        this.handleKeyDown = this.handleKeyDown.bind(this)

        this.state = {
            allScores: finalScores,
            page: -1,
            lastPageStep: -1,
            scoresToShow: []
        }
    }

    componentDidMount() {
        this.showPage(this.numPages - 1, 9)
        window.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    showPage(pageNumber, lastPageStep) {
        this.setState((prevState, props) => {
            const start = pageNumber * 10
            const end = (pageNumber + 1) * 10
            return {
                allScores: prevState.allScores,
                page: pageNumber,
                lastPageStep: lastPageStep,
                scoresToShow: prevState.allScores.scores.slice(start, end)
            }
        })
    }

    handleKeyDown(e) {
        if (e.keyCode === 38 && this.state.page > -1) {
            if (this.state.page === 0 && this.state.lastPageStep > 0) {
                this.showPage(0, this.state.lastPageStep - 1)
            } else if (this.state.page === 0 && this.state.lastPageStep === 0) {
                return
            } else if (this.state.page === 1) {
                this.showPage(0, 9)
            } else {
                this.showPage(this.state.page - 1, -1)
            }
        } else if (e.keyCode === 40 && this.state.page < this.numPages - 1) {
            if (this.state.page === 0 && this.state.lastPageStep < 9) {
                this.showPage(0, this.state.lastPageStep + 1)
            } else {
                this.showPage(this.state.page + 1, -1)
            }
        }
    }

    render() {
        if (this.state.page === -1) {
            return (<React.Fragment></React.Fragment>)
        }
        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Ranking</th>
                        <th>Groepsnaam</th>
                        {this.state.allScores.rounds.map((round, index) => (
                            <td key={round}>{round}</td>
                        ))}
                        <th>Totaal Score</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.scoresToShow.map((score, index) => (
                        <FinalScore key={score.groupName} blank={this.state.page === 0 && index < this.state.lastPageStep} ranking={score.ranking} finalScore={score} />
                    ))}
                </tbody>
            </Table>
        )
    }
}


FullScoreList.propTypes = {
    finalScores: PropTypes.shape({
        scores: PropTypes.arrayOf(
                    PropTypes.shape({
                        groupName: PropTypes.string.isRequired,
                        ranking: PropTypes.number.isRequired,
                        roundScores: PropTypes.arrayOf(
                                PropTypes.shape({
                                    joker: PropTypes.bool.isRequired,
                                    points: PropTypes.number.isRequired
                                }).isRequired
                            ).isRequired
                    }).isRequired
            ).isRequired,
        rounds: PropTypes.arrayOf(PropTypes.string.isRequired)
    }).isRequired,
}

export default FullScoreList
