import { Link } from 'react-router-dom'
import './Items.css'

// eslint-disable-next-line react/prop-types
export const Items = ({image, name, old_price, new_price, id}) => {
  return (
    <div className='item'>
        <Link to={`/product/${id}`}><img src={image} alt='image' /></Link>
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">${new_price}</div>
            <div className="item-price-old">${old_price}</div>
        </div>
     </div>
  )
}
