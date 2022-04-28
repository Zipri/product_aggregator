import React from 'react';
import {Button, Tooltip} from "antd";
import Search from "antd/es/input/Search";
import s from './ProductGrid.module.css';
import getCategoryImage from "../categoryPictures/getCategoryImage";

const StringInfo = (props) => <div className={props.title ? s.info : s.stringInfo}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
</div>

const ProductCell = (props) => {
    const addNewFavorite = () => props.addNewFavorite(
        props.id,
        props.market,
        props.category,
        props.name,
        props.price
    )
    const addToBasket = () => props.addToBasket(
        props.id,
        props.market,
        props.category,
        props.name,
        props.price,
        getCategoryImage(props.category)
    )

    return <div className={s.productCell}>
        <img className={s.image} src={getCategoryImage(props.category)}/>
        <div className={s.info}>
            <div className={s.title}>
                {props.name.length < 42
                    ? <StringInfo description="Название:" name={props.name} title={true}/>
                    : <Tooltip title={props.name}>
                        <div><StringInfo description="Название:"
                                         name={props.name.substring(0, 41) + "..."} title={true}/></div>
                    </Tooltip>
                }
            </div>
            <StringInfo description="Цена:" name={props.price} price={true}/>
            <StringInfo description="Магазин:" name={props.market}/>
        </div>
        {props.basketItems.includes(props.id)
            ? <Button danger
                      className={s.addButton}
                      onClick={() => props.deleteFromBasket(props.id)}>Удалить из корзины</Button>
            : <Button type="primary"
                      className={s.addButton}
                      onClick={addToBasket}>Добавить в корзину</Button>}
        {props.favorites.includes(props.id)
            ? <Button danger
                      className={s.addButton}
                      onClick={() => props.deleteFavorite(props.id)}>Удалить из избраного</Button>
            : <Button className={s.addButton}
                      onClick={addNewFavorite}>Добавить в избраное</Button>}
    </div>
}

const ProductGrid = (props) => {
    const productColumns = props.products.map(product =>
        <ProductCell id={product.Article}
                     name={product.Title}
                     price={product.Price}
                     picture={product.Image}
                     category={product.Category}
                     market={product.Description || product.Composition
                         ? "ВкусВилл"
                         : "Перекрёсток"
                     }
                     favorites={props.favorites}
                     deleteFavorite={props.deleteFavorite}
                     addNewFavorite={props.addNewFavorite}
                     basketItems={props.basketItems}
                     addToBasket={props.addToBasket}
                     deleteFromBasket={props.deleteFromBasket}/>)

    const columns = props.columns;
    const rowsNumber = Math.ceil(productColumns.length / columns)
    const productRows = [...Array(rowsNumber)]
        .map((item, number) => productColumns.slice(number * columns, (number + 1) * columns))

    return <div className={s.productGrid}>
        <div className={s.searchForm}>
            <Search placeholder="Поиск по названию"
                    onSearch={props.findByName}
                    className={s.search}
                    enterButton/>
            <button className={s.searchButton}
                    onClick={props.clear}>✖
            </button>
        </div>
        {productRows.map(row => <div className={s.productRow}>
            {row.map(cell => cell)}
        </div>)}
    </div>
}

export default ProductGrid