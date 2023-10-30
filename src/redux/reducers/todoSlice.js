import { createSlice } from "@reduxjs/toolkit";

const intialTodos = [
  {
    id: 1,
    title: "makan",
    completed: false,
  },
  {
    id: 2,
    title: "bermain",
    completed: false,
  },
  {
    id: 3,
    title: "nonton",
    completed: false,
  },
];

const initialState = {
  todos: intialTodos,
  selectedToDo: null,
  filter: "all",
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    selectedToDo: (state, action) => {
      const todo = action.payload;
      state.selectedToDo = todo;
    },
    updateToDo: (state, action) => {
      const { id, title, completed } = action.payload;
      const index = state.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state.todos[index] = { id, title, completed };
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  selectedToDo,
  updateToDo,
  setFilter,
} = todosSlice.actions;

export default todosSlice.reducer;
