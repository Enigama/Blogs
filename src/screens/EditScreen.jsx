import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from "../context/BlogContext";
import {useRoute} from '@react-navigation/native';
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({navigation}) => {
  const {state, editBlogPost} = useContext(Context);
  const {params} = useRoute();

  const blogPost = state.find(blogPost => blogPost.id === params.id);

  return <BlogPostForm
    initialValues={{title: blogPost.title, content: blogPost.content}}
    onSubmit={(title, content) => {
      editBlogPost(params.id, title, content, () => navigation.pop());
    }
  }/>
};

export default EditScreen;
