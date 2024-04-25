import { useContext } from 'react'
import { BreadCrumb } from '../Components/BreadCrumb/BreadCrumb'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { Popular } from '../Components/Popular/Popular'

export const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const product = all_product?.find((item) => item.id === Number(productId))
  return (
    <div>
        <BreadCrumb product={product} />
        <ProductDisplay product={product} />
        <Popular title='Related Products' />
    </div>
  )
}
