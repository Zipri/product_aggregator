import React, {useContext} from "react";

import ShoppingBasket from "./ShoppingBasket";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Context} from "../../firebase/firebase";
import Preloader from "../common/Preloader/Preloader";

const ShoppingBasketContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [basketItems, loadingB] = useCollectionData(
        firestore.collection('basketitems').where('uid', '==', props.user.uid)
    )
    const [vkusville, loadingV] = useCollectionData(
        firestore.collection('vkusville')
    )
    const [perekrostok, loadingP] = useCollectionData(
        firestore.collection('perekrostok')
    )
    const deleteFromBasket = (article) => {
        const docId = props.user.uid+article
        firestore.collection('basketitems').doc(docId).delete()
    }

    return loadingB || loadingV || loadingP
        ? <Preloader/>
        : <ShoppingBasket items={basketItems}
                          deleteFromBasket={deleteFromBasket}
                          productsA={vkusville}
                          productsB={perekrostok}/>
};

export default ShoppingBasketContainer;
