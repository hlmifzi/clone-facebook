import actionTypes from '../action/actionTypes'

export const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer