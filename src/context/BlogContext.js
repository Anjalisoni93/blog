import React from "react";


const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={[1, 2, 3]}>
    {/* So children in this case is 
    essentially an App component that 
    we are passing down as a prop */}
    {children}
  </BlogContext.Provider>
};

export default BlogContext;