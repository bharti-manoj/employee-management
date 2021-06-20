import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import rootReducer from '../reducer/rootReducer'

const initialState = {}

export const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
export const persistor = persistStore(store)
