import { FETCH_PRODUCTS, SORT_PRODUCTS_PRICE, FILTER_PRODUCTS_COMPANY } from "../types";

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




