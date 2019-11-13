export const addOrUpdateName = (state, number, name) => {
  var existingItemFound = false
  var newState = state.map((item, index) => {
    if (number !== item.number) {
      // Not the one we want to update, return as-id
      return item
    }
    
    existingItemFound = true
    return {
      number: number,
      name: name
    }
  })

  if (!existingItemFound) {
    newState.push({
      number: number,
      name: name
    })
  }

  return newState
}

export const addOrUpdateNameRounds = (state, number, name, maxPoints, jokerAllowed) => {
  var existingItemFound = false
  var newState = state.map((item, index) => {
    if (number !== item.number) {
      // Not the one we want to update, return as-id
      return item
    }
    
    existingItemFound = true
    return {
      number: number,
      name: name,
      maxPoints: maxPoints,
      jokerAllowed: jokerAllowed
    }
  })

  if (!existingItemFound) {
    newState.push({
      number: number,
      name: name,
      maxPoints: maxPoints,
      jokerAllowed: jokerAllowed
    })
  }

  return newState
}

export const addOrUpdateScore = (state, round, group, points, joker) => {
  var existingItemFound = false
  var newState = state.map((item, index) => {
    if (round !== item.round || group !== item.group) {
      // Not the one we want to update, return as-id
      return item
    }
    
    existingItemFound = true
    return {
      round: round,
      group: group,
      points: points,
      joker: joker
    }
  })
  if (!existingItemFound) {
    newState.push({
      round: round,
      group: group,
      points: points,
      joker: joker
    })
  }

  return newState
}
