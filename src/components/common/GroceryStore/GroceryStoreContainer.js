import React from "react";
import {connect} from "react-redux";

import GroceryStore from "./GroceryStore";
import {addNewItem} from "../../../redux/shoppingBasket-reducer";
import {addFavorite} from "../../../redux/product-reducer";

const GroceryStoreContainer = (props) => {
    const personalProducts = props.products
    const products = () => {
        //TODO перенести в BLL
        switch (props.market) {
            case "mA":
                return personalProducts.filter(product => product.market === "Перекрёсток")
            case "mB":
                return personalProducts.filter(product => product.market === "Пятёрочка")
            case "all":
                return personalProducts
        }
    }
    return <GroceryStore products={products()}
                         addItem={props.addNewItem}
                         addNewFavorite={props.addFavorite}/>
};

let mapStateToProps = (state) => ({
    products: state.products.products,
});


export default connect(mapStateToProps, {addNewItem, addFavorite})(GroceryStoreContainer);
