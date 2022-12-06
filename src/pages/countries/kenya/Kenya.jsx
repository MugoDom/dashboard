import React from 'react';
import './kenya.scss';
import './kenya.css';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import RenderMap from '../../../components/map/RenderMap';
import Card from '../../../components/card/Card';

const Kenya = () => {
  return (
    <div className='kenya'>
      <Sidebar />
      <div className='kenya-container'>
        <Navbar />
        <p>Hello from kenya</p>
        <div className='first-row'>
          <div className='map'>
            <RenderMap />
          </div>
          <Card />
        </div>
      </div>
    </div>
  )
}

export default Kenya