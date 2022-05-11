import React, {useContext, useEffect, useState} from "react";

import GroceryStore from "./GroceryStore";
import {Context} from "../../../firebase/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {
    clearAll,
    clearP, clearV,
    getAllData, getMoreAllData,
    getMorePerekrostokData, getMoreVkusvillData, getOrderAllData, getOrderPerekrostokData, getOrderVkusvillData,
    getPerekrostokData,
    getVkussvillData,
    getVkusvillData, setOrderAll, setOrderP, setOrderV
} from "../../../redux/grocery-reducer";
import {addToShoppingBasket, deleteFromShoppingBasket, getShoppingBasket} from "../../../redux/shoppingBasket-reducer";


const GroceryStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [favorites, loadingF] = useCollectionData(
        firestore.collection('favorites').where('uid', '==', props.user.uid)
    )
    const [basketItems, loadingB] = useCollectionData(
        firestore.collection('basketitems').where('uid', '==', props.user.uid)
    )
    const addToFavorite = (article, market, category, title, price) => {
        const docId = props.user.uid + article
        firestore.collection('favorites').doc(docId).set({
            uid: props.user.uid,
            article: article,
            market: market,
            category: category,
            title: title,
            price: price,
        })
    }
    const deleteFromFavorite = (article) => {
        const docId = props.user.uid + article
        firestore.collection('favorites').doc(docId).delete()
    }
    const addToBasket = (article, market, category, title, price, image) => {
        const docId = props.user.uid + article
        firestore.collection('basketitems').doc(docId).set({
            uid: props.user.uid,
            article: article,
            market: market,
            category: category,
            title: title,
            price: price,
            image: image
        })
    }
    const deleteFromBasket = (article) => {
        const docId = props.user.uid + article
        firestore.collection('basketitems').doc(docId).delete()
    }

    const isAll = props.market === "all"
    if (loadingF || loadingB) return <Preloader/>
    switch (props.market) {
        case "mA":
            return <GroceryStore products={props.vkusvill}
                                 getFirst={props.getVkusvillData}
                                 getMore={props.getMoreVkusvillData}

                                 favorites={favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={basketItems.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderV}
                                 getOrder={props.getOrderVkusvillData}

                                 last={props.lastVkusvill}
                                 loading={props.loading}
                                 isAll={isAll}/>
        case "mB":
            return <GroceryStore products={props.perekrostok}
                                 getFirst={props.getPerekrostokData}
                                 getMore={props.getMorePerekrostokData}

                                 favorites={favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={basketItems.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderP}
                                 getOrder={props.getOrderPerekrostokData}

                                 last={props.lastPerekrostok}
                                 loading={props.loading}
                                 isAll={isAll}/>
        case "all":
            return <GroceryStore products={props.all}
                                 getFirst={props.getAllData}
                                 getMore={props.getMoreAllData}

                                 favorites={favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={basketItems.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderAll}
                                 getOrder={props.getOrderAllData}

                                 lastV={props.lastAllV}
                                 lastP={props.lastAllP}
                                 isAll={isAll}/>
    }
};

let mapStateToProps = (state) => ({
    perekrostok: state.groceryPage.perekrostok,
    lastPerekrostok: state.groceryPage.lastPerekrostok,

    vkusvill: state.groceryPage.vkusvill,
    lastVkusvill: state.groceryPage.lastVkusvill,

    all: state.groceryPage.all,
    lastAllV: state.groceryPage.lastAllV,
    lastAllP: state.groceryPage.lastAllP,

    orderP: state.groceryPage.orderP,
    orderV: state.groceryPage.orderV,
    orderAll: state.groceryPage.orderAll,

    shoppingBasket: state.shoppingBasketPage.shoppingBasket,

    loading: state.groceryPage.loading,
});

export default connect(mapStateToProps, {
    getPerekrostokData,
    getMorePerekrostokData,
    getOrderPerekrostokData,

    getVkusvillData,
    getMoreVkusvillData,
    getOrderVkusvillData,

    getAllData,
    getMoreAllData,
    getOrderAllData,

    getShoppingBasket,
    addToShoppingBasket,
    deleteFromShoppingBasket,
})(GroceryStoreContainer);
