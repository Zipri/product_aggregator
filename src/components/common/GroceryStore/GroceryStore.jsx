import React, {useEffect, useState} from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";
import s from "./GroceryStore.module.css"
import ProductFilter from "./ProductFilter";
import Preloader from "../Preloader/Preloader";

const GroceryStore = (props) => {
    useEffect(() => {
        if (props.products.length === 0) props.getFirst(props.order)
        console.log(props.order)
    }, [props.products])

    let [columns, setColumns] = useState(4)

    const getMore = () => {
        props.isAll
            ? props.getMore(props.lastV, props.lastP, props.order)
            : props.getMore(props.last, props.order)
    }


    // const findByName = (value) => {
    //     setProducts(props.products.filter(product => !product.Title.toLowerCase().indexOf(value.toLowerCase())))
    // }
    // const clear = () => setProducts(props.products)
    // const findByCategory = (value) => {
    //     if (value === "all") {
    //         setProducts(props.products)
    //     } else {
    //         setProducts(props.products.filter(product => product.Category === value))
    //     }
    // }

    const categories = props.products.map(products => products.Category)

    return props.loading
        ? <Preloader/>
        : <div className={s.groceryStore}>
            <ProductGrid products={props.products}
                         getMore={getMore}

                         favorites={props.favorites}
                         deleteFavorite={props.deleteFavorite}
                         addNewFavorite={props.addNewFavorite}

                         basketItems={props.basketItems}
                         addToBasket={props.addToBasket}
                         deleteFromBasket={props.deleteFromBasket}

                         columns={columns}
                         // clear={clear}
                         // findByName={findByName}
                         isAll={props.isAll}/>

            <ProductFilter categories={[...new Set(categories)]}
                           // findByCategory={findByCategory}
                           columns={columns}
                           setCol={setColumns}

                           clear={props.clear}
                           getFirst={props.getFirst}
                           order={props.order}
                           getOrder={props.getOrder}/>
        </div>
};

export default GroceryStore;