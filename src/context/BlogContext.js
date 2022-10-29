import React from "react";


const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider>
    {/* So children in this case is essentially an App component that we are passing down as a prop */}
    {children}
  </BlogContext.Provider>
};