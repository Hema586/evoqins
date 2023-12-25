import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import DonutChart from '../web2Domains/DonutChart';

Chart.register(
    ArcElement, Tooltip, Legend
);

const  SecurityScore = () => {


  return (
    <div   style={{   position: 'relative' }}>
      
    <div   style={{   position: 'relative' }}>
    <DonutChart tempData={[100]} color={['#6AFF70']}/>
    <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{  textAlign: 'center',fontFamily: 'Lexend',fontSize: '24px',fontStyle: 'normal',fontWeight: '600',lineHeight: 'normal'}}>900</div>
      <div style={{ fontSize: '12px', color: '#777' }}>Excellent</div>
    </div>
  </div>
  <p style={{  position: 'absolute',bottom:'0',left:'-10px'}}>300</p>
  <p style={{ position: 'absolute' ,bottom:'0',right:'-10px'}}>900</p>
  
  </div>
  )
}

export default  SecurityScore