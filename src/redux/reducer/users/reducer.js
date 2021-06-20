import * as actionTypes from '../../action/users/actionTypes'
import _ from 'lodash'

const initialState = {
    users: [],
    count: 0
}

const UsersReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                users: [...state.users],
                count: state.users.length
            }
        case actionTypes.ADD_USER_SUCCESS:
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1
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
                }),
                count: state.count - 1
            }
        default:
            return state;
    }
}

export default UsersReducer
