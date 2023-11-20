// app/screens/TodoListScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchTodosAsync,
  addTodoAsync,
  removeTodoAsync,
} from '../reducers/todoReducer';

import { useNavigation } from '@react-navigation/native';

const TodoListScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const navigation = useNavigation();

  useEffect(() => {
    // Fetch todos from the API and dispatch setTodos action
    dispatch(fetchTodosAsync());
  }, []);

  const handleAddTodo = () => {
    // Navigate to the AddJobScreen for adding a new job
    navigation.navigate('AddJob');
  };

  const handleRemoveTodo = (id) => {
    // Implement logic to remove a todo
    dispatch(removeTodoAsync(id));
  };

  const handleUpdateTodo = (todo) => {
    // Navigate to the AddJobScreen for updating a job
    navigation.navigate('AddJob', { todo });
  };

  return (
    <View>
      <Text>Todo List</Text>
      {todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.todojob}</Text>
          <Button title="Remove" onPress={() => handleRemoveTodo(todo.id)} />
          <Button title="Update" onPress={() => handleUpdateTodo(todo)} />
        </View>
      ))}
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

export default TodoListScreen;
