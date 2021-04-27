import { FETCH_PRODUCTS } from "../types";

export const fetchProducts = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});
