import {configureStore, combineReducers} from "@reduxjs/toolkit";
import inventoryReducer from './reducers/InventorySlice'

const rootReducer = combineReducers({
    inventoryReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']