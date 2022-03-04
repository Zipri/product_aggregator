import React from 'react';
import {Button} from "antd";
import s from './ProductItem.module.css';

const Label = (props) => <div className={s.label}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
    {props.items && <div className={s.description}>штук</div>}
</div>

const ProductItem = (props) => {
    const deleteThisItem = () => {
        props.deleteItem(props.productId)}
    return <div className={s.item}>
        <img className={s.image} src={props.picture}/>
        <div className={s.info}>
            <Label description="Название:" name={props.name} price={false} items={false}/>
            <Label description="Цена:" name={props.price} price={true} items={false}/>
            <Label description="Количество:" name={props.number} price={false} items={true}/>
        </div>
        {props.flag && <Button type="primary" onClick={deleteThisItem}>x</Button>}
    </div>
}

export default ProductItem;