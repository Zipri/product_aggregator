import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import shoppingBasketReducer from "./shoppingBasket-reducer";
import productReducer from "./product-reducer";
import noteReducer from "./note-reducer";


let reducers = combineReducers({
    products: productReducer,
    shoppingBasketPage: shoppingBasketReducer,
    notes: noteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;