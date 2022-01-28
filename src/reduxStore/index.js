import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import userReducer from "./user";

const rootReducer= combineReducers({
    user:userReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)