import './productitem.css'
import { FaAirbnb } from 'react-icons/fa'

const imageUrl = 'https://templatekit.jegtheme.com/funiture/wp-content/uploads/sites/18/2020/11/XFSNSK@2x-300x300.jpg'
const ProductItem = () => {
  return (
    <div className='food-icon-top-div'>
        <div className="inner-food-div">
            <div className='food-icon'>
                <img src={imageUrl} className="food-icon" alt="" />
            </div>
            {/* <div>Yo</div> */}
            <div className="food-description">
                <h2>American Favorite</h2>
                <h3 className='food-price'>$4.87</h3>
                <p><span>18 Pan</span>Available</p>
            </div>
        </div>
    </div>
  )
}

export default ProductItem