import React from 'react';
import ProductGrid from "../common/ProductGrid/ProductGrid";
import s from './Pyatorochka.module.css';

const Pyatorochka = (props) => {
    return <div className={s.pyatorochka}>
        <ProductGrid products={props.pyatorochkaProducts} columns={4}/>
    </div>
}

export default Pyatorochka;
