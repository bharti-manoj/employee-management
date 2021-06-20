import * as actionTypes from '../../action/settings/actionTypes'

const initialState = {
    open_loader: true,
    pages: {
        total: null,
        active: null
    }
}

const SettingsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADER:
            return {
                ...state,
                open_loader: action.payload
            }
        case actionTypes.PAGE_CHANGE:
            return {
                ...state,
                pages: {...state.pages, active: action.payload}
            }
        case actionTypes.TOTAL_PAGE:
            return {
                ...state,
                pages: {...state.pages, total: action.payload}
            }
        default:
            return state;
    }
}

export default SettingsReducer
