import React from 'react';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import GroceryStore from "./components/common/GroceryStore/GroceryStore";
import Products from "./components/Products/Products";
import ShoppingBasket from "./components/ShoppingBasket/ShoppingBasket";
import Notes from "./components/Notes/Notes";

import './App.css';


const App = (props) => {
    return <div className="appWrapper">
        <Header/>
        <Navbar/>
        <div className="contentWrapper">
            <Routes>
                <Route path='/marketA'
                       element={<GroceryStore products={props.store.getPyatorochkaProducts()}
                                              addItem={props.store.addItem.bind(props.store)}/>}/>
                <Route path='/marketB'
                       element={<GroceryStore products={props.store.getPerekrostokProducts()}
                                              addItem={props.store.addItem.bind(props.store)}/>}/>
                <Route path='/products'
                       element={<Products products={props.store.getProducts()}
                                          perekrostokProducts={props.store.getPerekrostokProducts()}
                                          pyatorochkaProducts={props.store.getPyatorochkaProducts()}/>}/>
                <Route path='/shoppingBasket'
                       element={<ShoppingBasket items={props.store.getShoppingBasket()}
                                                deleteItem={props.store.deleteItem.bind(props.store)}/>}/>
                <Route path='/notes'
                       element={<Notes notes={props.store.getNotes()}
                                       dispatch={props.store.dispatch.bind(props.store)}/>}/>
            </Routes>
        </div>
    </div>
}

export default App;
