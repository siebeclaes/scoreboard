import React from 'react'
import AddGroup from '../containers/AddGroup'
import GroupList from '../containers/GroupList'
import DownloadButton from '../containers/DownloadButton'

const GroupPage = () => (
    <React.Fragment>
        <DownloadButton />
        <AddGroup />
        <GroupList /> 
    </React.Fragment>
)


export default GroupPage
