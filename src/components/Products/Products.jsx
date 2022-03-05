import React, {useState} from 'react';
import ProductList from "./ProductList";
import Filter from "./Filter";
import s from './Products.module.css';

const Products = (props) => {
    let [findProductsName, setFindProductsName] = useState([])
    let [findProductsCategory, setFindProductsCategory] = useState([])

    const findByName = (value) => {
        let text = value
        setFindProductsName(props.products.filter(product => product.name === text))
    }
    const findByCategory = (value) => {
        let text = value
        setFindProductsCategory(props.products.filter(product => product.category === text))
    }

    return <div className={s.products}>
        <ProductList products={props.products}
                     setFindInputName={findByName}
                     setFindInputCategory={findByCategory}/>

        <Filter products={props.products}
                findByName={findByName}
                findByCategory={findByCategory}
                findProductsName={findProductsName}
                findProductsCategory={findProductsCategory}/>
    </div>
};

export default Products;