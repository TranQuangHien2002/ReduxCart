// app/screens/AddJobScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodoAsync, updateTodoAsync } from '../reducers/todoReducer';

const AddJobScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const [jobId, setJobId] = useState('');
  const [newJob, setNewJob] = useState('');

  useEffect(() => {
    // Check if the route has a todo, indicating editing mode
    if (route.params && route.params.todo) {
      const todoToEdit = route.params.todo;
      setJobId(todoToEdit.id);
      setNewJob(todoToEdit.todojob);
    }
  }, [route.params]);

  const handleAddOrUpdateJob = () => {
    if (jobId) {
      // If jobId exists, update the existing job
      const updatedTodo = { id: jobId, todojob: newJob };
      dispatch(updateTodoAsync(jobId, updatedTodo));
    } else {
      // If jobId doesn't exist, add a new job
      const newTodo = { id: Date.now().toString(), todojob: newJob };
      dispatch(addTodoAsync(newTodo));
    }

    // Navigate back to the TodoListScreen after adding or updating a job
    navigation.goBack();
  };

  return (
    <View>
      <Text>{jobId ? 'Edit Job' : 'Add Job'}</Text>
      <TextInput
        placeholder="Enter job"
        value={newJob}
        onChangeText={(text) => setNewJob(text)}
      />
      <Button title={jobId ? 'Update Job' : 'Add Job'} onPress={handleAddOrUpdateJob} />
    </View>
  );
};

export default AddJobScreen;
