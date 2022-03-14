import React from "react";
import {connect} from "react-redux";

import ShoppingBasket from "./ShoppingBasket";

const ShoppingBasketContainer = (props) => {
    const personalBasket = props.products
    const productsA = () => personalBasket.filter(product => product.market === "Пятёрочка")
    const productsB = () => personalBasket.filter(product => product.market === "Перекрёсток")

    return <ShoppingBasket items={props.shoppingBasket}
                           productsA={productsA()}
                           productsB={productsB()}/>
};

let mapStateToProps = (state) => ({
    products: state.products.products,
    shoppingBasket: state.shoppingBasketPage.shoppingBasket,
});


export default connect(mapStateToProps, {})(ShoppingBasketContainer);
