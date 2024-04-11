import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalSlice from "./modalSlice"
import allTasksSlice from "./allTasksSlice"

const rootReducer = combineReducers({
    modalSlice,
    allTasksSlice
})

export const store = configureStore({
    reducer: {
        rootReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch