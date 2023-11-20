// TodoListScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, removeTodo } from '../actionCreators';

const TodoListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleRemoveTodo = id => {
    dispatch(removeTodo(id));
  };

  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id}>
          <Text>{todo.todojob}</Text>
          <Button
            title="Remove"
            onPress={() => handleRemoveTodo(todo.id)}
          />
        </View>
      ))}
      <Button
        title="Add Todo"
        onPress={() => navigation.navigate('AddTodo')}
      />
    </View>
  );
};

export default TodoListScreen;
