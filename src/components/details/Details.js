import React from 'react';
import './Details.scss';
import YellowIcon from '../../assets/yellow-internet-icon.svg';
import PinkIcon from '../../assets/pink-internet-icon.svg';
import PlusIcon from '../../assets/plusIcon.svg';
import GreenTickIcon from '../../assets/green-tick.svg';

const Details = () => {
  return (
    <div className='details-main'>
        <div className='container col-md-4'>
            <div className='heading'>
                <img src={YellowIcon} alt='internetIcon'/>
                devevoqins.com
            </div>
            <div className='body-content'>
                <div className='content'>Status:<span>Active</span><img src={GreenTickIcon} alt='GreenTickIcon'/></div>
                <div className='content'>Auto Renew: <span>On</span></div>
                <div className='content'>Expires on: <span>25 Apr 2022</span></div>
            </div>
        </div>
        <div className='container col-md-4'>
            <div className='heading'>
                <img src={PinkIcon} alt='internetIcon'/>
                devevoqins.in
            </div>
            <div className='body-content'>
                <div className='content'>Status:<span>Active</span><img src={GreenTickIcon} alt='GreenTickIcon'/></div>
                <div className='content'>Auto Renew: <span>On</span></div>
                <div className='content'>Expires on: <span>25 Apr 2022</span></div>
            </div>
        </div>
        <div className='add-container container col-md-4'>
            <img className='add-icon' src={PlusIcon} alt='plusIcon'/>
            <div className='add-title'>Add New Domain</div>
        </div>
    </div>
  )
}

export default Details