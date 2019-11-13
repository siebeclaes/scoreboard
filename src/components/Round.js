import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Round = ({number, name, maxPoints, jokerAllowed}) => (
    <tr>
        <td>{number}</td>
        <td>{name}</td>
        <td>{maxPoints}</td>
        <td>{jokerAllowed ? "Ja" : "Nee"}</td>
        <td><Link to={"/roundscore/" + number }>Punten ingeven</Link></td>
    </tr>
)

Round.propTypes = {
   number: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired
}

export default Round
