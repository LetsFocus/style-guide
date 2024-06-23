// src/components/Sidebar.js
import React, { useContext } from 'react';
import { Link,Outlet } from 'react-router-dom';
import './SideNav.css';
import { ContentContext } from '../Context/Context';

const Sidebar = ({ markdownFiles }) => {
  const { navOpen } = useContext(ContentContext);

  return (
    <div className={navOpen ? "sideNav open" : "sideNav"}>
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
