import { addOrUpdateName } from './stateUpdates'

const groups = (state = [], action) => {
    switch (action.type) {
      case 'ADD_GROUP':
        return addOrUpdateName(state, action.number, action.name)
      default:
        return state
    }
  }
  
  export default groups
  