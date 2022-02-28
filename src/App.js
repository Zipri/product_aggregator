import React from 'react';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Pyatorochka from "./components/Pyatorochka/Pyatorochka";
import Perekrostok from "./components/Perekrostok/Perekrostok";
import Notes from "./components/Notes/Notes";
import Products from "./components/Products/Products";

import './App.css';


const App = (props) => {
    return <div className="appWrapper">
        <Header/>
        <Navbar/>
        <div className="contentWrapper">
            <Routes>
                <Route path='/pyatorochka-items'
                       element={<Pyatorochka pyatorochkaProducts={props.store.getPyatorochkaProducts()}/>}/>
                <Route path='/perekrostok-items'
                       element={<Perekrostok perekrostokProducts={props.store.getPerekrostokProducts()}/>}/>
                <Route path='/products'
                       element={<Products products={props.store.getProducts()}
                                          perekrostokProducts={props.store.getPerekrostokProducts()}
                                          pyatorochkaProducts={props.store.getPyatorochkaProducts()}/>}/>
                <Route path='/notes' element={<Notes/>}/>
            </Routes>
        </div>
    </div>
}

export default App;
