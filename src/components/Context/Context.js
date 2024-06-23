import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [header, setHeader] = useState('Style Guide');
  const [data, setData] = useState('');
  const [navOpen, setNavOpen] = useState(false);


  return (
    <ContentContext.Provider value={{ header, setHeader, data, setData,navOpen,setNavOpen }}>
      {children}
    </ContentContext.Provider>
  );
};
