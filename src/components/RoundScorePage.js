import React from 'react'
import AddScore from '../containers/AddScore'
import RoundScoreList from '../containers/RoundScoreList'

const RoundScorePage = ({ match: {params}, round }) => {
    return (
    <React.Fragment>
        <h3>{round.name}</h3>
        <AddScore round={round} />
        <RoundScoreList round={round.number} /> 
    </React.Fragment>
    )
}

export default RoundScorePage
