import React from 'react'
import PropTypes from 'prop-types'

const Score = ({group, groupName, points, joker}) => (
    <tr>
        <td>{group}</td>
        <td>{groupName}</td>
        <td>{points}</td>
        <td>{joker? "Ja" : "Nee"}</td>
    </tr>
)

Score.propTypes = {
   group: PropTypes.number.isRequired,
   points: PropTypes.number.isRequired
}

export default Score
