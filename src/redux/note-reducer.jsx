import {firestore} from "../firebase/firebase";

const SET_NOTES = 'notes/SET_NOTES';

let initialState = {
    notes: [],
};

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NOTES:
            return {...state, notes: action.notes}

        default:
            return state
    }
};
export default noteReducer;

export const setNotes = (notes) => ({type: SET_NOTES, notes})

export const getNotesTC = () => (dispatch) => {
    const notes = firestore.collection('notes')
    dispatch(setNotes(notes))
}