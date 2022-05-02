import {firestore} from "../firebase/firebase";

const SET_PEREKROSTOK = 'grocery/SET_PEREKROSTOK'
const LOADING = 'grocery/LOADING'

const initialState = {
    perekrostok: [],
    loading: false,
};

const groceryReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_PEREKROSTOK:
            return {
                ...state,
                perekrostok: [...state.perekrostok, action.perekrostok]
            }

        case LOADING:
            return {...state, loading: action.loading}

        default:
            return state
    }
};

export default groceryReducer;

const setPerekrostok = (perekrostok) => ({type: SET_PEREKROSTOK, perekrostok});
const setLoading = (loading) => ({type: LOADING, loading})

export const getPerekrostokData = () => async (dispatch) => {
    dispatch(setLoading(true))

    let data = await firestore.collection('perekrostok').orderBy("Article").limit(3)
    data.get().then(
        (doc) => doc.docs.map(
            item => dispatch(setPerekrostok(item.data()))
        )
    )
    dispatch(setLoading(false))
}

export const getMorePerekrostokData = (article) => async (dispatch) => {
    dispatch(setLoading(true))
    let data = await firestore.collection('perekrostok').orderBy("Article").startAfter(article).limit(3)
    data.get().then(
        (querySnap) => querySnap.docs.map(
            item => dispatch(setPerekrostok(item.data()))
        )
    )
    dispatch(setLoading(false))
}

