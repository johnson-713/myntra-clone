import { useContext } from 'react'
import './Cart.css'
import { ShopContext } from '../Context/ShopContext'
import remove_icon from '../Components/Assets/cart_cross_icon.png'

export const Cart = () => {
  const {all_product, cartItems, removeFromCart, getTotalAmount} = useContext(ShopContext)

  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-header'>
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          all_product?.map((i) => {
            if(cartItems[i?.id] > 0) {
              return (
                <div key={i?.id}>
                  <div className='cart-format cart-header'>
                    <img src={i?.image} className='cart-image' alt='' />
                    <p>{i?.name}</p>
                    <p>${i?.new_price}</p>
                    <button className='cart-quantity'>{cartItems[i?.id]}</button>
                    <p>{i?.new_price * cartItems[i?.id]}</p>
                    <img className='cart-remove' src={remove_icon} alt='' onClick={() => {removeFromCart(i?.id)}} />
                    </div>
                </div>
              )
            }
          })
        }
        <div className='cart-total'>
          <h1>Cart Totals</h1>
          <div className='cart-item-total'>
            <p>Subtotal</p>
            <p>${getTotalAmount()}</p>
          </div>
          <hr />
          <div className='cart-item-total'>
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <hr />
          <div className='cart-item-total'>
            <p>Total</p>
            <p>${getTotalAmount()}</p>
          </div>
          <div className='cart-button'>
          <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}
