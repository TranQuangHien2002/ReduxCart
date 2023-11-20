// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import TodoListScreen from './app/screens/TodoListScreen';
import AddJobScreen from './app/screens/AddJobScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TodoList">
          <Stack.Screen name="TodoList" component={TodoListScreen} />
          <Stack.Screen name="AddJob" component={AddJobScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
