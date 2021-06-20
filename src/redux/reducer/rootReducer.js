import { combineReducers } from "redux"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import UsersReducer from "./users/reducer"
import SettingsReducer from "./settings/reducer"

const persistConfig = {
    key: 'root',
    storage,
    debug: true,
    whitelist: ['users', 'settings']
}
const rootReducer = combineReducers({
    users: UsersReducer,
    settings: SettingsReducer
})

export default persistReducer(persistConfig, rootReducer)