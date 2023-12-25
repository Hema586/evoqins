import React from 'react';
import './ExpiryTable.scss';

const ExpiryTable = (props) => {
  return (
        <div style={{marginLeft: props.leftProp, marginRight: props.leftProp}} className='recommended-domain'>
        <div>Expiring Soon</div>
        <table className='table table-borderless'>
            <thead>
                <tr>
                    <th>Domain Name</th>
                    <th>Expiry on</th>
                    <th>Auto Renewal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>newevoqins.xyz</td>
                    <td>25 Aug 2021</td>
                    <td className='renewal-off'>Off</td>
                    <td><button className='btn btn-primary'>Renew</button></td>
                </tr>
                <tr>
                    <td>newevoqins.co.in</td>
                    <td>25 Aug 2021</td>
                    <td className='renewal'>On</td>
                    <td><button className='btn btn-light'>Will renew on 25 Aug 2021</button></td>
                </tr>
                <tr>
                    <td>newevoqins.com</td>
                    <td>25 Aug 2021</td>
                    <td className='renewal-off'>Off</td>
                    <td><button className='btn btn-primary'>Renew</button></td>
                </tr>
            </tbody>
        
        </table>
    </div>
  )
}

export default ExpiryTable