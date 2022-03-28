import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import thunk from "redux-thunk";

import {getFirebase} from "react-redux-firebase";
import {getFirestore} from "redux-firestore";

import shoppingBasketReducer from "./shoppingBasket-reducer";
import productReducer from "./product-reducer";
import noteReducer from "./note-reducer";


let reducers = combineReducers({
    products: productReducer,
    shoppingBasketPage: shoppingBasketReducer,
    notes: noteReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;