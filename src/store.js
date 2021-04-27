import {createStore, applyMiddleware, combineReducers, compose} from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./redux/reducers/productsReducer";

const initialState = {};
/* const composeEnhancer = "window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__" || compose; */

const store = createStore(
    combineReducers({
        products: productsReducer
    }),
    initialState,
    compose(
       (applyMiddleware(thunk))
    )
)

export default store;