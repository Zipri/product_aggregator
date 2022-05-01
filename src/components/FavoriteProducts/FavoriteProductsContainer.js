import React, {useContext} from "react";
import {Navigate} from "react-router-dom";
import {useCollectionData} from "react-firebase-hooks/firestore";

import FavoriteProducts from "./FavoriteProducts";
import Preloader from "../common/Preloader/Preloader";
import {Context} from "../../firebase/firebase";

const FavoriteProductsContainer = (props) => {
    const {firebaseApp, auth, firestore} = useContext(Context)
    const [favorites, loading] = useCollectionData(
        firestore.collection('favorites').where('uid', '==', props.user.uid)
    )
    const deleteFromFavorite = (article) => {
        const docId = props.user.uid+article
        firestore.collection('favorites').doc(docId).delete()
    }

    if (!props.user) return <Navigate to="/login"/>
    if (loading) return <Preloader/>
    return <FavoriteProducts favorites={favorites}
                             deleteFromFavorite={deleteFromFavorite}/>
};

export default FavoriteProductsContainer;
