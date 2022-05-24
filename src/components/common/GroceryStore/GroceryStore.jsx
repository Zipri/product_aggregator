import React, {useEffect, useState} from 'react';
import ProductGrid from "../ProductGrid/ProductGrid";
import s from "./GroceryStore.module.css"
import ProductFilter from "./ProductFilter";
import Preloader from "../Preloader/Preloader";

const GroceryStore = (props) => {
    let [columns, setColumns] = useState(4)
    const [basketItems, setBasketItems] = useState(props.basketItems)
    const [favorites, setFavorites] = useState(props.favorites)
    useEffect(() => {
        if (props.products.length === 0) props.getFirst(props.order)
    }, [props.products])


    const addToBasket = (article, market, category, title, price, image) => {
        setBasketItems([...basketItems, article])
        props.addToBasket(article, market, category, title, price, image)
    }
    const deleteFromBasket = (article) => {
        const buffer = basketItems.filter(item => item !== article)
        setBasketItems(buffer)
        props.deleteFromBasket(article)
    }

    const addNewFavorite = (article, market, category, title, price) => {
        setFavorites([...favorites, article])
        props.addNewFavorite(article, market, category, title, price)
    }
    const deleteFavorite = (article) => {
        const buffer = favorites.filter(item => item !== article)
        setFavorites(buffer)
        props.deleteFavorite(article)
    }


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

    // const categories = props.products.map(products => products.Category)

    return props.loading
        ? <Preloader/>
        : <div className={s.groceryStore}>
            <ProductGrid products={props.products}
                         getMore={getMore}

                         favorites={favorites}
                         deleteFavorite={deleteFavorite}
                         addNewFavorite={addNewFavorite}

                         basketItems={basketItems}
                         addToBasket={addToBasket}
                         deleteFromBasket={deleteFromBasket}

                         columns={columns}
                         // clear={clear}
                         findByName={props.findByName}
                         isAll={props.isAll}/>

            <ProductFilter categories={props.categories}
                           findByCategory={props.findByCategory}
                           columns={columns}
                           setCol={setColumns}

                           clear={props.clear}
                           getFirst={props.getFirst}
                           order={props.order}
                           getOrder={props.getOrder}/>
        </div>
};

export default GroceryStore;