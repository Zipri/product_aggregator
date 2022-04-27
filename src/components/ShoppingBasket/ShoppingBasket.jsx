import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";

import s from "../ShoppingBasket/ShoppnigBasket.module.css"

const Basket = (props) => {
    let commonPrice = 0;
    return <div>
        {props.items.map(item => {
            commonPrice += item.item.price
            return <ProductItem name={item.item.name}
                                market={item.item.market}
                                price={item.item.price}
                                number={item.item.number}
                                picture={item.item.picture}
                                productId={item.id}
                                deleteItem={props.deleteItem}
                                flagBasket={true}/>
        })}
        {props.items.length
            ? <div>Итоговая сумма: {commonPrice} ₽</div>
            : <div>Вы ещё не добавили товаров в корзину</div>}
    </div>
}

const BasketA = (props) => {
    let commonPrice = 0;
    return <div>
        {props.products.map(product =>
            props.items.map(item => {
                    if (item.item.name === product.name) {
                        commonPrice += product.price
                        return <ProductItem name={product.name}
                                            market={product.market}
                                            price={product.price}
                                            number={product.number}
                                            picture={product.picture}
                                            deleteItem={props.deleteItem}
                                            flagBasket={true}/>
                    }
                }
            )
        )}
        {props.items.length
            ? <div>Итоговая сумма: {commonPrice} ₽</div>
            : <div>Вы ещё не добавили товаров в корзину</div>}
    </div>
}
//TODO сделай в одну компоненту :)

const ShoppingBasket = (props) => {
    return <div className={s.shoppingBasket}>
        <div className={s.userBasket}>
            <div>
                <h1>Ваша корзина:</h1>
                <Basket items={props.items}/>
            </div>
            <div className={s.dividerV}/>
        </div>
        <div>
            <h1>Пятёрочка:</h1>
            <BasketA items={props.items}
                     products={props.productsA}/>
            <div className={s.dividerH}/>
            <h1>Перекрёсток:</h1>
            <BasketA items={props.items}
                     products={props.productsB}/>
        </div>
    </div>
}

export default ShoppingBasket;