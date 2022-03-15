import React from 'react';
import {Routes, Route} from "react-router-dom";
import {connect} from "react-redux";
import {getAuth, onAuthStateChanged} from "firebase/auth";

import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import RegistrationForm from "./components/Login/RegistrationForm";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import GroceryStoreContainer from "./components/common/GroceryStore/GroceryStoreContainer";
import ShoppingBasketContainer from "./components/ShoppingBasket/ShoppingBasketContainer";
import FavoriteProductsContainer from "./components/FavoriteProducts/FavoriteProductsContainer";
import Notes from "./components/Notes/Notes";

import {setUser} from "./redux/auth-reducer";

import './App.css';


class App extends React.Component {
    componentDidMount() {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                this.props.setUser({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                })
            }
        });
    }

    isAuth = () => ({
        isAuth: !!this.props.auth.email,
        email: this.props.auth.email,
        token: this.props.auth.token,
        id: this.props.auth.id,
    })

    render() {
        return <div className="appWrapper">
            <Header isAuth={this.isAuth()}/>
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
                           element={<FavoriteProductsContainer isAuth={this.isAuth()}/>}/>
                    <Route path='/notes'
                           element={<Notes isAuth={this.isAuth()}/>}/>
                </Routes>
            </div>
        </div>
    }
};

const mapStateToProps = (state) => ({
    auth: state.auth.user
})

//TODO добавить отображение в навбар при доавление в корзины или фавориты
//TODO filter для таблицы
export default connect(mapStateToProps, {setUser})(App);