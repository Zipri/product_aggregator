import React, {useEffect, useState} from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";
import s from "./GroceryStore.module.css"
import ProductFilter from "./ProductFilter";

const GroceryStore = (props) => {
    let [columns, setColumns] = useState(4)
    let [products, setProducts] = useState(props.products)
    useEffect(() => setProducts(props.products), [props.products])
    const findByName = (value) => {
        setProducts(props.products.filter(product => !product.Title.toLowerCase().indexOf(value.toLowerCase())))
    }
    const clear = () => setProducts(props.products)
    const findByCategory = (value) => {
        if (value === "all") {
            setProducts(props.products)
        } else {
            setProducts(props.products.filter(product => product.Category === value))
        }
    }

    const categories = props.products.map(products => products.Category)

    return <div className={s.groceryStore}>
        <ProductGrid products={products}
                     favorites={props.favorites}
                     columns={columns}
                     deleteFavorite={props.deleteFavorite}
                     addNewFavorite={props.addNewFavorite}
                     clear={clear}
                     findByName={findByName}
                     basketItems={props.basketItems}
                     addToBasket={props.addToBasket}
                     deleteFromBasket={props.deleteFromBasket}/>
        <ProductFilter categories={[...new Set(categories)]}
                       findByCategory={findByCategory}
                       columns={columns}
                       setCol={setColumns}/>
    </div>
};

export default GroceryStore;