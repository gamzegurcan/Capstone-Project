import {combineReducers, createStore } from "redux"
import trendReducer from "./trending";


const rootReducer = combineReducers({
    trend: trendReducer,
})

const store = createStore(rootReducer)

export default store