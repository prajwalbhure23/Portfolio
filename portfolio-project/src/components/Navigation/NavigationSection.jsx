import React from 'react';
import './NavigationSection.css';
import mail from '../../assets/icons/mail.png';

const NavigationSection = () => {
  return (
      <div className="navigation">
        <div className='navbarContainer'>
          <div className='navLeft'>
            <a className="name" href='./App.js' id='lgo'>Prajwal Bhure</a>
            <span className='profession' id='prfsntg'>web developer</span>
          </div>
          <div className='navRight'>
            <a href='mailto:bhureprajwal23@gmail.com'><img src={mail} alt='' id='cnctlgo'></img></a>
          </div>
        </div>
    </div>
  )
}

export default NavigationSection