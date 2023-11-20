// AddTodoScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actionCreators';

const AddTodoScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState('');

  const handleAddTodo = () => {
    if (todoText.trim() !== '') {
      dispatch(addTodo({ todojob: todoText }));
      navigation.goBack();
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter todo"
        value={todoText}
        onChangeText={setTodoText}
      />
      <Button
        title="Add Todo"
        onPress={handleAddTodo}
      />
    </View>
  );
};

export default AddTodoScreen;
