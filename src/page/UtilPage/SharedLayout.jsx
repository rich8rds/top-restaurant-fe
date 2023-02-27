import { Outlet } from 'react-router-dom'
import Navbar from '../../component/NavbarCard/Navbar'

const SharedLayout = () => {
  const handleShowNav = () =>  console.log("first")
  
  return (
    <section className="shared-layout">
    <Navbar />
    <div className="div-non-name"  onClick={handleShowNav}>
      <Outlet />
    </div>
    </section>
  )
}

export default SharedLayout