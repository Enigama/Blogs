import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      const {title, content} = action.payload;
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title,
          content
        }
      ];
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

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    dispatch({type: 'ADD_BLOG_POST', payload: {title, content}});
    if (callBack) {
      callBack();
    }
  //  todo if this fun create request add try catch
  //  return async ()
  //  await request inside try, catch show some error!
  }
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'REMOVE_BLOG_POST', payload: id})
  }
};

const editBlogPost = dispatch => {
  return (id, title, content, callBack) => {
    console.log(id, title, content);
    dispatch({type: 'EDIT_BLOG_POST', payload: {id, title, content}})
    if (callBack) {
      callBack();
    }
  }
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    addBlogPost,
    removeBlogPost,
    editBlogPost,
  },
  [{id: 1, title: 'test', content: 'sssss'}]
);
