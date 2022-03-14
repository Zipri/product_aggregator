import {combineReducers, compose, createStore} from "redux";

import shoppingBasketReducer from "./shoppingBasket-reducer";
import productReducer from "./product-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers({
    products: productReducer,
    shoppingBasketPage: shoppingBasketReducer,
    auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;