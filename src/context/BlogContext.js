import React, { useReducer } from "react";


const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'add_blogpost':
      return [...state, { title: `Blog Post #${state.length + 1}` }] ;
    default: 
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: 'add_blogpost' });
  };

  return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
    {/* So children in this case is 
    essentially an App component that 
    we are passing down as a prop */}
    {children}
  </BlogContext.Provider>
};

export default BlogContext;