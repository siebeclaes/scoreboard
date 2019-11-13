export const addGroup = (number, name) => ({
    type: 'ADD_GROUP',
    number: number,
    name: name
})

export const addRound = (number, name, maxPoints, jokerAllowed) => ({
    type: 'ADD_ROUND',
    number: number,
    name: name,
    maxPoints: maxPoints,
    jokerAllowed: jokerAllowed
})

export const addScore = (round, group, points, joker) => ({
    type: 'ADD_SCORE',
    round: round,
    group: group,
    points: points,
    joker: joker
})
