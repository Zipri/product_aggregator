import React from 'react';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import GroceryStore from "./components/common/GroceryStore/GroceryStore";
import Products from "./components/Products/Products";
import ShoppingBasket from "./components/ShoppingBasket/ShoppingBasket";
import Notes from "./components/Notes/Notes";

import './App.css';
import FavoriteProducts from "./components/FavoriteProducts/FavoriteProducts";


const App = (props) => {
    return <div className="appWrapper">
        <Header/>
        <Navbar/>
        <div className="contentWrapper" id="element">
            <Routes>
                <Route path='/marketA'
                       element={<GroceryStore products={props.store.getPyatorochkaProducts()}
                                              addItem={props.store.addItem.bind(props.store)}
                                              addNewFavorite={props.store.addNewFavorite.bind(props.store)}/>}/>
                <Route path='/marketB'
                       element={<GroceryStore products={props.store.getPerekrostokProducts()}
                                              addItem={props.store.addItem.bind(props.store)}
                                              addNewFavorite={props.store.addNewFavorite.bind(props.store)}/>}/>
                <Route path='/products'
                       element={<GroceryStore products={props.store.getProducts()}
                                              addItem={props.store.addItem.bind(props.store)}
                                              addNewFavorite={props.store.addNewFavorite.bind(props.store)}/>}/>
                <Route path='/shoppingBasket'
                       element={<ShoppingBasket items={props.store.getShoppingBasket()}
                                                deleteItem={props.store.deleteItem.bind(props.store)}/>}/>
                <Route path='/favoriteProducts'
                       element={<FavoriteProducts favorites={props.store.getFavoriteProducts()}/>}/>
                <Route path='/notes'
                       element={<Notes notes={props.store.getNotes()}
                                       dispatch={props.store.dispatch.bind(props.store)}/>}/>
            </Routes>
        </div>
    </div>
}
//TODO добавить отображение в навбар при доавление в корзины или фавориты
//TODO разобраться с инпуом для поиска
//TODO сортировка для таблицы
export default App;