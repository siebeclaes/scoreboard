import React from 'react'
import PropTypes from 'prop-types'
import Group from './Group'
import Table from 'react-bootstrap/Table'

const GroupList = ({groups}) => (
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Tafel</th>
                <th>Ploegsnaam</th>
                <th>Joker</th>
                <th>Totaal score</th>
            </tr>
        </thead>
        <tbody>
            {groups.map((group, index) => (
                <Group key={group.number} number={group.number} name={group.name} joker={group.joker} totalScore={group.totalScore} />
            ))}
        </tbody>
    </Table>
)

GroupList.propTypes = {
   groups: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
   ).isRequired
}

export default GroupList
