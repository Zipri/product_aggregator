import {firestore} from "../firebase/firebase";

const SET_PEREKROSTOK = 'grocery/SET_PEREKROSTOK'
const SET_VKUSVILL = 'grocery/SET_VKUSVILL'
const SET_ALL = 'grocery/SET_ALL'
const SET_LAST_P = 'grocery/SET_LAST_P'
const SET_LAST_V = 'grocery/SET_LAST_V'
const SET_LAST_ALL = 'grocery/SET_LAST_ALL'
const LOADING = 'grocery/LOADING'
const NUMBER_OF_STARTITEMS = 8
const NUMBER_OF_ITEMS = 4

const initialState = {
    perekrostok: [],
    lastPerekrostok: null,
    vkusvill: [],
    lastVkusvill: null,
    all: [],
    lastAllV: null,
    lastAllP: null,
    loading: false,
};

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PEREKROSTOK:
            return {
                ...state,
                perekrostok: [...state.perekrostok, action.perekrostok]
            }

        case SET_LAST_P:
            return {
                ...state,
                lastPerekrostok: action.lastPerekrostok
            }

        case SET_VKUSVILL:
            return {
                ...state,
                vkusvill: [...state.vkusvill, action.vkusvill]
            }

        case SET_LAST_V:
            return {
                ...state,
                lastVkusvill: action.lastVkusvill
            }

        case SET_ALL:
            return {
                ...state,
                all: [...state.all, action.all]
            }

        case SET_LAST_ALL:
            return {
                ...state,
                lastAllV: action.lastAllV,
                lastAllP: action.lastAllP,
            }

        case LOADING:
            return {...state, loading: action.loading}

        default:
            return state
    }
};

export default groceryReducer;

const setPerekrostok = (perekrostok) => ({type: SET_PEREKROSTOK, perekrostok});
const setLastP = (lastPerekrostok) => ({type: SET_LAST_P, lastPerekrostok});
const setVkusvill = (vkusvill) => ({type: SET_VKUSVILL, vkusvill});
const setLastV = (lastVkusvill) => ({type: SET_LAST_V, lastVkusvill});
const setAll = (all) => ({type: SET_ALL, all});
const setLastAll = (lastAllV, lastAllP) => ({type: SET_LAST_ALL, lastAllV, lastAllP});
const setLoading = (loading) => ({type: LOADING, loading})

export const getPerekrostokData = () => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await firestore.collection('perekrostok').orderBy("Article").limit(NUMBER_OF_STARTITEMS)
    data.get().then(
        (doc) => doc.docs.map(
            item => {
                dispatch(setPerekrostok(item.data()))
                dispatch(setLastP(item.data().Article))
            }
        )
    )
    dispatch(setLoading(false))
}

export const getMorePerekrostokData = (article) => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await firestore.collection('perekrostok').orderBy("Article").startAfter(article).limit(NUMBER_OF_ITEMS)
    data.get().then(
        (querySnap) => querySnap.docs.map(
            item => {
                dispatch(setPerekrostok(item.data()))
                dispatch(setLastP(item.data().Article))
            }
        )
    )
    dispatch(setLoading(false))
}

export const getVkusvillData = () => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await firestore.collection('vkusville').orderBy("Article").limit(NUMBER_OF_STARTITEMS)
    data.get().then(
        (doc) => doc.docs.map(
            item => {
                dispatch(setVkusvill(item.data()))
                dispatch(setLastV(item.data().Article))
            }
        )
    )
    dispatch(setLoading(false))
}

export const getMoreVkusvillData = (article) => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await firestore.collection('vkusville').orderBy("Article").startAfter(article).limit(NUMBER_OF_ITEMS)
    data.get().then(
        (querySnap) => querySnap.docs.map(
            item => {
                dispatch(setVkusvill(item.data()))
                dispatch(setLastV(item.data().Article))
            }
        )
    )
    dispatch(setLoading(false))
}

export const getAllData = () => async (dispatch) => {
    let lastV = null;
    let lastP = null;
    dispatch(setLoading(true))
    let dataV = await firestore.collection('vkusville')
        .orderBy("Article").limit(NUMBER_OF_STARTITEMS/2)
    dataV.get().then(
        (doc) => doc.docs.map(
            item => {
                dispatch(setAll(item.data()))
                lastV = item.data().Article
            }
        )
    )
    let dataP = await firestore.collection('perekrostok')
        .orderBy("Article").limit(NUMBER_OF_STARTITEMS/2)
    dataP.get().then(
        (doc) => doc.docs.map(
            item => {
                dispatch(setAll(item.data()))
                lastP = item.data().Article
            }
        )
    )
    dispatch(setLastAll(lastV, lastP))
    dispatch(setLoading(false))
}

export const getMoreAllData = (articleV, articleP) => async (dispatch) => {
    let lastV = null;
    let lastP = null;
    dispatch(setLoading(true))
    let dataV = await firestore.collection('vkusville')
        .orderBy("Article").startAfter(articleV).limit(NUMBER_OF_ITEMS/2)
    dataV.get().then(
        (querySnap) => querySnap.docs.map(
            item => {
                dispatch(setAll(item.data()))
                lastV = item.data().Article
            }
        )
    )
    let dataP = await firestore.collection('perekrostok')
        .orderBy("Article").startAfter(articleP).limit(NUMBER_OF_ITEMS/2)
    dataP.get().then(
        (querySnap) => querySnap.docs.map(
            item => {
                dispatch(setAll(item.data()))
                lastP = item.data().Article
            }
        )
    )
    dispatch(setLastAll(lastV, lastP))
    dispatch(setLoading(false))
}

