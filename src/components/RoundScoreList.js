import React from 'react'
import PropTypes from 'prop-types'
import Score from './Score'
import Table from 'react-bootstrap/Table'

const RoundScoreList = ({scores}) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Tafel</th>
                <th>Groepsnaam</th>
                <th>Score</th>
                <th>Joker ingezet</th>
            </tr>
        </thead>
        <tbody>
            {scores.map((score, index) => (
                <Score key={index} group={score.group} groupName={score.groupName} points={score.points} joker={score.joker} />
            ))}
        </tbody>
    </Table>
)

RoundScoreList.propTypes = {
   scores: PropTypes.arrayOf(
        PropTypes.shape({
            round: PropTypes.number.isRequired,
            group: PropTypes.number.isRequired,
            points: PropTypes.number.isRequired
        }).isRequired
   ).isRequired
}

export default RoundScoreList
