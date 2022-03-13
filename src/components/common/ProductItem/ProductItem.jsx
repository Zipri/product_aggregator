import React from 'react';
import {Button} from "antd";
import s from './ProductItem.module.css';

const Label = (props) => <div className={s.label}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
</div>

const ProductItem = (props) => {
    const deleteThisItem = () => {
        props.deleteItem(props.productId)}
    const changeFindName = () => {
        props.setFindInputName(props.name)
    }
    const changeFindCategory = () => {
        props.setFindInputCategory(props.category)
    }
    debugger
    return <div className={s.item}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <Label description="Название:" name={props.name} price={false}/>
            <Label description="Цена:" name={props.price} price={true}/>
            <Label description="Магазин:" name={props.market} price={false}/>
        </div>
        {props.flagBasket && <Button type="primary" onClick={deleteThisItem}>x</Button>}
        <div className={s.findButtons}>
            {props.flagList && <Button type="primary"
                                       onClick={changeFindName}>
                Поиск по названию
            </Button>}
            {props.flagList && <Button type="primary"
                                       onClick={changeFindCategory}>
                Поиск по категории
            </Button>}
        </div>
    </div>
}

export default ProductItem;