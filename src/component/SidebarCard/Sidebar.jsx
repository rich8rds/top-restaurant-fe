import './sidebar.css'
import SidebarItem from "./SidebarItem"

import { FaCartPlus, FaClock, FaHamburger, FaHome, FaTable } from 'react-icons/fa'
import { MdNotifications, MdSettings } from 'react-icons/md'
import { GiConcentricCrescents } from 'react-icons/gi'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <SidebarItem bg={true}icon={ <GiConcentricCrescents className='icon icon-bg-pink'/> } name=""/>
      <div className='main-icons-div'>
        <SidebarItem bg={false} isSelected={false} icon={ <FaHome className='icon'/> } name="Home"/>
        <SidebarItem bg={false} icon={ <FaHamburger className='icon'/> } name="Menu"/>
        <SidebarItem bg={false} icon={ <FaCartPlus className='icon'/> } name="Order"/>
        <SidebarItem bg={false} icon={ <FaClock className='icon'/> } name="History"/>
        <SidebarItem bg={false} icon={ <FaTable className='icon'/> } name="Report"/>
        <SidebarItem bg={false} icon={ <MdNotifications className='icon'/> } name="Alert"/>
        <SidebarItem bg={false} icon={ <MdSettings className='icon'/> } name="Settings"/>
      </div>
      <SidebarItem bg={false} icon={ <FaTable className='icon'/> } name="Profile"/>
    </section>
  )
}

export default Sidebar