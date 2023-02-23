import { FaMinus, FaPlus, FaRemoveFormat } from 'react-icons/fa'
import { MdOutlineDeleteForever } from 'react-icons/md'
import './cartitem.css'

const imageUrl = 'https://www.slicepizzeria.com/wp-content/uploads/2020/12/Hand-Tossed-Crust-Classic-Crust-768x725.jpg'
const text = 'Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maiores iure saepe quibusdam vel non ullam tenetur nesciunt, accusamus debitis?'

const CartItem = () => {
    const textSize = text.length > 100;
  return (
    <section className='cart-item'>

        <div className="cart-item-div">
            <div className="img">
                <img src={ imageUrl } alt="" />
            </div>

            <div className="text-div">
                <h3>Orange Juice</h3>
                <p>{ textSize ? text.slice(0, 80) + "..." : text }
                </p>
                <p id="price-text">$ 4.78</p>

                <div className="controls-div">
                    <div className="add-sub-btn">
                        <FaMinus className='cart-icon'/>
                        <p>4</p>
                        <FaPlus className='cart-icon'/>
                    </div>
                        <MdOutlineDeleteForever className='cart-icon delete'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartItem