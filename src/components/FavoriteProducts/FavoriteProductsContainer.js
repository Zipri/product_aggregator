import React, {useEffect} from "react";

import FavoriteProducts from "./FavoriteProducts";
import {connect} from "react-redux";
import {deleteFromFavorites, getFavorites} from "../../redux/favorites-reducer";
import Preloader from "../common/Preloader/Preloader";

const FavoriteProductsContainer = (props) => {
    useEffect(() => {
        props.getFavorites()
    }, [])

    return props.loading
        ? <Preloader/>
        : <FavoriteProducts favorites={props.favorites}
                            deleteFromFavorite={props.deleteFromFavorites}/>
};

let mapStateToProps = (state) => ({
    favorites: state.favoritesItems.favorites,
    loading: state.groceryPage.loading,
});

export default connect(mapStateToProps, {
    getFavorites,
    deleteFromFavorites
})(FavoriteProductsContainer);
