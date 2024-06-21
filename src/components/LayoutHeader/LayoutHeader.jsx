import React, { useContext } from 'react'
import './LayoutHeader.css'
import { ContentContext } from '../Context/Context';


function LayoutHeader() {
  const { header } = useContext(ContentContext);
  return (
    <div className='layout-header'>{header}</div>
  )
}

export default LayoutHeader