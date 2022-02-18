import AsyncStorage from "@react-native-async-storage/async-storage";

import {createStore, combineReducers, applyMiddleware} from "redux";
import {persistReducer, persistStore} from "redux-persist";
import thunk from "redux-thunk";

import {photosReducer} from "./reducers"

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const rootReducer = combineReducers({photosReducer});
const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk))
    const persistor = persistStore(store)
    
    return {store, persistor}
}


// export const Store = createStore(rootReducer, applyMiddleware(thunk));
