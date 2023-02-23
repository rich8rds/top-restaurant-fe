import './productitem.css'
import { FaStar } from 'react-icons/fa'
import { AiOutlineHeart } from 'react-icons/ai'

const imageUrl = 'https://th.bing.com/th/id/OIP.wnwcBAQL0XEzt6SxuhUkjgHaGO?pid=ImgDet&rs=1'
const ProductItem = () => {
  return (
    <div className='food-icon-top-div'>
        <div className="inner-food-div">
            <div className='food-icon'>
                <img src={imageUrl} className="food-icon" alt="" />
            </div>
            {/* <div>Yo</div> */}
            <div className="food-title">
                <h3>Moti Pikmotichu</h3>

                <div className="price-info">
                  <h3 className='food-price'>$4.87</h3>
                  <div className="rating-div">
                    <FaStar className='rating-icon'/>
                    <p>4.7</p>
                  </div>

                </div>
            
            </div>
            <div className="food-description">
                <p><span>18 Items</span>Available</p>
            </div>

            <div className="div-heart">
              <button className='btn add-to-cart-btn'> ORDER</button>
              <button className='btn heart-btn'>
                <AiOutlineHeart className='heart-icon'/>

              </button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem