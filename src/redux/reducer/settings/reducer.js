import * as actionTypes from '../../action/settings/actionTypes'

const initialState = {
    open_loader: true,
    page_count: 0,
    active_page: 0,
    count_per_page: 0,
    searchText: ''
}

const SettingsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                open_loader: action.payload
            }
        case actionTypes.ACTIVE_PAGE:
            return {
                ...state,
                active_page: action.payload
            }
        case actionTypes.COUNT_PER_PAGE:
            return {
                ...state,
                count_per_page: action.payload
            }
        case actionTypes.PAGE_COUNT:
            return {
                ...state,
                page_count: action.payload
            }
        case actionTypes.SEARCH_TEXT:
            return {
                ...state,
                searchText: action.payload
            }
        default:
            return state;
    }
}

export default SettingsReducer
