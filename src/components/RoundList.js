import React from 'react'
import PropTypes from 'prop-types'
import Round from './Round'
import Table from 'react-bootstrap/Table'

const RoundList = ({rounds}) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>Reeksnaam</th>
                <th>Maximum score</th>
                <th>Joker toegestaan</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {rounds.map((round, index) => (
                <Round key={round.number} number={round.number} name={round.name} maxPoints={round.maxPoints} jokerAllowed={round.jokerAllowed} />
            ))}
        </tbody>
    </Table>
)

RoundList.propTypes = {
   rounds: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
   ).isRequired
}

export default RoundList
