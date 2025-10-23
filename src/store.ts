import { configureStore, combineReducers } from '@reduxjs/toolkit'
import todoReducer from './feature/todoList'
// import userReducer from './feature/userSlice'
// import cartReducer from './feature/cartSlice'
import { loadFromLocalStorage, saveToLocalStorage } from './helpers/storage'

const rootReducer = combineReducers({
  todoList: todoReducer,
  // user: userReducer,
  // cart: cartReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage()
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch