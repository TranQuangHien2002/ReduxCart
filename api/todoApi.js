// api/todoApi.js
import axios from 'axios';

export const fetchTodos = () => {
  return axios.get('https://65598cb4e93ca47020aa4632.mockapi.io/todos');
};

export const addTodo = (newTodo) => {
  return axios.post('https://65598cb4e93ca47020aa4632.mockapi.io/todos', newTodo);
};

export const removeTodo = (id) => {
  return axios.delete(`https://65598cb4e93ca47020aa4632.mockapi.io/todos/${id}`);
};

export const editTodo = (id, updatedTodo) => {
  return axios.put(`https://65598cb4e93ca47020aa4632.mockapi.io/todos/${id}`, updatedTodo);
};
