// src/components/MarkdownRenderer/Render.js
import React, {  useContext } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { ContentContext } from '../Context/Context';
import './Render.css';

const MarkdownRenderer = () => {
  const { data } = useContext(ContentContext);

  return (
    <div className="markdown-content">
      <ReactMarkdown>{data}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
