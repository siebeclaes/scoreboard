import { connect } from 'react-redux'
import RoundList from '../components/RoundList'
import { getSortedRounds } from '../selectors'

const mapStateToProps = state => {
  return {
    rounds: getSortedRounds(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const RoundListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RoundList)

export default RoundListContainer
