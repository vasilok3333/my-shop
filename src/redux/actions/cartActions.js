import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "../types";



export const addToCart = product => ({
    type: ADD_TO_CART,
    product,
  })
  
  export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    id,
  })

export const clearCart = () => ({
  type: CLEAR_CART,
  })