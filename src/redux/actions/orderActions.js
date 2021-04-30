import { CLEAR_ORDER, CREATE_ORDER } from "../types"

export const createOrder = (order) => ({
    type: CREATE_ORDER,
    order,
})

export const clearOrder = () => ({
   type: CLEAR_ORDER,
})




 