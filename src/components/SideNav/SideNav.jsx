// src/components/Sidebar.js
import React from 'react';
import { Link,Outlet } from 'react-router-dom';
import './SideNav.css';

const Sidebar = ({ markdownFiles }) => {

  return (
    <div className="sideNav">
      <h3>Topics</h3>
      <ol>
        {markdownFiles.map(file => (
          <li key={file}>
            <Link to={`/${file.replace('.md', '')}`}>{file.replace('.md', '')}</Link>
          </li>
        ))}
      </ol>
      <Outlet/>
    </div>
  
  );
};

export default Sidebar;
