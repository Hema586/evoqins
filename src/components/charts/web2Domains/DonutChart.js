import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './DonutChart.scss';
import Web2 from '../healthSummary/Web2';

Chart.register(
    ArcElement, Tooltip, Legend
);

const DonutChart = (props) => {

    const data = {
        datasets: [{
            data:props.tempData|| props.data || [30, 30, 10, 30],
            backgroundColor: props.color||props.backgroundColor || ['#FCAC95', '#1874FF', '#ECE200', '#2CA6FF'],
            borderWidth : 0
        }],
    
        // labels: [
        //     'Total Encroachments',
        //     'Resolved Threats',
        //     'Look Alikes',
        //     'Provided Redirections'
        // ]
    }

  return (
    <div className='donut-chart'>
        <Doughnut data={data}>
        </Doughnut>
    </div>
  )
}

export default DonutChart