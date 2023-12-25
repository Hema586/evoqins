import React from 'react';
import './SubHeader.scss';
import internetIcon from '../../assets/internet-icon.svg';

const SubHeader = (props) => {
  return (
    <div style={{marginLeft: props.leftProp, marginRight: props.leftProp}} className='sub-header'>
        <div className='web-btn-container'>
            <button className='btn'>Web 2.0</button>
            <button className='btn'>Web 3.0</button>
        </div>
        <div className='content'>Your Web 2.0 Domains</div>
        <div className='domains-header'>
            <div className='active'>Active Domains (2)</div>
            <div>Expired Domains</div>
            <button className='btn btn-outline-info'><img src={internetIcon} alt='internetIcon'/>Link Outside Domains</button>
        </div>
    </div>
  )
}

export default SubHeader