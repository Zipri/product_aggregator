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
import {Context} from "./firebase/firebase";
import NotesContainer from "./components/Notes/NotesContainer";
import Preloader from "./components/common/Preloader/Preloader";

import './App.css';


const App = () => {
    const {auth} = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <Preloader/>
    return <div className="appWrapper">
        <Header user={user}/>
        <Navbar user={user}/>
        <div className="contentWrapper" id="element">
            <Routes>
                <Route path='/'
                       element={<Home/>}/>
                <Route path='/login'
                       element={<LoginForm/>}/>
                <Route path='/registration'
                       element={<RegistrationForm/>}/>
                <Route path='/marketA'
                       element={<GroceryStoreContainer market="mA" user={user}/>}/>
                <Route path='/marketB'
                       element={<GroceryStoreContainer market="mB" user={user}/>}/>
                <Route path='/products'
                       element={<GroceryStoreContainer market="all" user={user}/>}/>
                <Route path='/shoppingBasket'
                       element={<ShoppingBasketContainer user={user}/>}/>
                <Route path='/favoriteProducts'
                       element={<FavoriteProductsContainer user={user}/>}/>
                <Route path='/notes'
                       element={<NotesContainer loading={loading} user={user}/>}/>
            </Routes>
        </div>
    </div>
};

export default App;