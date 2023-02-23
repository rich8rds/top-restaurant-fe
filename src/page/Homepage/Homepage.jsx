import './homepage.css'
import Sidebar from '../../component/SidebarCard/Sidebar'
import HomeCenter from '../../component/Shop/HomeCenter'

const Homepage = () => {
  return (
    <section className="homepage-section">
        <Sidebar />
        <div className="homecenter">
            <HomeCenter />
        </div>
    </section>
  )
}

export default Homepage