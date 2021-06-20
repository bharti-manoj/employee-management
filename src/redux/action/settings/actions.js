import * as actionTypes from './actionTypes';

export const showLoader = (flag) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SHOW_LOADER,
            payload: flag
        })
    }
}

export const setActivePage = (activePage) => {
    return dispatch => {
        dispatch({
            type: actionTypes.ACTIVE_PAGE,
            payload: activePage
        })
    }
}

export const setCountPerPage = (countPerPage) => {
    return dispatch => {
        dispatch({
            type: actionTypes.COUNT_PER_PAGE,
            payload: countPerPage
        })
    }
}

export const setPageCount = (pageCount) => {
    return dispatch => {
        dispatch({
            type: actionTypes.PAGE_COUNT,
            payload: pageCount
        })
    }
}

export const setSearchText = (searchText) => {
    return dispatch => {
        dispatch({
            type: actionTypes.SEARCH_TEXT,
            payload: searchText
        })
    }
}
