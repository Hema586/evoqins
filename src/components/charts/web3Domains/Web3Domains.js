import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import RightArrow from '../../../assets/right-arrow.svg';
import DonutChart from '../web2Domains/DonutChart';
import Web2Bar1 from '../web2Domains/Web2Bar1';
import ShieldIcon from '../../../assets/shield-icon.svg';
import './Web3Domains.scss';
import FacebookIcon from '../../../assets/facebook-icon.svg';
import TwitterIcon from '../../../assets/twitter-icon.svg';
import LinkedInIcon from '../../../assets/linked-in-icon.svg';
import InstagramIcon from '../../../assets/instagram-icon.svg';

Chart.register(
    ArcElement, Tooltip, Legend
);

const Web3Domains = () => {

  return (
    <div className='health-summary-container'>
        <div className='heading'>
           <div className='title'>Web 3.0 Domains</div>
           <div className='subtitle'><img src={ShieldIcon} alt='shieldIcon'/>100% Safe</div>
           <div className='show-dropdown'>Show:</div>
           <button className='btn btn-light'>This month</button>
           <div className='right-heading'>Manage Web 3.0 Domains <img src={RightArrow} alt='rightArrow'/></div>
        </div>
        <div className='chart-web2'>
        <div className='security-chart'>
            <div className='title'>Web 3.0 summary</div>
            <DonutChart backgroundColor={['#19BFE3', '#ECE200']} data={[90,10]}/>
        </div>
            <div className='bar-graph-container'>
                <div className='bar-graph'>
                    <div><Web2Bar1 number='3' color={'#ECE200'} label="Look Alikes"/></div>
                </div>
                <div className='social-bars'>
                    <div className='top-bars'>
                        <div className='content'>
                            <div className='title'>
                                <img src={FacebookIcon}/>
                                <div>Facebook</div>
                            </div>
                            <button className='btn btn-light'>Connected</button>
                        </div>
                        <div className='content'>
                            <div className='title'>
                                <img src={TwitterIcon}/>
                                <div>Twitter</div>
                            </div>
                            <button className='btn btn-light'>Connected</button>
                        </div>
                    </div>
                    <div className='top-bars'>
                        <div className='content'>
                            <div className='title'>
                                <img src={LinkedInIcon}/>
                                <div>Linkedin</div>
                            </div>
                            <button className='btn btn-light'>Connected</button>
                        </div>
                        <div className='content'>
                            <div className='title'>
                                <img src={InstagramIcon}/>
                                <div>Instagram</div>
                            </div>
                           <button type="button" class="btn btn-primary" >connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Web3Domains