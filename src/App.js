import React from 'react';
import {Routes, Route, BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Pyatorochka from "./components/Pyatorochka/Pyatorochka";
import Perekrostok from "./components/Perekrostok/Perekrostok";
import Notes from "./components/Notes/Notes";
import Products from "./components/Products/Products";

import './App.css';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="appWrapper">
                <Header/>
                <Navbar/>
                <div className="contentWrapper">
                    <Routes>
                        <Route path='/pyatorochka-items' element={<Pyatorochka/>}/>
                        <Route path='/perekrostok-items' element={<Perekrostok/>}/>
                        <Route path='/products' element={
                            <Products products={props.store.getProducts()}
                                      perekrostokProducts={props.store.getPerekrostokProducts()}
                                      pyatorochkaProducts={props.store.getPyatorochkaProducts()}/>}/>
                        <Route path='/notes' element={<Notes/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
