import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import RightArrow from '../../../assets/right-arrow.svg';
import DonutChart from './DonutChart';
import Web2Bar1 from './Web2Bar1';
import './MainContainer.scss';
import ShieldIcon from '../../../assets/shield-icon.svg';

Chart.register(
    ArcElement, Tooltip, Legend
);

const MainContainerWeb3 = () => {
    const dotStyle = {
        width: '15px',
        height: '15px',
       // You can change the color as needed
        borderRadius: '50%', // To make it a circle
        margin : '10px',
      };
      const dot={
        display : 'flex',
    alignItems: 'center',
 
      };

  return (
    <div className='health-summary-container'>
        <div className='heading'>
           <div className='title'>Web 2.0 Domains</div>
           <div className='subtitle'><img src={ShieldIcon} alt='shieldIcon'/>100% Safe</div>
           <div className='show-dropdown'>Show:</div>
           <button className='btn btn-light'>This week</button>
           <div className='right-heading'>Manage Web 2.0 Domains <img src={RightArrow} alt='rightArrow'/></div>
        </div>
        <div className='chart-web2'>
        <div className='security-chart'>
            <div className='title'>Web 2.0 summary</div>
            <DonutChart/>
            <div style={dot}><div style={{... dotStyle, backgroundColor: '#ECE200'}}></div><span>Look Alikes</span></div>
            <div style={dot}><div style={{... dotStyle, backgroundColor: '#FF5322'}}></div><span>Total Encroachments</span></div>
            <div style={dot}><div style={{... dotStyle, backgroundColor: '#19BFE3'}}></div><span>Provided Redirections</span></div>
            <div style={dot}><div style={{... dotStyle, backgroundColor: '#1874FF'}}></div><span>Resolved Threats</span></div>
           
           
            
        </div>
            <div className='bar-graph-container'>
                <div className='bar-graph'>
                    <div><Web2Bar1 number='31' color={'#FFE176'} label="Look Alikes"/></div>
                    <div><Web2Bar1 number='20' color={'#FCAC95'} label="Total Encroachments"/></div>
                </div>
                <div className='bar-graph'>
                    <div><Web2Bar1 number='35' color={'#56EBFF'} label="Provided Redirections"/></div>
                    <div><Web2Bar1 number='24' color={'#1874FF'} label="Resolved Threats"/></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainContainerWeb3