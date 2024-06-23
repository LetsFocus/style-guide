import { useContext, useEffect } from 'react';
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
    const { file } = useParams();

    const {setData, setHeader,navOpen,setNavOpen} = useContext(ContentContext);

    useEffect(() => {
      import(`../../markdown/${file}.md`)
        .then(res => fetch(res.default))
        .then(res => res.text())
        .then(content => {
          const firstLine = content.split('\n')[0]; 
          setHeader(firstLine.replace(/#/g, '').trim()); 
          setData(content);
          setNavOpen(false);
        })
        .catch(err => console.error(err));
    }, [file, setHeader, setData, setNavOpen]);


    const toggleSidebar = () => {
      setNavOpen(!navOpen);
    };

    const { logout } = useAuth();

    return (
      <div className="main-layout">
        <div className="sidebar">
          <SideNav markdownFiles={markdownFileNames} file={file}/>
        </div>
        <div className={navOpen ? "main-content shifted" : "main-content"}>
          <div className="button-container">
            <button className={navOpen ? "hamburger-button color" : "hamburger-button"} onClick={toggleSidebar}>
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