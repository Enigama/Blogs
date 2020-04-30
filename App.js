import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "./src/context/BlogContext";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";

import {TouchableOpacity} from "react-native";
import {Feather} from '@expo/vector-icons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Blogs"
          options={
            ({navigation}) => (
              {
                headerTitle: 'Blogs',
                headerRight: () =>(
                  <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                    <Feather style={style.addPost} name='plus' />
                  </TouchableOpacity>
                )
              }
            )
          }
          component={IndexScreen}
        />
        <Stack.Screen
          name="Post"
          component={ShowScreen}
        />
        <Stack.Screen
          name="Create"
          component={CreateScreen}
          options={{title: 'Create Post'}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
};
const style = StyleSheet.create({
  addPost: {
    marginHorizontal: 25,
    fontSize: 30
  }
});

export default () => {
  return <Provider>
    <App/>
  </Provider>
}
