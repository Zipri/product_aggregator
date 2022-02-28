import React from 'react';
import ProductList from "./ProductList";
import Filter from "./Filter";
import s from './Products.module.css';

const Products = (props) => {
    return <div className={s.products}>
        <ProductList perekrostokProducts={props.perekrostokProducts}
                     pyatorochkaProducts={props.pyatorochkaProducts}/>
        <Filter products={props.products}/>
    </div>
};

export default Products;