import React from 'react';
import s from './ProductGrid.module.css';

const StringInfo = (props) => <div className={s.stringInfo}>
    <div className={s.description}>{props.description}</div>
    <div className={s.name}>{props.name}</div>
    {props.price && <div className={s.description}>₽</div>}
    {props.items && <div className={s.description}>items</div>}
</div>

const ProductCell = (props) => <div className={s.productCell}>
    <img className={s.image} src={props.picture}/>
    <div className={s.info}>
        <StringInfo description="Product:" name={props.name} price={false} items={false}/>
        <StringInfo description="Price:" name={props.price} price={true} items={false}/>
        <StringInfo description="Number:" name={props.number} price={false} items={true}/>
    </div>
</div>

const ProductGrid = (props) => {
    const productColumns = props.products.map(product =>
        <ProductCell name={product.name}
                     price={product.price}
                     number={product.number}
                     picture={product.picture}/>)
    const columns = props.columns;
    const rowsNumber = Math.ceil(productColumns.length / columns)
    const productRows = [...Array(rowsNumber)]
        .map((item, number) => productColumns.slice(number * columns, (number + 1) * columns))

    return <div className={s.productGrid}>
        {productRows.map(row => <div className={s.productRow}>
            {row.map(cell => cell)}
        </div>)}
    </div>
}

export default ProductGrid