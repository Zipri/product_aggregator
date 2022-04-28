import React, {useContext} from "react";

import GroceryStore from "./GroceryStore";
import {Context} from "../../../firebase/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../Preloader/Preloader";


const GroceryStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [favorites, loadingF] = useCollectionData(
        firestore.collection('favorites').where('uid', '==', props.user.uid)
    )
    const [basketItems, loadingB] = useCollectionData(
        firestore.collection('basketitems').where('uid', '==', props.user.uid)
    )
    const [vkusville, loadingV] = useCollectionData(
        firestore.collection('vkusville')
    )
    const [perekrostok, loadingP] = useCollectionData(
        firestore.collection('perekrostok')
    )

    const addToFavorite = (article, market, category, title, price) => {
        const docId = props.user.uid+article
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
        const docId = props.user.uid+article
        firestore.collection('favorites').doc(docId).delete()
    }

    const addToBasket = (article, market, category, title, price, image) => {
        const docId = props.user.uid+article
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
        const docId = props.user.uid+article
        firestore.collection('basketitems').doc(docId).delete()
    }

    const products = () => {
        switch (props.market) {
            case "mA":
                return vkusville
            case "mB":
                return perekrostok
            case "all":
                return [...vkusville, ...perekrostok]
        }
    }


    return loadingV || loadingP || loadingF || loadingB
        ? <Preloader/>
        : <GroceryStore products={products()}
                        favorites={favorites.map(item => item.article)}
                        addNewFavorite={addToFavorite}
                        deleteFavorite={deleteFromFavorite}
                        basketItems={basketItems.map(item => item.article)}
                        addToBasket={addToBasket}
                        deleteFromBasket={deleteFromBasket}/>
};

export default GroceryStoreContainer;
