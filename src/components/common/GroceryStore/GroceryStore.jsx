import React, {useEffect, useState} from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";
import s from "./GroceryStore.module.css"
import ProductFilter from "./ProductFilter";

const GroceryStore = (props) => {
    let [products, setProducts] = useState(props.products)
    useEffect(() => setProducts(props.products), [props.products])
    const findByName = (value) => {
        setProducts(props.products.filter(product => product.name === value))
    }
    const findByCategory = (value) => {
        if (value === "all") {
            setProducts(props.products)
        } else {
            setProducts(props.products.filter(product => product.category === value))
        }
    }

    const categories = props.products.map(products => products.category)

    return <div className={s.groceryStore}>
        <ProductGrid products={products}
                     columns={4}
                     addItem={props.addItem}
                     addNewFavorite={props.addNewFavorite}
                     findByName={findByName}/>
        <ProductFilter categories={[...new Set(categories)]}
                       findByCategory={findByCategory}/>
    </div>
};

export default GroceryStore;