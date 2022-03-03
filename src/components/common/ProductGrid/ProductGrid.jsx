import React from 'react';
import s from './ProductGrid.module.css';
import {addNewItem} from "../../../redux/shoppingBasket-reducer";
import {Button} from "antd";

const StringInfo = (props) => <div className={s.stringInfo}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
    {props.items && <div className={s.description}>штук</div>}
</div>

const ProductCell = (props) => {
    const addItem = () => props.addItem({
        name: props.name,
        price: props.price,
        number: props.number,
        picture: props.picture
    })
    return <div className={s.productCell}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <StringInfo description="Название:" name={props.name} price={false} items={false}/>
            <StringInfo description="Цена:" name={props.price} price={true} items={false}/>
            <StringInfo description="Количество:" name={props.number} price={false} items={true}/>
        </div>
        <Button type="primary" onClick={addItem}>Добавить в корзину</Button>
    </div>
}

const ProductGrid = (props) => {
    const productColumns = props.products.map(product =>
        <ProductCell name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}
                     //dispatch={props.dispatch}
                     addItem={props.addItem}/>)
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