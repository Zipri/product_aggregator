import React from 'react';
import ProductItem from "../common/ProductItem/ProductItem";
import s from './Products.module.css';

const Market = (props) => <div>
    {props.marketName} products
    {props.products.map(product =>
        <ProductItem name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}/>)}
</div>

const ProductList = (props) => {
    return (
        <div className="items">
            <Market marketName="Perekrostok" products={props.perekrostokProducts}/>
            <Market marketName="Pyatorochka" products={props.pyatorochkaProducts}/>
        </div>
    );
};

export default ProductList;
