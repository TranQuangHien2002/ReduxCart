// actionCreators.js
import axios from 'axios';
import {
  fetchTodosSuccess,
  addTodo as addTodoAction,
  removeTodo as removeTodoAction,
  editTodo as editTodoAction,
} from '../src/reducers/reducers.js';

const apiUrl = 'https://65598cb4e93ca47020aa4632.mockapi.io/todos';

export const fetchTodos = () => {
  return async dispatch => {
    try {
      const response = await axios.get(apiUrl);
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };
};

export const addTodo = todo => {
  return async dispatch => {
    try {
      const response = await axios.post(apiUrl, todo);
      dispatch(addTodoAction(response.data));
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };
};

export const removeTodo = id => {
  return async dispatch => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      dispatch(removeTodoAction(id));
    } catch (error) {
      console.error('Error removing todo:', error);
    }
  };
};

export const editTodo = todo => {
  return async dispatch => {
    try {
      await axios.put(`${apiUrl}/${todo.id}`, todo);
      dispatch(editTodoAction(todo));
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };
};
