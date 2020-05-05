import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'GET_BLOG_POSTS':
      return action.payload;

    case 'REMOVE_BLOG_POST':
      return state.filter(item => item.id !== action.payload);
      // const idx = state.findIndex(post => post.id === action.payload);
      // return [
      //   ...state.slice(0, idx),
      //   ...state.slice(idx + 1)
      // ];

    case 'EDIT_BLOG_POST':
      return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost);
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'GET_BLOG_POSTS', payload: response.data})
  }
};

const addBlogPost = dispatch => {
  return async (title, content, callBack) => {
    await jsonServer.post('/blogposts', {title, content})
    // dispatch({type: 'ADD_BLOG_POST', payload: {title, content}});

    if (callBack) {
      callBack();
    }
  }
};

const removeBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({type: 'REMOVE_BLOG_POST', payload: id})
  }
};

const editBlogPost = dispatch => {
  return async (id, title, content, callBack) => {
    await jsonServer.put(`/blogposts/${id}`, {title, content});

    dispatch({type: 'EDIT_BLOG_POST', payload: {id, title, content}});
    if (callBack) {
      callBack();
    }
  }
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    getBlogPosts,
    addBlogPost,
    removeBlogPost,
    editBlogPost,
  },
  []
);
