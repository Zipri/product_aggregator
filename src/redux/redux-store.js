import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";

import shoppingBasketReducer from "./shoppingBasket-reducer";
import noteReducer from "./note-reducer";
import groceryReducer from "./grocery-reducer";


let reducers = combineReducers({
    groceryPage: groceryReducer,
    shoppingBasketPage: shoppingBasketReducer,
    notes: noteReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;