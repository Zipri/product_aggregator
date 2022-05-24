import React from 'react';
import {Button, Tooltip} from "antd";
import Search from "antd/es/input/Search";
import s from './ProductGrid.module.css';
import getCategoryImage from "../categoryPictures/getCategoryImage";

const StringInfo = (props) => <div>
    {props.price
        ? <div className={s.stringInfo}>
            <div className={s.price}>{props.name}</div>
            <div className={s.description}>₽</div>
        </div>
        : <div className={s.name}>{props.name}</div>}
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
                {props.name.length < 37
                    ? <StringInfo name={props.name} title={true}/>
                    : <Tooltip title={props.name}>
                        <div><StringInfo name={props.name.substring(0, 36) + "..."} title={true}/></div>
                    </Tooltip>
                }
            </div>
            <StringInfo name={props.price} price={true}/>
            {props.isAll && <StringInfo description="Магазин:" name={props.market}/>}
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
                     deleteFromBasket={props.deleteFromBasket}

                     isAll={props.isAll}/>)

    const columns = props.columns;
    const rowsNumber = Math.ceil(productColumns.length / columns)
    const productRows = [...Array(rowsNumber)]
        .map((item, number) => productColumns.slice(number * columns, (number + 1) * columns))

    const getMore = () => {
        props.getMore()
    }

    return <div className={s.productGrid}>

        <div className={s.searchForm}>
            <Search placeholder="Поиск по названию"
                    onSearch={(value) => props.findByName(value)}
                    className={s.search}
                    enterButton/>
            <button className={s.searchButton}
                    onClick={props.clear}>✖
            </button>
        </div>

        {productRows.map(row => <div className={s.productRow}>
            {row.map(cell => cell)}
        </div>)}

        <div className={s.more}>
            <Button className={s.moreButton}
                    onClick={getMore}
                    type="primary">Больше товаров</Button>
        </div>

    </div>
}

export default ProductGrid