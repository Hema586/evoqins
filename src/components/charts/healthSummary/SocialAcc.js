import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(
    ArcElement, Tooltip, Legend
);

const SocialAcc = () => {
    const data = {
        datasets: [{
            data: [100],
            backgroundColor: ['#56EBFF'],
            borderWidth : 0,
            cutout : 85
        }],
    
    }

  return (
    <div  className='donut-chart' style={{ maxWidth: '300px', position: 'relative' }}>
    <Doughnut data={data}  />
    <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{ fontSize: '20px', color: '#333', fontWeight: 'bold' }}>100%</div>
      <div style={{ fontSize: '12px', color: '#777' }}>data</div>
    </div>
  </div>
  )
}

export default SocialAcc