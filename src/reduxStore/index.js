import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import favoriteReducer from "./favorite";
import loadMoreReducer from "./loadMore";
import seenReducer from "./seenMovie";
import filterReducer from "./sortFilter";
import loginReducer from "./user";

const rootReducer= combineReducers({
    user:loginReducer,
    favorite: favoriteReducer,
    seen: seenReducer,
    filteredData: filterReducer,
    loadMoreData : loadMoreReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)