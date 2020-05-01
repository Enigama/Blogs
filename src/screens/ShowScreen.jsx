import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Context} from "../context/BlogContext";

const ShowScreen = () => {
  const {state} = useContext(Context);
  const {params} = useRoute();
  const blogPost = state.find(post => post.id === params.id);

  return (
    <View>
      <Text>{blogPost.title} - {blogPost.id}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
};

const style = StyleSheet.create({});

export default ShowScreen;
