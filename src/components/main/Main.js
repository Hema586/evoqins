import React, { useState } from 'react';
import Header from '../header/Header';
import DashboardBar from '../dashboardBar/DashboardBar';
import SubHeader from '../subHeader/SubHeader';
import Details from '../details/Details';
import Table from '../table/Table';
import PricingTable from '../pricingTable/PricingTable';
import HealthSummary from '../charts/healthSummary/HealthSummary';
import MainContainer from '../charts/web2Domains/MainContainer';
import Footer from '../footer/Footer';
import Templates from '../charts/templates/Templates';
import Web3Domains from '../charts/web3Domains/Web3Domains';
import ExpiryTable from '../expiryTable/ExpiryTable';
import MainContainerWeb3 from '../charts/web2Domains/MainContainerWeb3';

const Main = () => {
    const [leftProp, setLeftProp] = useState();
    const [dashboard, setDashboard] = useState(true);

  return (
    <div>
        <Header setLeftProp={setLeftProp}/>
        <DashboardBar dashboard={dashboard} setDashboard={setDashboard}/>
        {!dashboard && <>
        <SubHeader leftProp={leftProp}/>
        <Details/>
        <Table leftProp={leftProp}/>
        <PricingTable leftProp={leftProp}/>
        <ExpiryTable leftProp={leftProp}/>
        </>}
        {dashboard && <>
            <HealthSummary/>
            <MainContainer/>
            <MainContainerWeb3/>
            <Web3Domains/>
            <Templates/>
        </>}
        <Footer/>
    </div>
  )
}

export default Main