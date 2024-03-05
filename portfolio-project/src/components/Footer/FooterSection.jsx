import React from 'react';
import './FooterSection.css';

import instagram from '../../assets/icons/instagram.png';
import github from '../../assets/icons/github.png';

const FooterSection = () => {
  return (
    <footer>
      <div className='bottom' id='btm'>
        <div className='bottomleft'>
          <div className='hiremeHead' id='hrmhd'>
            <span></span>Hire me 
          </div>
          <div className='hiremeDesc' id='hrmdsk'>
          🚀 Let's make magic happen! Ready to elevate your project? Whether you need a stunning website, robust web application, or innovative digital solution, I've got you covered. Reach out today to start the journey towards success. I'm excited to hear from you and bring your ideas to life!
          </div>
        </div>

        <div className='bottomright' id='btmrght'>
          <div className='connectHead' id='cncthd'>
            <span></span>Contact me
          </div>
          <div className='connectLogo' id='contlgo'>
            <a href='http://www.instagram.com/prajwal.___bhure/'><img src={instagram} alt=''></img></a>
            <a href='https://github.com/prajwalbhure23'><img src={github} alt=''></img></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection