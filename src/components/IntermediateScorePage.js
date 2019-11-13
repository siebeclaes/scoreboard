import React from 'react'
import FullScorePage from '../containers/FullScorePage'

const IntermediateScorePage = ({ match: {params} }) => {
    return (
    <React.Fragment>
        <h3>Tussenstand</h3>
        <FullScorePage includeJoker={false} /> 
    </React.Fragment>
    )
}

export default IntermediateScorePage
