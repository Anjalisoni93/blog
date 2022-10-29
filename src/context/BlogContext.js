import React from "react";


const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const BlogPosts = [
    { title: 'Blog Post #1'},
    { title: 'Blog Post #2'}
  ];

  return <BlogContext.Provider value={BlogPosts}>
    {/* So children in this case is 
    essentially an App component that 
    we are passing down as a prop */}
    {children}
  </BlogContext.Provider>
};

export default BlogContext;