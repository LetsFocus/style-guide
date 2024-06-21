import React, { createContext, useState } from 'react';

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {
  const [header, setHeader] = useState('Style Guide');
  const [data, setData] = useState('');

  return (
    <ContentContext.Provider value={{ header, setHeader, data, setData }}>
      {children}
    </ContentContext.Provider>
  );
};
