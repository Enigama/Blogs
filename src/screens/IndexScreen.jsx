import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList, Button} from 'react-native';
import { Context,  } from "../context/BlogContext";

const IndexScreen = () => {
  const {state, addBlogPost} = useContext(Context);
  return (
    <View>
      <Text>Index screen!)</Text>
      <Button title="Add post"
              onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return(
            <Text>{item.title}</Text>
          )
        }}
      />
    </View>
  )
}
const style = StyleSheet.create({});

export default IndexScreen;
