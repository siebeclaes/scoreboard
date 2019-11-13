import React from 'react'
import PropTypes from 'prop-types'

const Group = ({number, name, joker, totalScore}) => (
    <tr>
        <td>{number}</td>
        <td>{name}</td>
        <td>{joker}</td>
        <td>{totalScore}</td>
    </tr>
)

Group.propTypes = {
   number: PropTypes.number.isRequired,
   name: PropTypes.string.isRequired
}

export default Group
