import React from 'react';
import './ResumeSection.css';
import resumeicon from '../../assets/icons/resume.png';
import resume from '../../../public/resume.pdf'

const ResumeSection = () => {
  return (
    <div className='resumeSection'>
        <div className="head">
            <a id='hdng' href={resume} download>download my resume !</a>
        </div>
        <div className="resumeIcon">
            <img id='rimg' src={resumeicon} alt=''></img>
        </div>
    </div>
  )
}

export default ResumeSection;