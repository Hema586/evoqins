import React from 'react';
import './DashboardBar.scss';
import dashBoardIcon from '../../assets/dashboard.svg';
import domainIcon from '../../assets/domains.svg';
import reportIcon from '../../assets/reports.svg';
import socialIcon from '../../assets/social.svg';
import templatesIcon from '../../assets/templates.svg';
import couponsIcon from '../../assets/coupons.svg';

const DashboardBar = ({dashboard, setDashboard}) => {
  return (
    <div className='dashboard-bar'>
        <div className={dashboard ? 'item active dashboard' : 'item dashboard'} onClick={()=>setDashboard(true)}>
            <img src={dashBoardIcon} alt='dashBoardIcon'/>
            Dashboard
        </div>
        <div className={!dashboard ? 'item active domains' : 'item domains'} onClick={()=>setDashboard(false)}>
            <img src={domainIcon} alt='domainIcon'/>
            Manage Domains
        </div>
        <div className='item reports'>
            <img src={reportIcon} alt='reportIcon'/>
            Reports
        </div>
        <div className='item social'>
        <img src={socialIcon} alt='socialIcon'/>
            Social Media Accounts
        </div>
        <div className='item templates'>
        <img src={templatesIcon} alt='templatesIcon'/>
            Templates
        </div>
        <div className='item coupons'>
        <img src={couponsIcon} alt='couponsIcon'/>
            Coupons
        </div>
    </div>
  )
}

export default DashboardBar