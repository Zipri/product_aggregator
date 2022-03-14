const SET_USER = 'auth-reducer/SET_USER';
const REMOVE_USER = 'auth-reducer/REMOVE_USER';

const initialState = {
    user: {
        email: null,
        token: null,
        id: null
    }
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                user: {
                    email: action.email.email,
                    token: action.email.token,
                    id: action.email.id
                }
            }
        //    TODO исправить email
        case REMOVE_USER:
            return {
                user: {
                    email: null,
                    token: null,
                    id: null
                }
            }

        default:
            return state
    }
};
export default authReducer;

export const setUser = (email, token, id) => ({type: SET_USER, email, token, id});
export const removeUser = () => ({type: REMOVE_USER});

