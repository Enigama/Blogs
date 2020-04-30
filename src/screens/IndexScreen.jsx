import React, {useContext} from 'react';
import {StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';
import { Context,  } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
  const {state, addBlogPost, removeBlogPost} = useContext(Context);
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
            <View style={style.row}>
              <Text style={style.title}>
                {item.title} - {item.id}
              </Text>
              <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                <Feather style={style.icon} name="trash"/>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  }
});

export default IndexScreen;
