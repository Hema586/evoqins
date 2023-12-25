import React from 'react';
import { Chart, BarElement, Tooltip, CategoryScale, LinearScale, scales } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Web2Bar1.scss';

Chart.register(
    BarElement, Tooltip, CategoryScale,LinearScale
);

const Web2Bar1 = (props) => {
    const emptyColor = '';
    const dataArray = [5, 0, 0, 10, 0, 5, 5];
    const maxValue = Math.max(...dataArray);
    const data = {
        datasets: [{
            data: dataArray,
            backgroundColor: dataArray.map(val=> (val == 0 ? emptyColor : props.color)),
            borderWidth : 1,
            borderRadius : 100,
            barThickness : 10,
            label : props.label,
        }
    ],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ]
    }

  return (
    <div className='bar-chart'>
        <h2>{props.number}</h2>
        <Bar data={data} options={
            {scales:{
                y:{
                    beginAtZero:true,
                    stacked : true
                }
                }
            }
        }>
        </Bar>
    </div>
  )
}

export default Web2Bar1