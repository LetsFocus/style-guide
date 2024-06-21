import { useContext, useEffect, useState } from 'react';
import React from 'react'
import { FiMenu } from 'react-icons/fi';
import './MainLayout.css'
import SideNav from '../SideNav/SideNav';
import LayoutHeader from '../LayoutHeader/LayoutHeader';
import LayoutBody from '../LayoutBody/LayoutBody';
import { useParams } from 'react-router-dom';
import { ContentContext } from '../Context/Context';
import { useAuth } from '../Context/AuthContext';

function MainLayout({markdownFileNames}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { file } = useParams();

    const {setData, setHeader } = useContext(ContentContext);

    useEffect(() => {
      import(`../../markdown/${file}.md`)
        .then(res => fetch(res.default))
        .then(res => res.text())
        .then(content => {
          const firstLine = content.split('\n')[0]; // Assuming first line as header
          setHeader(firstLine.replace(/#/g, '').trim()); // Remove markdown '#' and trim spaces
          setData(content);
        })
        .catch(err => console.error(err));
    }, [file, setHeader, setData]);


    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const { logout } = useAuth();

    return (
      <div className="main-layout">
        <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <SideNav markdownFiles={markdownFileNames} file={file}/>
        </div>
        <div className="main-content">
          <div className="button-container">
            <button className="hamburger-button" onClick={toggleSidebar}>
              <FiMenu size={24} />
            </button>
            <button className='logout' onClick={logout}>Logout</button>
          </div>
          <LayoutHeader/>
          <LayoutBody/>
        </div>
      </div>
    );
}

export default MainLayout