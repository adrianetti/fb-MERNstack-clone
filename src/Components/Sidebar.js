import React from 'react'
import './Sidebar.css'

import SidebarRow from './SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/LocalHospital'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-9/94235878_10215623293391506_6975524731248181248_n.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=YS7V780FovUAX9hcoKp&_nc_ht=scontent-mia3-1.xx&oh=b58138cdf6056d96d32eec3c5ad82db2&oe=5FADF4F4" title="Adrian" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="More"/>
        </div>
    )
}

export default Sidebar
