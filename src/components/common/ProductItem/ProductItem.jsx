import React from 'react';
import {Button} from "antd";
import s from './ProductItem.module.css';

const Label = (props) => <div className={props.title ? s.title : s.label}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
</div>

const ProductItem = (props) => {
    const deleteFromBasket = () => props.deleteFromBasket(props.productId)

    return <div className={s.item}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <Label description="Название:" name={props.name} title={true}/>
            <Label description="Цена:" name={props.price} price={true}/>
            <Label description="Магазин:" name={props.market}/>
        </div>
        {props.deleteFromBasket && <Button type="primary"
                                           className={s.delButton}
                                           onClick={deleteFromBasket}>✖</Button>}
    </div>
}

export default ProductItem;