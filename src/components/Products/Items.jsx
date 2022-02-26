import React from 'react';

import s from './Products.module.css';

const Label = (props) => <div className={s.label}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
    {props.items && <div className={s.description}>items</div>}
</div>

const Item = (props) => <div className={s.item}>
    <img className={s.image} src={props.picture}/>
    <div className={s.info}>
        <Label description="Product:" name={props.name} price={false} items={false}/>
        <Label description="Price:" name={props.price} price={true} items={false}/>
        <Label description="Number:" name={props.number} price={false} items={true}/>
    </div>
</div>
//TODO сделать глобальной мопонентой, т.к. часто где используется

const Market = (props) => <div>
    {props.marketName} products
    {props.products.map(product =>
        <Item name={product.name}
              price={product.price}
              number={product.number}
              picture={product.picture}/>)}
</div>

const Items = (props) => {
    return (
        <div className="items">
            <Market marketName="Perekrostok" products={props.perekrostokProducts}/>
            <Market marketName="Pyatorochka" products={props.pyatorochkaProducts}/>
        </div>
    );
};

export default Items;
