import React from 'react';
import './kenya.scss';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import RenderMap from '../../../components/map/RenderMap';

const Kenya = () => {
  return (
    <div className='kenya'>
      <Sidebar />
      <div className='kenya-container'>
        <Navbar />
        <p>Hello from kenya</p>
        <RenderMap />
      </div>
    </div>
  )
}

export default Kenya