import React from 'react'
import './sidebar.css'
import SidebarRow from './SidebarRow'
import Icon from '../../assets/icon/Icon'
import useAuth from '../../hooks/useAuth'

const Sidebar = () => {
    const { user } = useAuth().state

    return (
        <div className="sidebar">
            <SidebarRow
                src={user.photoURL}
                title={user.displayName} />
            <SidebarRow Icon={Icon.LocalHospitalIcon} title="Covid-19 information Cebter" />
            <SidebarRow Icon={Icon.EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={Icon.PeopleIcon} title="Friends" />
            <SidebarRow Icon={Icon.ChatIcon} title="Messager" />
            <SidebarRow Icon={Icon.VideoLibraryIcon} title="Video" />
            <SidebarRow Icon={Icon.ExpandMoreOutlined} title="Marketplace" />
        </div>
    )
}

export default Sidebar
