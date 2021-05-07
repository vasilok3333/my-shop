import {
  FETCH_PRODUCTS,
  SORT_PRODUCTS_PRICE,
  FILTER_PRODUCTS_COMPANY,
  ADD_TO_COMPARE,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  REMOVE_FROM_COMPARE,
} from "../types";

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
});

export const addToFavourite = (product) => ({
  type: ADD_TO_FAVOURITE,
  product,
});

export const removeFromFavourite = (id) => ({
  type: REMOVE_FROM_FAVOURITE,
  id,
});

export const removeFromCompare = (id) => ({
  type: REMOVE_FROM_COMPARE,
  id,
});

export const addToCompare = (product) => ({
  type: ADD_TO_COMPARE,
  product,
});
