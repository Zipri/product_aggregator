import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";

const ShoppingBasket = (props) => {
    return <div>
        {props.items.map(item => <ProductItem name={item.item.name}
                                              price={item.item.price}
                                              number={item.item.number}
                                              picture={item.item.picture}/>)}
    </div>
}

export default ShoppingBasket;