import { connect } from 'react-redux'
import GroupList from '../components/GroupList'

import { getSortedGroups } from '../selectors'

const mapStateToProps = state => {
  return {
    groups: getSortedGroups(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const GroupListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupList)

export default GroupListContainer
