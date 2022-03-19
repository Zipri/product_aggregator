import React from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

import FavoriteProducts from "./FavoriteProducts";

const FavoriteProductsContainer = (props) => {
    const personalProducts = props.products
    const favoriteProducts = personalProducts.filter(item => item.isFavorite)

    if (!props.user) return <Navigate to="/login"/>
    return <FavoriteProducts favorites={favoriteProducts}/>
};

let mapStateToProps = (state) => ({
    products: state.products.products,
});


export default connect(mapStateToProps, {})(FavoriteProductsContainer);
