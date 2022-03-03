import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";

const ShoppingBasket = (props) => {
    let commonPrice = 0;
    return <div>
        {props.items.map(item => {
            commonPrice += item.item.price
            return <ProductItem name={item.item.name}
                                price={item.item.price}
                                number={item.item.number}
                                picture={item.item.picture}
                                productId={item.id}
                                deleteItem={props.deleteItem}
                                flag={true}/>
        })}
        <div>
            Итоговая сумма: {commonPrice} ₽
        </div>
    </div>
}

export default ShoppingBasket;