// app/screens/TodoListScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodosAsync,
  addTodoAsync,
  removeTodoAsync,
  updateTodoAsync,
} from '../reducers/todoReducer';

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    // Fetch todos from the API and dispatch setTodos action
    dispatch(fetchTodosAsync());
  }, []);

  const handleAddTodo = () => {
    // Implement logic to add a new todo
    const newTodo = {
      id: Date.now().toString(),
      todojob: 'New Todo',
    };
    dispatch(addTodoAsync(newTodo));
  };

  const handleRemoveTodo = (id) => {
    // Implement logic to remove a todo
    dispatch(removeTodoAsync(id));
  };

  const handleUpdateTodo = (id, updatedTodo) => {
    // Implement logic to update a todo
    dispatch(updateTodoAsync(id, updatedTodo));
  };

  return (
    <View>
      <Text>Todo List</Text>
      {todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.todojob}</Text>
          <Button title="Remove" onPress={() => handleRemoveTodo(todo.id)} />
          <Button title="Update" onPress={() => handleUpdateTodo(todo.id, { todojob: 'Updated Todo' })} />
        </View>
      ))}
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default TodoListScreen;
