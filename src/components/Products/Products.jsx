import React from 'react';
import Items from "./Items";
import Filter from "./Filter";
import s from './Products.module.css';

const Products = (props) => {
    return <div className={s.products}>
        <Items perekrostokProducts={props.perekrostokProducts}
               pyatorochkaProducts={props.pyatorochkaProducts}/>
        <Filter products={props.products}/>
    </div>
};

export default Products;