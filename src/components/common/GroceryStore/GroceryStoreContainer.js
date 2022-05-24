import React, {useEffect} from "react";

import GroceryStore from "./GroceryStore";
import Preloader from "../Preloader/Preloader";
import {connect} from "react-redux";
import {
    findByCategoryP,
    findByCategoryV,
    findByName, findByNameAll, findByNameP, findByNameV,
    getAllData, getMoreAllData,
    getMorePerekrostokData, getMoreVkusvillData, getOrderAllData, getOrderPerekrostokData, getOrderVkusvillData,
    getPerekrostokData,
    getVkusvillData, setLoading,
} from "../../../redux/grocery-reducer";
import {addToShoppingBasket, deleteFromShoppingBasket, getShoppingBasket} from "../../../redux/shoppingBasket-reducer";
import {addToFavorites, deleteFromFavorites, getFavorites} from "../../../redux/favorites-reducer";


const GroceryStoreContainer = (props) => {
    useEffect(async () => {
        await props.getShoppingBasket()
        await props.getFavorites()
    }, [])

    const addToFavorite = (article, market, category, title, price) => {
        props.addToFavorites(article, market, category, title, price)
    }
    const deleteFromFavorite = (article) => {
        props.deleteFromFavorites(article)
    }

    const addToBasket = (article, market, category, title, price, image) => {
        props.addToShoppingBasket(article, market, category, title, price, image)
    }
    const deleteFromBasket = (article) => {
        props.deleteFromShoppingBasket(article)
    }

    const categoriesP = ["Чай", "Выпечка", "Детское питание", "Полуфабрикаты из птицы", "Колбасные изделия", "Овощи", "Деликатесы и копчености"]
    const categoriesV = ["Вода", "Замороженная рыба", "Чай. Травы. Кофе. Какао", "Мясные деликатесы", "Карамель. Шоколад. Конфеты", "Молоко, сливки", "Пресервы и консервы", "Салаты и закуски",]

    const isAll = props.market === "all"
    if (props.loading) return <Preloader/>
    switch (props.market) {
        case "mA":
            return <GroceryStore products={props.vkusvill}
                                 getFirst={props.getVkusvillData}
                                 getMore={props.getMoreVkusvillData}

                                 favorites={props.favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={props.shoppingBasket.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderV}
                                 getOrder={props.getOrderVkusvillData}

                                 findByName={props.findByNameV}
                                 categories={categoriesV}
                                 findByCategory={props.findByCategoryV}

                                 last={props.lastVkusvill}
                                 loading={props.loading}
                                 isAll={isAll}/>
        case "mB":
            return <GroceryStore products={props.perekrostok}
                                 getFirst={props.getPerekrostokData}
                                 getMore={props.getMorePerekrostokData}

                                 favorites={props.favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={props.shoppingBasket.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderP}
                                 getOrder={props.getOrderPerekrostokData}

                                 findByName={props.findByNameP}
                                 categories={categoriesP}
                                 findByCategory={props.findByCategoryP}

                                 last={props.lastPerekrostok}
                                 loading={props.loading}
                                 isAll={isAll}/>
        case "all":
            return <GroceryStore products={props.all}
                                 getFirst={props.getAllData}
                                 getMore={props.getMoreAllData}

                                 favorites={props.favorites.map(item => item.article)}
                                 addNewFavorite={addToFavorite}
                                 deleteFavorite={deleteFromFavorite}

                                 basketItems={props.shoppingBasket.map(item => item.article)}
                                 addToBasket={addToBasket}
                                 deleteFromBasket={deleteFromBasket}

                                 order={props.orderAll}
                                 getOrder={props.getOrderAllData}

                                 findByName={props.findByNameAll}
                                 lastV={props.lastAllV}
                                 lastP={props.lastAllP}
                                 isAll={isAll}/>
    }
};

let mapStateToProps = (state) => ({
    perekrostok: state.groceryPage.perekrostok,
    lastPerekrostok: state.groceryPage.lastPerekrostok,

    vkusvill: state.groceryPage.vkusvill,
    lastVkusvill: state.groceryPage.lastVkusvill,

    all: state.groceryPage.all,
    lastAllV: state.groceryPage.lastAllV,
    lastAllP: state.groceryPage.lastAllP,

    orderP: state.groceryPage.orderP,
    orderV: state.groceryPage.orderV,
    orderAll: state.groceryPage.orderAll,

    shoppingBasket: state.shoppingBasketPage.shoppingBasket,
    favorites: state.favoritesItems.favorites,

    loading: state.groceryPage.loading,
});

export default connect(mapStateToProps, {
    getPerekrostokData,
    getMorePerekrostokData,
    getOrderPerekrostokData,

    getVkusvillData,
    getMoreVkusvillData,
    getOrderVkusvillData,

    getAllData,
    getMoreAllData,
    getOrderAllData,

    getShoppingBasket,
    addToShoppingBasket,
    deleteFromShoppingBasket,

    getFavorites,
    addToFavorites,
    deleteFromFavorites,

    findByNameV,
    findByNameP,
    findByNameAll,

    findByCategoryV,
    findByCategoryP,

    setLoading,
})(GroceryStoreContainer);
