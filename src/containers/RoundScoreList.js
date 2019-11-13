import { connect } from 'react-redux'
import RoundScoreList from '../components/RoundScoreList'
import { makeGetSortedRoundScores } from '../selectors'

const makeMapStateToProps = () => {
  const getSortedRoundScores = makeGetSortedRoundScores()
  const mapStateToProps = (state, props) => {
    return {
      scores: getSortedRoundScores(state, props)
    }
  }

  return mapStateToProps
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const RoundScoreListContainer = connect(
  makeMapStateToProps,
  mapDispatchToProps
)(RoundScoreList)

export default RoundScoreListContainer
