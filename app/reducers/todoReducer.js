// app/reducers/todoReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos, addTodo, removeTodo, editTodo } from '../../api/todoApi';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setTodos, addTodo: addTodoAction, removeTodo: removeTodoAction, updateTodo } = todoSlice.actions;

// Thunk để cập nhật trạng thái từ API
export const fetchTodosAsync = () => async (dispatch) => {
  try {
    const response = await fetchTodos();
    dispatch(setTodos(response.data));
  } catch (error) {
    console.error('Error fetching todos: ', error);
  }
};

export const addTodoAsync = (newTodo) => async (dispatch) => {
  try {
    const response = await addTodo(newTodo);
    dispatch(addTodoAction(response.data));
  } catch (error) {
    console.error('Error adding todo: ', error);
  }
};

export const removeTodoAsync = (id) => async (dispatch) => {
  try {
    await removeTodo(id);
    dispatch(removeTodoAction(id));
  } catch (error) {
    console.error('Error removing todo: ', error);
  }
};

export const updateTodoAsync = (id, updatedTodo) => async (dispatch) => {
  try {
    const response = await editTodo(id, updatedTodo);
    dispatch(updateTodo(response.data));
  } catch (error) {
    console.error('Error updating todo: ', error);
  }
};

export default todoSlice.reducer;
