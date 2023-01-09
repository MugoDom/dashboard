import React from 'react';
import './kenya.scss';
import Navbar from '../../../components/navbar/Navbar';
import Sidebar from '../../../components/sidebar/Sidebar';
import RenderMap from '../../../components/map/RenderMap';
import Card from '../../../components/card/Card';
import Chart from '../../../components/pie-chart/Chart';

const Kenya = () => {
  return (
    <div className='kenya'>
      <Sidebar />
      <div className='kenya-container'>
        <Navbar />
        <p className='description'>UNOPS in Kenya manages a growing portfolio of development activities <br></br> providing project management, infrastructure, procurement, human resources and financial management services</p>
        <br></br>
        <hr></hr>

        <div className='first-row'>
          <div className='map'>
            <RenderMap />
          </div>
          <Card />
        </div>
        <div className='second-row'>
          <Chart />
        </div>
      </div>
    </div>
  )
}

export default Kenya