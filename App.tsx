import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './src/Screen2';
import DetailScreen from './src/DetailScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux/Store';
import LoginPage from './src/LoginPage';

type Props = {}

const Stack = createNativeStackNavigator();

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginPage'>
          <Stack.Screen name='Login Page' component={LoginPage}></Stack.Screen>
          <Stack.Screen name='UserList Screen' component={Screen2}></Stack.Screen>
          <Stack.Screen name='Detail Screen' component={DetailScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
