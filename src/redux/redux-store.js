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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore}))));

export default store;