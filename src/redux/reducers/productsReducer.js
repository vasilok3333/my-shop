import {
  FETCH_PRODUCTS,
  SORT_PRODUCTS_PRICE,
  FILTER_PRODUCTS_COMPANY,
} from "../types";

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        items: action.payload,
        filteredItems: action.payload,
      };

    case FILTER_PRODUCTS_COMPANY:
      return {
        ...state,
        company: action.value,
        filteredItems:
          action.value === "all"
            ? [...state.items]
            : [...state.items].filter(
                (item) =>
                  item.company
                    .toUpperCase()
                    .indexOf(action.value.toUpperCase()) >= 0
              ),
      };

      case SORT_PRODUCTS_PRICE:
         
      return {
        ...state,
        sort: action.sort,
        filteredItems: [...state.filteredItems].sort((a, b) =>
          action.sort === "lowest"
            ? a.price - b.price
            : action.sort === "highest"
            ? b.price - a.price
            : a._id - b._id
        ),
      };

    default:
      return state;
  }
};
