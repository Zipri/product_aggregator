const ADD_ITEM = 'ADD_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_SHOPPING_BASKET = 'SET-SHOPPING-BASKET';

const shoppingBasketReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state,
                {id: 1, item: action.newItem}
            ]

        case DELETE_ITEM:
            return state.filter(item => item.id !== action.itemId)

        case SET_SHOPPING_BASKET:
            return action.basket

        default:
            return state
    }
};
export default shoppingBasketReducer;

export const setShoppingBasket = (basket) => ({type: SET_SHOPPING_BASKET, basket});
export const addNewItem = (newItem) => ({type: ADD_ITEM, newItem});
export const deleteItem = (itemId) => ({type: DELETE_ITEM, itemId});
