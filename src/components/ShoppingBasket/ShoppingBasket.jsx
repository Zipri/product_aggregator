import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";

const ShoppingBasket = (props) => {
    let commonPrice = 0;
    return <div>
        {props.items.map(item => {
            commonPrice += item.price
            return <ProductItem name={item.name}
                                price={item.price}
                                number={item.number}
                                picture={item.picture}/>
        })}
        <div>
            Common price: {commonPrice} ₽
        </div>
    </div>
}

export default ShoppingBasket;