import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/ToDoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
})

export default store