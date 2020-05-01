import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {Context} from "../context/BlogContext";
import {useRoute} from '@react-navigation/native';

const EditScreen = ({navigation}) => {
  const {editBlogPost} = useContext(Context);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const {params} = useRoute();

  return (
    <View style={style.container}>
      <Text style={style.label}>Enter New Title:</Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={style.label}>Enter New Content:</Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={(text) => setContent(text)}/>

      <Button
        title="Edit post"
        onPress={() => editBlogPost(params.id, title, content, () =>{
          navigation.navigate('Blogs')
        })}
      />
    </View>
  )
};
const style = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
  }
});

export default EditScreen;
