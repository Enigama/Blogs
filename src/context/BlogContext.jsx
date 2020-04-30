import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG_POST':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Blog Post #${state.length + 1}`
        }
      ];
    case 'REMOVE_BLOG_POST':
      return state.filter(item => item.id !== action.payload);
      // const idx = state.findIndex(post => post.id === action.payload);
      // return [
      //   ...state.slice(0, idx),
      //   ...state.slice(idx + 1)
      // ];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({type: 'ADD_BLOG_POST'})
  }
};

const removeBlogPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'REMOVE_BLOG_POST', payload: id})
  }
}

export const {Context, Provider} = createDataContext(
  blogReducer,
  {
    addBlogPost,
    removeBlogPost,
  },
  []
);
