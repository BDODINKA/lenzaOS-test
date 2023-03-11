import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunk from "redux-thunk";
import {appReducer} from "./appReducer";
import {chatReducer} from "./chatReducer";


const rootReducer = combineReducers({
    app: appReducer,
    chat:chatReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootStateType = ReturnType<typeof store.getState>

export type AppDispatchType = typeof store.dispatch

// @ts-ignore
window.store = store;