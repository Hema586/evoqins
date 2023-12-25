import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import RightArrow from '../../../assets/right-arrow.svg';
import DonutChart from '../web2Domains/DonutChart';
import awayIcon from '../../../assets/away-icon.svg';
import GreenTickIcon from '../../../assets/green-tick.svg';
import './Templates.scss';
import RightArrowOutlined from '../../../assets/right-outlined-arrow.svg';

Chart.register(
    ArcElement, Tooltip, Legend
);

const Templates = () => {
  return (
    <div className='health-summary-container'>
        <div className='heading'>
           <div className='title'>Templates</div>
           <div className='right-heading'>Manage Templates <img src={RightArrow} alt='rightArrow'/></div>
        </div>
        <div className='chart-web2'>
        <div className='security-chart'>
            <div className='title'>Web 2.0 summary</div>
            <DonutChart backgroundColor={['#FF18B2', '#ECE200']} data={[90,10]}/>
        </div>
            <div className='right-column'>
                <div className='second-column'>
                    <div>devevoqins.com<img src={awayIcon} alt='awayIcon'/><img className='right-arrow' src={RightArrowOutlined}/></div>
                    <div>devevoqins.xyz<img src={GreenTickIcon} alt='awayIcon'/><img className='right-arrow' src={RightArrowOutlined}/></div>
                    <div>devevoqins.xyz<img src={GreenTickIcon} alt='awayIcon'/><img className='right-arrow' src={RightArrowOutlined}/></div>
                </div>
                <div className='last-column'>
                    <div className='content'>
                        <div>shop.devevoqins.com</div>
                        <div className='sub-title'>www.example.com</div>
                    </div>
                    <div className='content'>
                        <div>music.devevoqins.com</div>
                        <div className='sub-title'>www.example.com</div>
                    </div>
                    <div className='content'>
                        <div>music.devevoqins.com<img src={awayIcon} alt='awayIcon'/></div>
                        <div className='sub-title-url'><a>Set URL</a></div>
                    </div>
                    <div className='content'>
                        <div>music.devevoqins.com<img src={awayIcon} alt='awayIcon'/></div>
                        <div className='sub-title-url'><a>Set URL</a></div>
                    </div>
                </div>
                <div className='bar-graph'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Templates