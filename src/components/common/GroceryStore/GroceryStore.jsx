import React from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";

const GroceryStore = (props) => <ProductGrid
    products={props.products}
    columns={4}
    //dispatch={props.dispatch}
    addItem={props.addItem}
/>

export default GroceryStore;