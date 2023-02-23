import './sidebar.css'
import SidebarItem from "./SidebarItem"

import { FaAccessibleIcon, FaCartPlus, FaClock, FaEdit, FaHamburger, FaHome, FaJediOrder, FaMoon, FaTable } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <SidebarItem bg={true}icon={ <FaMoon className='icon icon-bg-pink'/> } name=""/>
      <div className='main-icons-div'>
        <SidebarItem bg={false} isSelected={false} icon={ <FaHome className='icon'/> } name="Home"/>
        <SidebarItem bg={false} icon={ <FaHamburger className='icon'/> } name="Menu"/>
        <SidebarItem bg={false} icon={ <FaCartPlus className='icon'/> } name="Order"/>
        <SidebarItem bg={false} icon={ <FaClock className='icon'/> } name="History"/>
        <SidebarItem bg={false} icon={ <FaTable className='icon'/> } name="Report"/>
        <SidebarItem bg={false} icon={ <FaAccessibleIcon className='icon'/> } name="Alert"/>
        <SidebarItem bg={false} icon={ <FaEdit className='icon'/> } name="Settings"/>
      </div>
      <SidebarItem bg={false} icon={ <FaTable className='icon'/> } name="Profile"/>
    </section>
  )
}

export default Sidebar