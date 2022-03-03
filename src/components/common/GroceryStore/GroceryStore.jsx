import React from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";
import s from "./GroceryStore.module.css"

const GroceryStore = (props) => <div className={s.groceryStore}>
    <ProductGrid products={props.products}
                 columns={4}
                 addItem={props.addItem}
        //dispatch={props.dispatch}
    />
</div>

export default GroceryStore;