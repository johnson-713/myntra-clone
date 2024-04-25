/* eslint-disable react/prop-types */
import './BreadCrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const BreadCrumb = (props) => {
    const {product} = props
  return (
    <div className='breadcrumb'>
        Home <img src={arrow_icon} alt='arrow' /> {product?.category} <img src={arrow_icon} alt='arrow' /> {product?.name}
    </div>
  )
}
