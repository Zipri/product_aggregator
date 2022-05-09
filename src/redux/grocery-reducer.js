import {firestore} from "../firebase/firebase";
import {collection, getDocs, limit, query, startAfter, orderBy} from "firebase/firestore";

const SET_PEREKROSTOK = 'grocery/SET_PEREKROSTOK'
const SET_VKUSVILL = 'grocery/SET_VKUSVILL'
const SET_ALL = 'grocery/SET_ALL'

const SET_LAST_P = 'grocery/SET_LAST_P'
const SET_LAST_V = 'grocery/SET_LAST_V'
const SET_LAST_ALL_P = 'grocery/SET_LAST_ALL_P'
const SET_LAST_ALL_V = 'grocery/SET_LAST_ALL_V'

const SET_ORDER_P = 'grocery/SET_ORDER_P'
const SET_ORDER_V = 'grocery/SET_ORDER_V'
const SET_ORDER_ALL = 'grocery/SET_ORDER_ALL'

const CLEAR_P = 'grocery/CLEAR_P'
const CLEAR_V = 'grocery/CLEAR_V'
const CLEAR_ALL = 'grocery/CLEAR_ALL'

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

    orderP: "Title",
    orderV: "Title",
    orderAll: "Title",

    loading: false,
};

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PEREKROSTOK:
            return {
                ...state,
                perekrostok: [...state.perekrostok, ...action.perekrostok]
            }
        case SET_LAST_P:
            return {
                ...state,
                lastPerekrostok: action.lastPerekrostok
            }

        case SET_VKUSVILL:
            return {
                ...state,
                vkusvill: [...state.vkusvill, ...action.vkusvill]
            }
        case SET_LAST_V:
            return {
                ...state,
                lastVkusvill: action.lastVkusvill
            }

        case SET_ALL:
            return {
                ...state,
                all: [...state.all, ...action.all]
            }
        case SET_LAST_ALL_P:
            return {
                ...state,
                lastAllP: action.lastAllP,
            }
        case SET_LAST_ALL_V:
            return {
                ...state,
                lastAllV: action.lastAllV,
            }

        case SET_ORDER_P:
            return {
                ...state,
                orderP: action.orderP
            }
        case SET_ORDER_V:
            return {
                ...state,
                orderV: action.orderV
            }
        case SET_ORDER_ALL:
            return {
                ...state,
                orderAll: action.orderAll
            }

        case CLEAR_P:
            return {
                ...state,
                perekrostok: []
            }
        case CLEAR_V:
            return {
                ...state,
                vkusvill: []
            }
        case CLEAR_ALL:
            return {
                ...state,
                all: []
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
const setLastAllP = (lastAllP) => ({type: SET_LAST_ALL_P, lastAllP});
const setLastAllV = (lastAllV) => ({type: SET_LAST_ALL_V, lastAllV});

const setOrderP = (orderP) => ({type: SET_ORDER_P, orderP})
const setOrderV = (orderV) => ({type: SET_ORDER_V, orderV})
const setOrderAll = (orderAll) => ({type: SET_ORDER_ALL, orderAll})

const clearP = () => ({type: CLEAR_P})
const clearV = () => ({type: CLEAR_V})
const clearAll = () => ({type: CLEAR_ALL})

const setLoading = (loading) => ({type: LOADING, loading})

const universalGetter = async (dispatch, start, market, order, productSetter, lastSetter, lastVisible, all) => {
    if (start) dispatch(setLoading(true))


    const request = start
        ? query(
            collection(firestore, market),
            orderBy(order),
            limit(all ? NUMBER_OF_STARTITEMS / 2 : NUMBER_OF_STARTITEMS))
        : query(
            collection(firestore, market),
            orderBy(order),
            startAfter(lastVisible),
            limit(all ? NUMBER_OF_ITEMS / 2 : NUMBER_OF_ITEMS))
    let docSnapshots = await getDocs(request)

    let buffer = []
    docSnapshots.docs.map(item => buffer.push(item.data()))
    dispatch(productSetter(buffer))

    let lastVisibleEl = docSnapshots.docs[docSnapshots.docs.length - 1]
    dispatch(lastSetter(lastVisibleEl))

    if (start) dispatch(setLoading(false))
}

const getOrder = async (order, clear, setOrder, dispatch, getFristData) => {
    dispatch(clear())
    dispatch(setOrder(order))
    await getFristData()
}

export const getPerekrostokData = (order) => async (dispatch) => {
    await universalGetter(dispatch,
        true,
        'perekrostok',
        order,
        setPerekrostok,
        setLastP)
}

export const getMorePerekrostokData = (lastVisible, order) => async (dispatch) => {
    await universalGetter(dispatch,
        false,
        'perekrostok',
        order,
        setPerekrostok,
        setLastP,
        lastVisible)
}

export const getOrderPerekrostokData = (order) => async (dispatch) => {
    await getOrder(order, clearP, setOrderP, dispatch, getPerekrostokData)
}

export const getVkusvillData = (order) => async (dispatch) => {
    await universalGetter(dispatch,
        true,
        'vkusville',
        order,
        setVkusvill,
        setLastV)
}

export const getMoreVkusvillData = (lastVisible, order) => async (dispatch) => {
    await universalGetter(dispatch,
        false,
        'vkusville',
        order,
        setVkusvill,
        setLastV,
        lastVisible)
}

export const getOrderVkusvillData = (order) => async (dispatch) => {
    await getOrder(order, clearV, setOrderV, dispatch, getVkusvillData)
}

export const getAllData = (order) => async (dispatch) => {
    await universalGetter(dispatch,
        true,
        'vkusville',
        order,
        setAll,
        setLastAllV,
        null,
        true)
    await universalGetter(dispatch,
        true,
        'perekrostok',
        order,
        setAll,
        setLastAllP,
        null,
        true)
}

export const getMoreAllData = (lastVisibleV, lastVisibleP, order) => async (dispatch) => {
    await universalGetter(dispatch,
        false,
        'vkusville',
        order,
        setAll,
        setLastAllV,
        lastVisibleV,
        true)

    await universalGetter(dispatch,
        false,
        'perekrostok',
        order,
        setAll,
        setLastAllP,
        lastVisibleP,
        true)
}

export const getOrderAllData = (order) => async (dispatch) => {
    await getOrder(order, clearAll, setOrderAll, dispatch, getAllData)
}
