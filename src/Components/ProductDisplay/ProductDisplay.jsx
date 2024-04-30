/* eslint-disable react/prop-types */
import './ProductDisplay.css'
import star from '../Assets/star_icon.png'
import star_dull from '../Assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export const ProductDisplay = (props) => {
    const {addToCart} = useContext(ShopContext)
    const {product} = props
  return (
    <div className='product'>
        <div className="product-left">
            <div className="product-img-list">
                <img src={product.image} alt='image' />
                <img src={product.image} alt='image' />
                <img src={product.image} alt='image' />
                <img src={product.image} alt='image' />
            </div>
            <div className="product-main-img">
            <img src={product.image} alt='image' />
            </div>
        </div>
        <div className="product-right">
            <h1>{product.name}</h1>
            <div className="product-star">
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star} alt='star' />
                <img src={star_dull} alt='star' />
                <p>(100)</p>
            </div>
            <div className="product-prices">
                <div className="product-old-price">${product.old_price}</div>
                <div className="product-new-price">${product.new_price}</div>
            </div>
            <div className="product-sizes">
                <h1>Select Size</h1>
                <div className="product-diff-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => addToCart(product?.id)}>ADD TO CART</button>
        </div>
    </div>
  )
}
