import { connect } from 'react-redux'
import RoundScorePage from '../components/RoundScorePage'
import { makeGetRound } from '../selectors'

const makeMapStateToProps = () => {
  const getRound = makeGetRound()
  const mapStateToProps = (state, props) => {
    return {
      round: getRound(state, props)
    }
  }

  return mapStateToProps
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const RoundScorePageContainer = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoundScorePage)

export default RoundScorePageContainer
