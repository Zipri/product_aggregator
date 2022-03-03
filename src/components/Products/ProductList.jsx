import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";
import s from './Products.module.css';

const Market = (props) => <div>
    {props.marketName} продукты:
    {props.products.map(product =>
        <ProductItem name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}
                     flag={false}/>)}
</div>

const ProductList = (props) => {
    return (
        <div className="items">
            <Market marketName="Магазин №1" products={props.perekrostokProducts}/>
            <Market marketName="Магазин №2" products={props.pyatorochkaProducts}/>
        </div>
    );
};

export default ProductList;
