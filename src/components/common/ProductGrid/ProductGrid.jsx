import React from 'react';
import {Button} from "antd";
import Search from "antd/es/input/Search";
import s from './ProductGrid.module.css';

const StringInfo = (props) => <div className={s.stringInfo}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
</div>

const ProductCell = (props) => {
    const addItem = () => props.addItem({
        name: props.name,
        price: props.price,
        number: props.number,
        picture: props.picture,
        market: props.market
    })
    const addFavorite = () => props.addNewFavorite({
        name: props.name,
        price: props.price,
        number: props.number,
        category: props.category,
        market: props.market
    })
    return <div className={s.productCell}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <StringInfo description="Название:" name={props.name} price={false}/>
            <StringInfo description="Цена:" name={props.price} price={true}/>
            <StringInfo description="Магазин:" name={props.market} price={false}/>
        </div>
        <Button type="primary"
                className={s.addButton}
                onClick={addItem}>Добавить в корзину</Button>
        <Button className={s.addButton}
                onClick={addFavorite}>Добавить в избраное</Button>
    </div>
}

const ProductGrid = (props) => {

    const productColumns = props.products.map(product =>
        <ProductCell name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}
                     category={product.category}
                     market={product.market}
                     addItem={props.addItem}
                     addNewFavorite={props.addNewFavorite}/>)
    const columns = props.columns;
    const rowsNumber = Math.ceil(productColumns.length / columns)
    const productRows = [...Array(rowsNumber)]
        .map((item, number) => productColumns.slice(number * columns, (number + 1) * columns))

    return <div className={s.productGrid}>
        <Search placeholder="Поиск по названию"
                onSearch={props.findByName}
                className={s.search}
                enterButton/>
        {productRows.map(row => <div className={s.productRow}>
            {row.map(cell => cell)}
        </div>)}
    </div>
}

export default ProductGrid