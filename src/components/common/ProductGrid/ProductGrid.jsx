import React from 'react';
import s from './ProductGrid.module.css';
import {addNewItem} from "../../../redux/shoppingBasket-reducer";

const StringInfo = (props) => <div className={s.stringInfo}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
    {props.items && <div className={s.description}>items</div>}
</div>

const ProductCell = (props) => {
    const addItem = () => props.dispatch(addNewItem({
        name: props.name,
        price: props.price,
        number: props.number,
        picture: props.picture
    }))
    return <div className={s.productCell}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <StringInfo description="Product:" name={props.name} price={false} items={false}/>
            <StringInfo description="Price:" name={props.price} price={true} items={false}/>
            <StringInfo description="Number:" name={props.number} price={false} items={true}/>
        </div>
        <button onClick={addItem}>Add to basket</button>
        {/*    TODO где-то ошибка с добавлением товара в корзину*/}
    </div>
}

const ProductGrid = (props) => {
    const productColumns = props.products.map(product =>
        <ProductCell name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}
                     // addItem={props.addItem}
                     dispatch={props.dispatch}/>)
    const columns = props.columns;
    const rowsNumber = Math.ceil(productColumns.length / columns)
    const productRows = [...Array(rowsNumber)]
        .map((item, number) => productColumns.slice(number * columns, (number + 1) * columns))

    return <div className={s.productGrid}>
        {productRows.map(row => <div className={s.productRow}>
            {row.map(cell => cell)}
        </div>)}
    </div>
}

export default ProductGrid