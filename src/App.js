import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";

import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Login/RegistrationForm";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import GroceryStoreContainer from "./components/common/GroceryStore/GroceryStoreContainer";
import ShoppingBasketContainer from "./components/ShoppingBasket/ShoppingBasketContainer";
import FavoriteProductsContainer from "./components/FavoriteProducts/FavoriteProductsContainer";
import Notes from "./components/Notes/Notes";
import {Context} from "./firebase/firebase";

import './App.css';
import NotesContainer from "./components/Notes/NotesContainer";


const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    return <div className="appWrapper">
        <Header user={user}/>
        <Navbar/>
        <div className="contentWrapper" id="element">
            <Routes>
                <Route path='/'
                       element={<Home/>}/>
                <Route path='/login'
                       element={<LoginForm/>}/>
                <Route path='/registration'
                       element={<RegistrationForm/>}/>
                <Route path='/marketA'
                       element={<GroceryStoreContainer market="mA"/>}/>
                <Route path='/marketB'
                       element={<GroceryStoreContainer market="mB"/>}/>
                <Route path='/products'
                       element={<GroceryStoreContainer market="all"/>}/>
                <Route path='/shoppingBasket'
                       element={<ShoppingBasketContainer/>}/>
                <Route path='/favoriteProducts'
                       element={<FavoriteProductsContainer loading={loading} user={user}/>}/>
                <Route path='/notes'
                       element={<NotesContainer loading={loading} user={user}/>}/>
            </Routes>
        </div>
    </div>
};

//TODO добавить отображение в навбар при доавление в корзины или фавориты
//TODO filter для таблицы
export default App;