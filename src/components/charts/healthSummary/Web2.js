import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(
    ArcElement, Tooltip, Legend
);

const Web2 = () => {
    const data = {
        datasets: [{
            data: [100],
            backgroundColor: ['#2CA6FF'],
            borderWidth : 0,
            cutout : 85
        }],
    
    }
    const options = {
        cutout: '80%', // Adjust this value for the size of the hole in the middle
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          enabled: false,
        },
        animation: {
          animateRotate: false,
          animateScale: false,
        },
      };
  return (
    
    // <div className='donut-chart'>
    //     <Doughnut data={data}>
    //     </Doughnut>
    // </div>
    <div  className='donut-chart' style={{ maxWidth: '300px', position: 'relative' }}>
    <Doughnut data={data}  />
    <div style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div style={{ fontSize: '20px', color: '#333', fontWeight: 'bold' }}>100%</div>
      <div style={{ fontSize: '12px', color: '#777' }}>data</div>
    </div>
  </div>

  )
}

export default Web2
// import React, { useRef, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';

// const Web2 = () => {
//   const chartRef = useRef(null);

//   const options = {
//     plugins: {
//       legend: {
//         display: false,
//       },
//       beforeDraw: (chart) => {
//         const ctx = chart.ctx;
//         const width = chart.width;
//         const height = chart.height;
//         const text = 'Your Text Here';
// ctx.restore();
//         ctx.font = '14px Arial';
//         ctx.fillStyle = '#000'; // Set the color of the text
//         ctx.textAlign = 'center';
//         ctx.fillText(text, width / 2, height / 2);
//         ctx.save();
//       },
//     },
//     cutout: 85,
//   };
// const data = {
//     datasets: [
//       {
//         data: [100],
//         backgroundColor: ['#2CA6FF'],
//         borderWidth: 0,
//       },
//     ],
//   };
// return (
//     <div className='donut-chart'>
//       <Doughnut data={data} options={options} ref={chartRef} />
//     </div>
//   );
// };

// export default Web2;
