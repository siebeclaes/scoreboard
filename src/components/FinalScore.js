import React from 'react'
import PropTypes from 'prop-types'

const FinalScore = ({ranking, blank, finalScore}) => (
    <tr className="finalscore-row">
        <td>{!blank && ranking}</td>
        <td>{!blank && finalScore.groupName}</td>
        {finalScore.roundScores.map((roundScore, index) => (
            <td key={index}>{!blank && (roundScore.joker? roundScore.points * 2 + "*" : roundScore.points)}</td>
        ))}
        <td>{!blank && finalScore.totalScore}</td>
    </tr>
)

FinalScore.propTypes = {
   ranking: PropTypes.number.isRequired,
   finalScore: PropTypes.object.isRequired
}

export default FinalScore
