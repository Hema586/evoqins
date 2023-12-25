import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './HealthSummary.scss';
import RightArrow from '../../../assets/right-arrow.svg';
import Web2 from './Web2';
import Web3 from './Web3';
import SocialAcc from './SocialAcc';
import SecurityScore from './SecurityScore';

Chart.register(
    ArcElement, Tooltip, Legend
);

const HealthSummary = () => {
    const data = {
        datasets: [{
            data: [100],
            backgroundColor: ['#6AFF70'],
            borderWidth : 0
        }],
    
    }

  return (
    <div className='health-summary-container'>
        <div className='heading'>
           <div className='title'>Health Summary</div>
           <div className='show-dropdown'>Show:</div>
           <button className='btn btn-light'>This month</button>
           <div className='right-heading'>View reports <img src={RightArrow} alt='rightArrow'/></div>
        </div>
        <div className='donut-chart'>
            <div className='security-chart'>
                <div className='title'>security score</div>
                <SecurityScore/>
            </div>
            <div className='web-2'>
                <div className='title'>Web 2.0 Domains</div>
                <Web2 />
            </div>
            <div className='web-2'>
                <div className='title'>Web 3.0 Domains</div>
                <Web3 />
            </div>
            <div className='web-2'>
                <div className='title'>social accounts</div>
                <SocialAcc className='social-acc'/>
            </div>
        </div>
    </div>
  )
}

export default HealthSummary