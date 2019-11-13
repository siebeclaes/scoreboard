import React from 'react'
import FullScorePage from '../containers/FullScorePage'

const FinalScorePage = ({ match: {params} }) => {
    return (
    <React.Fragment>
        <h3>Eindstand</h3>
        <FullScorePage includeJoker={true} /> 
    </React.Fragment>
    )
}

export default FinalScorePage
