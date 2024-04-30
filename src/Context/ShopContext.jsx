/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
   let cart = {}
   for(let ind = 0; ind < all_product.length; ind++){
    cart[ind] = 0
   } 
   return cart
}

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (id) => {
        setCartItems((alt) => ({...alt, [id]:alt[id]+1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getCartCount = () => {
        let count = 0
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                count += cartItems[item]
            }
        }
        return count
    }

    const getTotalAmount = () => {
        let amount = 0
        for(const item in cartItems){
            if(cartItems[item] > 0) {
                let itemInfo = all_product.find((i) => i.id === Number(item))
                amount += cartItems[item] * itemInfo.new_price
            }
        }
        return amount
    }

    const contextValue = {all_product, addToCart, removeFromCart, cartItems, getCartCount, getTotalAmount}

    console.log('cart Items', cartItems)

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider