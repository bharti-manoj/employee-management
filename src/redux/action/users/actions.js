import * as actionTypes from './actionTypes';

export const fetchUsers = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.FETCH_USERS_SUCCESS
        })
    }
}

export const addUser = (body) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ADD_USER_SUCCESS,
            payload: body
        })
    }
}

export const updateUser = (body) => {
    return dispatch => {
        dispatch({
            type: actionTypes.UPDATE_USER_SUCCESS,
            payload: body
        })
    }
}

export const deleteUser = (id) => {
    return dispatch => {
        dispatch({
            type: actionTypes.DELETE_USER_SUCCESS,
            payload: id
        })
    }
}