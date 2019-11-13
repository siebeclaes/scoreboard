import { combineReducers } from 'redux'
import groups from './groups'
import rounds from './rounds'
import scores from './scores'

export default combineReducers({
  groups,
  rounds,
  scores
})
