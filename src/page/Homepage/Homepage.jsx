import Sidebar from '../../component/SidebarCard/Sidebar'
import HomeCenter from '../../component/HomecenterCard/HomeCenter'
import './homepage.css'
import CartView from '../../component/Cart/CartView'

const Homepage = () => {
  return (
    <section className="homepage-section">
        <Sidebar />
        <div className="homecenter">
            <HomeCenter />
        </div>
        <CartView />
    </section>
  )
}

export default Homepage