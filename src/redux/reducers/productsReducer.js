import {
  FETCH_PRODUCTS,
  SORT_PRODUCTS_PRICE,
  FILTER_PRODUCTS_COMPANY,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  ADD_TO_COMPARE,
  REMOVE_FROM_COMPARE
} from "../types";

export const productsReducer = (state = {favouritesProducts:  JSON.parse(localStorage.getItem("favouritesProducts") || "[]"),
compareProducts:  JSON.parse(localStorage.getItem("compareProducts") || "[]")}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
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

      case ADD_TO_FAVOURITE: 

      let alreadyExist = false;
      const items = [...state.favouritesProducts];

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


      localStorage.setItem("favouritesProducts", JSON.stringify(items)); 
      return {
        ...state, 
        favouritesProducts: items,
      };

      case REMOVE_FROM_FAVOURITE: 
      const items2 = [...state.favouritesProducts].filter(
        (item) => item._id !== action.id
      );
      

      localStorage.setItem("favouritesProducts", JSON.stringify(items2));

      return {
        ...state, 
        favouritesProducts: items2
      };

      case ADD_TO_COMPARE: 
      let alreadyExistCompare = false;
      const compareItems = [...state.compareProducts];

      if (compareItems.length > 0) {
        compareItems.forEach((item) => {
          if (item._id === action.product._id) {
            alreadyExistCompare = true;
            item.count++;
          }
        });
      }

      if (!alreadyExistCompare) {
        compareItems.push({ ...action.product, count: 1 });
      }


      localStorage.setItem("compareProducts", JSON.stringify(compareItems)); 

      return {
        ...state, 
        compareProducts: compareItems
      };

      case REMOVE_FROM_COMPARE: 

      const compareProducts = [...state.compareProducts].filter(
        (item) => item._id !== action.id
      );
      

      localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
      return {
        ...state, 
        compareProducts: compareProducts
      };

      

    default:
      return state;
  }
};
