import { addOrUpdateNameRounds } from './stateUpdates'

const rounds = (state = [], action) => {
    switch (action.type) {
      case 'ADD_ROUND':
        return addOrUpdateNameRounds(state, action.number, action.name, action.maxPoints, action.jokerAllowed)
      default:
        return state
    }
  }
  
  export default rounds
  