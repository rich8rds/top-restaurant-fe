const SidebarItem = ({ icon, name, bg }) => {

  return (
    <section className='sidebar-item'>
        <div className="icon">
            <button className={ bg ? "sidebar-btn no-bg" : 'sidebar-btn'}>
              { icon }
            </button>
            <p className='icon-text'>{ name }</p>
        </div>
    </section>
  )
}

export default SidebarItem