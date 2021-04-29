import { FETCH_PRODUCTS, SORT_PRODUCTS_PRICE, FILTER_PRODUCTS_COMPANY, ADD_TO_CART, REMOVE_FROM_CART } from "../types";

export const fetchProducts = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});

export const filterProducts = (value) => ({
  type: FILTER_PRODUCTS_COMPANY,
  value: value,
});

export const sortProducts = (value) => ({
  type: SORT_PRODUCTS_PRICE,
  sort: value,
})

export const addToCart = product => ({
  type: ADD_TO_CART,
  product,
})

export const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id,
})


