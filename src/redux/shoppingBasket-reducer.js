const ADD_ITEM = 'shoppingBasket-reducer/ADD_ITEM';
const DELETE_ITEM = 'shoppingBasket-reducer/DELETE_ITEM';

const initialState = {
    shoppingBasket: [],
}

const shoppingBasketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                shoppingBasket: [
                    ...state.shoppingBasket,
                    {id: state.shoppingBasket.length, item: action.newItem}
                ]
            }

        //TODO сделай добавление в копию
        case DELETE_ITEM:
            return state.filter(item => item.id !== action.itemId)

        default:
            return state
    }
};
export default shoppingBasketReducer;

export const addNewItem = (newItem) => ({type: ADD_ITEM, newItem});
export const deleteItem = (itemId) => ({type: DELETE_ITEM, itemId});
