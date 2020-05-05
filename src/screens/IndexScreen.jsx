import React, {useContext, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import { Context,  } from "../context/BlogContext";
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
  const {state, removeBlogPost, getBlogPosts} = useContext(Context);

  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('focus', async () => {
      getBlogPosts();
    });

    return listener;

  }, []);

  return (
    <View>
      <Text>Posts Screen</Text>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item}) => {
          return(
            <TouchableOpacity
              onPress={() => navigation.navigate('Post', { id: item.id })}
            >
              <View style={style.row}>
                <Text style={style.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => removeBlogPost(item.id)}>
                  <Feather style={style.icon} name="trash"/>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
};

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
