import React, {useContext} from "react";

import ShoppingBasket from "./ShoppingBasket";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../firebase/firebase";
import Preloader from "../common/Preloader/Preloader";
import {connect} from "react-redux";
import {deleteFromShoppingBasket, getShoppingBasket} from "../../redux/shoppingBasket-reducer";

const ShoppingBasketContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)

    const [vkusville, loadingV] = useCollectionData(
        firestore.collection('vkusville').limit(10)
    )
    const [perekrostok, loadingP] = useCollectionData(
        firestore.collection('perekrostok').limit(10)
    )

    return loadingV || loadingP
        ? <Preloader/>
        : <ShoppingBasket items={props.shoppingBasket}
                          getItems={props.getShoppingBasket}
                          deleteFromBasket={props.deleteFromShoppingBasket}
                          productsA={vkusville}
                          productsB={perekrostok}/>
};

let mapStateToProps = (state) => ({
    shoppingBasket: state.shoppingBasketPage.shoppingBasket,
    loading: state.groceryPage.loading,
});

export default connect(mapStateToProps, {
    getShoppingBasket,
    deleteFromShoppingBasket
})(ShoppingBasketContainer);
