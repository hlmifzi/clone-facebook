import React from 'react'
import './sidebar-row.css'
import { Avatar } from '@material-ui/core'
const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="sidebar-row">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
