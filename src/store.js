import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import { productsReducer, cartReducer, orderReducer } from "./redux/reducers/index";


const initialState = {};
/* const composeEnhancer = "window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" || compose; */

const store = createStore(
    combineReducers({
        products: productsReducer,
        cart: cartReducer,
        order: orderReducer,
    }),
    initialState,
    compose(
       (applyMiddleware(thunk))
    )
)

export default store;