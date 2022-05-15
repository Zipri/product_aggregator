import {auth, firestore} from "../firebase/firebase";
import {collection, getDocs, query, orderBy, where} from "firebase/firestore";
import {setLoading} from "./grocery-reducer";

const SET_FAVORITES = 'favorites/SET_FAVORITES';
const ADD_TO_FAVORITES = 'favorites/ADD_TO_FAVORITES';
const DELETE_ITEM = 'favorites/DELETE_ITEM';
const CLEAR_FAVORITES = 'favorites/CLEAR_FAVORITES';

const initialState = {
    favorites: [],
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, ...action.favorites]
            }

        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.item]
            }

        case DELETE_ITEM:
            return {
                ...state,
                favorites: state.favorites
                    .filter(item => item.article !== action.article)
            }

        case CLEAR_FAVORITES:
            return {
                ...state,
                favorites: []
            }

        default:
            return state
    }
};
export default favoritesReducer;

const setFavorites = (favorites) => ({type: SET_FAVORITES, favorites});
const clearFavorites = () => ({type: CLEAR_FAVORITES})
const addItem = (item) => ({type: ADD_TO_FAVORITES, item});
const deleteItem = (article) => ({type: DELETE_ITEM, article});

export const getFavorites = (order = 'title')  => async (dispatch) => {
    dispatch(setLoading(true))
    dispatch(clearFavorites())

    const request = query(
        collection(firestore, 'favorites'),
        where("uid", "==", auth.currentUser.uid),
        orderBy(order))
    let docSnapshots = await getDocs(request)

    let buffer = []
    docSnapshots.docs.map(item => buffer.push(item.data()))
    dispatch(setFavorites(buffer))

    dispatch(setLoading(false))
}

export const addToFavorites = (article, market, category, title, price) => async (dispatch) => {
    const docId = auth.currentUser.uid + article
    const buffer = {
        uid: auth.currentUser.uid,
        article: article,
        market: market,
        category: category,
        title: title,
        price: price,
    }
    dispatch(addItem(buffer))
    await firestore.collection('favorites').doc(docId).set(buffer)
}

export const deleteFromFavorites = (article) => async (dispatch) => {
    const docId = auth.currentUser.uid + article
    dispatch(deleteItem(article))
    await firestore.collection('favorites').doc(docId).delete()
}
