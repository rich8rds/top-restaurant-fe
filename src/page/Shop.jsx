import Sidebar from '../component/Sidebar'
import HomeCenter from '../component/HomeCenter'
import '../styles/shop.css'
import CartView from '../component/CartView'

const Shop = () => {
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

export default Shop