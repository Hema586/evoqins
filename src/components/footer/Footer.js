import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='copy-right'>Copyright © 2021. Web23 Ltd.</div>
            <div className='mid-footer'>
                <div>Contact</div>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
                <div>FAQs</div>
            </div>
            
            <div>Powered by Evoqins</div>
        </div>
    </div>
  )
}

export default Footer