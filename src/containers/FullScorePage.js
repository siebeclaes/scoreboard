import { connect } from 'react-redux'
import FullScorePage from '../components/FullScorePage'
import { getFinalScores } from '../selectors'

const mapStateToProps = (state, props) => {
    return {
        finalScores: getFinalScores(state, props)
    }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const FullScorePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScorePage)

export default FullScorePageContainer
