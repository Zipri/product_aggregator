import React from 'react';
import ProductGrid from "../common/ProductGrid/ProductGrid";
import s from './Perekrostok.module.css';

const Perekrostok = (props) => {
    return <div className={s.perekrostok}>
        <ProductGrid products={props.perekrostokProducts} columns={4}/>
    </div>
}

export default Perekrostok;
