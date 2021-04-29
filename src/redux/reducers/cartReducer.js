import { ADD_TO_CART, REMOVE_FROM_CART } from "../types.js";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      let alreadyExist = false;
      const items = [...state.cartItems];

      if (items.length > 0) {
        items.forEach((item) => {
          if (item._id === action.product._id) {
            alreadyExist = true;
            item.count++;
          }
        });
      }

      if (!alreadyExist) {
        items.push({ ...action.product, count: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(items));
      return {
        cartItems: items,
          };
      
    case REMOVE_FROM_CART:
      const items2 = [...state.cartItems].filter(
        (item) => item._id != action.id
      );
      localStorage.setItem("cartItems", JSON.stringify(items2));
      return {
        cartItems: items2,
      };
  }

  return state;
};
