// TodoItem.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../actionCreators';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleEditTodo = () => {
    // Implement logic to navigate to the edit screen or show an edit modal
    // You can dispatch an action to update the state for editing as well
    console.log(`Editing todo with id ${todo.id}`);
  };

  return (
    <View>
      <Text>{todo.todojob}</Text>
      <TouchableOpacity onPress={handleEditTodo}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRemoveTodo}>
        <Text>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;
