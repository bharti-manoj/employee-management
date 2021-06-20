import * as actionTypes from '../../action/users/actionTypes'
import _ from 'lodash'

const initialState = {
    users: []
}

const UsersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users]
            }
        case actionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case actionTypes.UPDATE_USER_SUCCESS:
            const users = state.users
            for (let i in users)
                if (users[i].id === action.payload.id)
                    users[i] = action.payload
            return {
                ...state,
                users: [...state.users]
            }
        case actionTypes.DELETE_USER_SUCCESS:
            return {
                ...state,
                users: _.remove(state.users, function (user) {
                    if (user.id !== action.payload) return user
                })
            }
        default:
            return state;
    }
}

export default UsersReducer
