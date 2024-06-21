// src/components/Sidebar.js
import React, { useContext, useEffect } from 'react';
import { Link,Outlet, useParams } from 'react-router-dom';
import './SideNav.css';
import { ContentContext } from '../Context/Context';

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
