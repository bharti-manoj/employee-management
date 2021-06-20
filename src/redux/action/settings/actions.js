import * as actionTypes from './actionTypes';

export const showLoader = (flag) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SHOW_LOADER,
            payload: flag
        })
    }
}

export const changePage = (page) => {
    return dispatch => {
        dispatch({
            type: actionTypes.PAGE_CHANGE,
            payload: page
        })
    }
}

export const changeTotal = (total) => {
    return dispatch => {
        dispatch({
            type: actionTypes.TOTAL_PAGE,
            payload: total
        })
    }
}
