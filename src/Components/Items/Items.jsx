import './Items.css'

// eslint-disable-next-line react/prop-types
export const Items = ({image, name, old_price, new_price}) => {
  return (
    <div className='item'>
        <img src={image} alt='image' />
        <p>{name}</p>
        <div className="item-prices">
            <div className="item-price-new">${new_price}</div>
            <div className="item-price-old">${old_price}</div>
        </div>
     </div>
  )
}
