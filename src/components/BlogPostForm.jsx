import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

const BlogPostForm = ({onSubmit, initialValues}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View style={style.container}>
      <Text style={style.label}>Enter Title:</Text>
      <TextInput
        style={style.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={style.label}>Enter Content:</Text>
      <TextInput
        style={style.input}
        value={content}
        onChangeText={(text) => setContent(text)}/>

      <Button
        title="Add Blog post"
        onPress={() => onSubmit(title, content)}
      />
    </View>
  )
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  }
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

export default BlogPostForm;
