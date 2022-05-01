import React, {useContext, useEffect, useState} from "react";
import { getDocs } from "firebase/firestore";

import GroceryStore from "./GroceryStore";
import {Context} from "../../../firebase/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../Preloader/Preloader";

const AStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [vkusville, loadingV] = useCollectionData(
        firestore.collection('vkusville').orderBy("Article").startAt("23384").limit(3)
    )
    const [loading, setLoading] = useState(false)

    const getMore = async (article) => {
        setLoading(true)
        await firestore.collection('vkusville').orderBy("Article").startAfter(article).limit(3).get().then(
            querySnap => querySnap.docs.map(item => vkusville.push(item.data()))
        )
        setLoading(false)
    }

    return loadingV || loading
        ? <Preloader/>
        : <GroceryStore products={vkusville}
                        favorites={props.favorites.map(item => item.article)}
                        addNewFavorite={props.addToFavorite}
                        deleteFavorite={props.deleteFromFavorite}
                        basketItems={props.basketItems.map(item => item.article)}
                        addToBasket={props.addToBasket}
                        deleteFromBasket={props.deleteFromBasket}
                        isAll={props.isAll}
                        getMore={getMore}/>
}

const BStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [perekrostok, loadingP] = useCollectionData(
        firestore.collection('perekrostok').limit(2)
    )

    return loadingP
        ? <Preloader/>
        : <GroceryStore products={perekrostok}
                        favorites={props.favorites.map(item => item.article)}
                        addNewFavorite={props.addToFavorite}
                        deleteFavorite={props.deleteFromFavorite}
                        basketItems={props.basketItems.map(item => item.article)}
                        addToBasket={props.addToBasket}
                        deleteFromBasket={props.deleteFromBasket}
                        isAll={props.isAll}/>
}

const AllStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [vkusville, loadingV] = useCollectionData(
        firestore.collection('vkusville').limit(2)
    )
    const [perekrostok, loadingP] = useCollectionData(
        firestore.collection('perekrostok').limit(2)
    )

    return loadingP || loadingV
        ? <Preloader/>
        : <GroceryStore products={[...vkusville, ...perekrostok]}
                        favorites={props.favorites.map(item => item.article)}
                        addNewFavorite={props.addToFavorite}
                        deleteFavorite={props.deleteFromFavorite}
                        basketItems={props.basketItems.map(item => item.article)}
                        addToBasket={props.addToBasket}
                        deleteFromBasket={props.deleteFromBasket}
                        isAll={props.isAll}/>
}

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
            return <AStoreContainer favorites={favorites.map(item => item.article)}
                                    addNewFavorite={addToFavorite}
                                    deleteFavorite={deleteFromFavorite}
                                    basketItems={basketItems.map(item => item.article)}
                                    addToBasket={addToBasket}
                                    deleteFromBasket={deleteFromBasket}
                                    isAll={isAll}/>
        case "mB":
            return <BStoreContainer favorites={favorites.map(item => item.article)}
                                    addNewFavorite={addToFavorite}
                                    deleteFavorite={deleteFromFavorite}
                                    basketItems={basketItems.map(item => item.article)}
                                    addToBasket={addToBasket}
                                    deleteFromBasket={deleteFromBasket}
                                    isAll={isAll}/>
        case "all":
            return <AllStoreContainer favorites={favorites.map(item => item.article)}
                                      addNewFavorite={addToFavorite}
                                      deleteFavorite={deleteFromFavorite}
                                      basketItems={basketItems.map(item => item.article)}
                                      addToBasket={addToBasket}
                                      deleteFromBasket={deleteFromBasket}
                                      isAll={isAll}/>
    }
};

export default GroceryStoreContainer;
