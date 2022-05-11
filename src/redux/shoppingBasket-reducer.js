import {auth, firestore} from "../firebase/firebase";
import {collection, getDocs, query, orderBy, where} from "firebase/firestore";
import {setLoading} from "./grocery-reducer";

const SET_BASKET = 'shoppingBasket/SET_BASKET'
const DELETE_ITEM = 'shoppingBasket/DELETE_ITEM';
const CLEAR_BASKET = 'shoppingBasket/CLEAR_BASKET'

const initialState = {
    shoppingBasket: [],
}

const shoppingBasketReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_BASKET:
            return {
                ...state,
                shoppingBasket: [...state.shoppingBasket, ...action.shoppingBasket]
            }

        case DELETE_ITEM:
            return {
                ...state,
                shoppingBasket: state.shoppingBasket
                    .filter(item => item.article !== action.article)
            }

        case CLEAR_BASKET:
            return {
                ...state,
                shoppingBasket: []
            }

        default:
            return state
    }
};
export default shoppingBasketReducer;

const setShoppingBasket = (shoppingBasket) => ({type: SET_BASKET, shoppingBasket});
const clearBasket = () => ({type: CLEAR_BASKET})
const deleteItem = (article) => ({type: DELETE_ITEM, article});

export const getShoppingBasket = (order = 'title')  => async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(clearBasket())

    const request = query(
        collection(firestore, 'basketitems'),
        where("uid", "==", auth.currentUser.uid),
        orderBy(order))
    console.log(request)
    let docSnapshots = await getDocs(request)

    let buffer = []
    docSnapshots.docs.map(item => buffer.push(item.data()))
    dispatch(setShoppingBasket(buffer))

    dispatch(setLoading(false))
}

export const addToShoppingBasket = (article, market, category, title, price, image) => async (dispatch) => {
    const docId = auth.currentUser.uid + article
    const buffer = {
        uid: auth.currentUser.uid,
        article: article,
        market: market,
        category: category,
        title: title,
        price: price,
        image: image
    }
    dispatch(setShoppingBasket(buffer))
    await firestore.collection('basketitems').doc(docId).set(buffer)
}

export const deleteFromShoppingBasket = (article) => async (dispatch) => {
    const docId = auth.currentUser.uid + article
    dispatch(deleteItem(article))
    await firestore.collection('basketitems').doc(docId).delete()
}
