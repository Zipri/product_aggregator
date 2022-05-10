import React, {useEffect} from 'react';
import ProductItem from "../common/ProductItem/ProductItem";

import s from "../ShoppingBasket/ShoppnigBasket.module.css"
import getCategoryImage from "../common/categoryPictures/getCategoryImage";

const MyBasket = (props) => {
    let commonPrice = 0;
    return <div>
        {props.items.map(item => {
            commonPrice += Number(item.price)
            return <ProductItem name={item.title}
                                price={item.price}
                                picture={item.image}
                                market={item.market}
                                productId={item.article}
                                deleteFromBasket={props.deleteFromBasket}/>
        })}
        {props.items.length
            ? <div>Итоговая сумма: {Math.ceil(commonPrice)} ₽</div>
            : <div>Вы ещё не добавили товаров в корзину</div>}
    </div>
}

const BasketStore = (props) => {
    let commonPrice = 0;
    return <div>
        {props.products.map(product =>
            props.items.map(item => {
                    if (item.title === product.Title) {
                        commonPrice += Number(product.Price)
                        return <ProductItem name={product.Title}
                                            market={product.Market}
                                            price={product.Price}
                                            picture={getCategoryImage(product.Category)}/>
                    }
                }
            )
        )}
        {props.items.length
            ? <div>Итоговая сумма: {Math.ceil(commonPrice)} ₽</div>
            : <div>Вы ещё не добавили товаров в корзину</div>}
    </div>
}

const ShoppingBasket = (props) => {
    useEffect(() => {props.getItems()}, [])

    return <div className={s.shoppingBasket}>
        <div className={s.userBasket}>
            <div>
                <h1>Ваша корзина:</h1>
                <MyBasket items={props.items}
                          deleteFromBasket={props.deleteFromBasket}/>
            </div>
            <div className={s.dividerV}/>
        </div>
        <div>
            <h1>ВкусВилл:</h1>
            <BasketStore items={props.items}
                         products={props.productsA}/>
            <div className={s.dividerH}/>
            <h1>Перекрёсток:</h1>
            <BasketStore items={props.items}
                         products={props.productsB}/>
        </div>
    </div>
}

export default ShoppingBasket;