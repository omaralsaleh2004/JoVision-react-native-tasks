// TextProvider.js
import React, { useState } from 'react';
import TextContext from './TextContext';

const TextProvider = ({ children }) => {
  const [sharedText, setSharedText] = useState('');

  return (
    <TextContext.Provider value={{ sharedText, setSharedText }}>
      {children}
    </TextContext.Provider>
  );
};

export default TextProvider;
