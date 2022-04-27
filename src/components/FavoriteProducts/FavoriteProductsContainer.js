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


    if (!props.user) return <Navigate to="/login"/>
    if (loading) return <Preloader/>
    return <FavoriteProducts favorites={favorites}/>
};

export default FavoriteProductsContainer;
