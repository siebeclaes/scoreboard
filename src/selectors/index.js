import { createSelector } from 'reselect'
import orderBy from 'lodash/orderBy'
import find from 'lodash/find'

const groupsSelector = state => state.groups
const roundsSelector = state => state.rounds
const scoresSelector = state => state.scores

const groupsPropsSelector = (state, _) => state.groups
const roundsPropsSelector = (state, _) => state.rounds
const scoresPropsSelector = (state, _) => state.scores

const propsRoundSelector = (_, props) => props.round
const propsJokerShownSelector = (_, props) => props.includeJoker

const roundnameSelector = (state, props) => {
    return state.rounds.filter(round => round.number === parseInt(props.match.params.round))
}

export const getFinalScores = createSelector(
    groupsPropsSelector,
    roundsPropsSelector,
    scoresPropsSelector,
    propsJokerShownSelector,
    (groups, rounds, scores, includeJoker) => {
        const sortedRounds = orderBy(rounds, ['number'], ['asc'])
        const roundNames = sortedRounds.map(round => round.name)
        const finalScores = groups.map((group, index) => {
            const roundScores = sortedRounds.map(round => {
                const roundScore = find(scores, score => score.round === round.number && score.group === group.number)
                if (roundScore) {
                    return includeJoker ? roundScore: {...roundScore, joker: false}
                } else {
                    return {points: 0, joker: false}
                }
            })
            const totalScore = scores.filter(score => score.group === group.number)
                .reduce((total, score) => {
                        return score.joker && includeJoker? total + score.points * 2 : total + score.points
                }, 0)
            return {
                groupName: group.name,
                roundScores: roundScores,
                totalScore: totalScore
            }
        })
        return {
            rounds: roundNames,
            scores: orderBy(finalScores, ['totalScore'], ['desc'])
                .map((score, index) => ({...score, ranking: index + 1}))
        }
    }
)

const getAnnotatedGroups = createSelector(
    groupsSelector,
    roundsSelector,
    scoresSelector,
    (groups, rounds, scores) => {
        return groups.map((group, index) => {
            const jokerScore = find(scores, (score) => {
                return score.joker && score.group === group.number
            }) 
            var jokerRound = undefined
            if (jokerScore) {
                const round = find(rounds, (round) => round.number === jokerScore.round)
                jokerRound = round.name
            }
            const totalScore = scores.filter(score => score.group === group.number)
                .reduce((total, score) => {
                        return score.joker? total + score.points * 2 : total + score.points
                }, 0)
            return {
                ...group,
                joker: jokerRound? jokerRound : "-",
                totalScore: totalScore
            }
        })
    }
)

export const getGroupNumbers = createSelector(
    groupsSelector,
    (groups) => {
        return groups.map((group, index) => group.number)
    }
)

export const getSortedGroups = createSelector(
    getAnnotatedGroups,
    (groups) => {
        return orderBy(
            groups,
            ['number'],
            ['asc']
        )
    }
)

export const getSortedRounds = createSelector(
    roundsSelector,
    (rounds) => {
        return orderBy(
            rounds,
            ['number'],
            ['asc']
        )
    }
)

export const makeGetSortedRoundScores = () => {
    return createSelector(
        scoresPropsSelector,
        groupsSelector,
        propsRoundSelector,
        (scores, groups, round) => {
            return orderBy(
                scores.filter(score => score.round === round)
                .map((score, index) => {
                    const group = groups.find(group => group.number === score.group)
                    return {
                        ...score,
                        groupName: group.name
                    }
                }),
                ['group'],
                ['asc']
            )
        }
    )
}

export const makeGetRound = () => {
    return createSelector(
        roundnameSelector,
        (round) => {
            return round[0]
        }
    )
}

export const getGroupsThatUsedJoker = createSelector(
    scoresSelector,
    (scores) => {
        return scores.filter(score => score.joker)
            .map((score, index) => score.group)
    }
)
