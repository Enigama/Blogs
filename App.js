import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "./src/context/BlogContext";
import IndexScreen from "./src/screens/IndexScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blogs"
          options={{title: 'Blogs'}}
          component={IndexScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const style = StyleSheet.create({});

export default () => {
  return <Provider>
    <App/>
  </Provider>
}
