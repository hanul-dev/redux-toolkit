import { createSlice } from "@reduxjs/toolkit";
import divideList from '../../utils/divideList';

const initialState = {
  todos: [],
  done: [],
  willDone: [],
  selected: {}
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log(todosSlice);
      return {
        ...state,
        todos: [...state.todos, action.payload],
        willDone: divideList([...state.todos, action.payload]).willDoneList
      };
    },
    switchTodo: (state, action) => {
      const switchId = action.payload;
      const switchTodos = state.todos.map(todo => todo.id === switchId ? {...todo, isDone: !todo.isDone } : todo);
      return {
        todos: switchTodos,
        willDone: divideList(switchTodos).willDoneList,
        done: divideList(switchTodos).doneList
      };
    },
    delTodo: (state, action) => {
      const delId = action.payload;
      const newTodos = state.todos.filter(todo => todo.id !== delId);
      return {
        todos : newTodos,
        willDone: divideList(newTodos).willDoneList,
        done : divideList(newTodos).doneList
      };
    },
    detailTodo: (state, action) => {
      const detailId = action.payload;
      const [detailTodo] = state.todos.filter((todo) => {
        console.log(todo);
        return todo.id === detailId});
      console.log(detailTodo);
      return {
        ...state,
        selected: {...detailTodo, id: detailId}
      };
    },
  },
});

export const {addTodo, delTodo, switchTodo, detailTodo} = todosSlice.actions;
export default todosSlice.reducer;