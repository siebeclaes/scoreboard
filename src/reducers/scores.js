import { addOrUpdateScore } from './stateUpdates'

const scores = (state = [], action) => {
    switch (action.type) {
      case 'ADD_SCORE':
        return addOrUpdateScore(state, action.round, action.group, action.points, action.joker)
      default:
        return state
    }
  }
  
  export default scores
  