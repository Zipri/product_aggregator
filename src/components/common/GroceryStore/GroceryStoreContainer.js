import React, {useContext} from "react";
import {connect} from "react-redux";

import GroceryStore from "./GroceryStore";
import {addNewItem} from "../../../redux/shoppingBasket-reducer";
import {addFavorite} from "../../../redux/product-reducer";
import {Context} from "../../../firebase/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../Preloader/Preloader";
import {useAuthState} from "react-firebase-hooks/auth";

const GroceryStoreContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [favorites, loading] = useCollectionData(
        firestore.collection('favorites').where('uid', '==', props.user.uid)
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


    return loadingV || loadingP || loading
        ? <Preloader/>
        : <GroceryStore products={products()}
                        favorites={favorites.map(item => item.article)}
                        addItem={props.addNewItem}
                        addNewFavorite={addToFavorite}
                        deleteFavorite={deleteFromFavorite}/>
};

let mapStateToProps = (state) => ({
    products: state.products.products,
});


export default connect(mapStateToProps, {addNewItem, addFavorite})(GroceryStoreContainer);
