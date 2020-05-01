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
      const posEditingPost = state.findIndex(post => post.id === action.payload.id);
      const editingPost = state.find(post => post.id === action.payload.id);
      editingPost.title = action.payload.title;
      editingPost.content = action.payload.content;

      return [
        ...state.slice(0, posEditingPost),
        editingPost,
        ...state.slice(posEditingPost + 1)
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callBack) => {
    dispatch({type: 'ADD_BLOG_POST', payload: {title, content}});
    callBack();
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
    dispatch({type: 'EDIT_BLOG_POST', payload: {id, title, content}})
    callBack();
  }
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    addBlogPost,
    removeBlogPost,
    editBlogPost,
  },
  []
);
