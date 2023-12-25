import React from 'react';
import GreenTickIcon from '../../assets/green-tick.svg';
import './Table.scss'

const Table = (props) => {
  return (
    <div style={{marginLeft: props.leftProp, marginRight: props.leftProp}} className='secondary-domain'>
        <div>Secondary Domains</div>
        <table className='table '>
            <thead>
                <tr>
                    <th>Domain Name</th>
                    <th>Status</th>
                    <th>Expiry</th>
                    <th>Redirections</th>
                    <th>More</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>shop.devevoqins.com</td>
                    <td>Active<img src={GreenTickIcon} alt='GreenTickIcon'/></td>
                    <td>25 Jun 2020</td>
                    <td>20</td>
                    <td>Manage</td>
                </tr>
                <tr>
                    <td>shop.devevoqins.in</td>
                    <td>Active<img src={GreenTickIcon} alt='GreenTickIcon'/></td>
                    <td>25 Jun 2020</td>
                    <td>2</td>
                    <td>Manage</td>
                </tr>
                <tr>
                    <td>store.devevoqins.com</td>
                    <td>Active<img src={GreenTickIcon} alt='GreenTickIcon'/></td>
                    <td>25 Jun 2020</td>
                    <td>10</td>
                    <td>Manage</td>
                </tr>
            </tbody>
        
        </table>
    </div>
  )
}

export default Table