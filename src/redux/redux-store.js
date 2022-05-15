import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import shoppingBasketReducer from "./shoppingBasket-reducer";
import groceryReducer from "./grocery-reducer";
import favoritesReducer from "./favorites-reducer";


let reducers = combineReducers({
    groceryPage: groceryReducer,
    shoppingBasketPage: shoppingBasketReducer,
    favoritesItems: favoritesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store

export default store;