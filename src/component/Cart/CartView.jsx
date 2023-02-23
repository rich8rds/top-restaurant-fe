import CartItem from './CartItem'
import './cartview.css'

const CartView = () => {
  return (
    <section className="cartview-section">
        <div className="cart-title-section">
            <div className="cart-heading">
                <h3 className='cart-heading-title'>Current Orders</h3>
                <p className='cart-heading-table'>Table</p>

            </div>
            <div className="order-id">
                <p className='order-text-id'>#907653</p>
                <p className='order-text-qty'>11</p>
            </div>
        </div>

        <div className="cartview">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
        </div>

        <div className="cart-total-section">
            <div className="total-heading-div">
                <div className="total-heading">
                    <p className='total-heading-title'>Items (7) </p>
                    <p className='total-heading-table'>$28.67</p>
                </div>
                <div className="total-heading">
                    <p className='total-heading-title'>Tax (10%) </p>
                    <p className='total-heading-table'>$2.86</p>
                </div>
            <hr />
            </div>
            <div className="order-id">
                <p className='order-text-id'>Total</p>
                <p className='order-text-qty'>$ 31.53</p>
            </div>

            <button className='btn cart-checkout-btn'>CHECKOUT</button>
        </div>
    </section>
  )
}

export default CartView