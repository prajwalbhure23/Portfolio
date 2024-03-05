import React from 'react';
import './ProjectsSection.css';

import Blogger from '../../assets/images/Blogger.png';
import VideoLibrary from '../../assets/images/VideoLibrary.png';
 import Weather from '../../assets/images/Weather.png';

const ProjectsSection = () => {

    const projects = [
        {
            id: 1,
            pImage: Blogger,
            pName: 'Blogger',
            pDescrip: 'A full stack Blogging Application using MERN stack.',
            codeViewLink: 'https://github.com/prajwalbhure23/Blogger--Full-Stack-Blog-App',
        },
        {
            id: 2,
            pImage: VideoLibrary,
            pName: 'VideoLibrary Application',
            pDescrip: 'A Video Library Application where Users can access videos uploaded by the Admin',
            codeViewLink: 'https://github.com/prajwalbhure23/VideoLibrary-end-to-end-'
        },
        {
            id: 3,
            pImage: Weather,
            pName: 'Weather',
            pDescrip: 'A Weather Application Built with vanilla javascript.',
            codeViewLink: 'https://github.com/prajwalbhure23/Weather'
        }
    ];

    return (
        <div className='projectsSection'>
            <div className="projectsHead" id='prjcthd'><span></span>My Projects</div>
            <div className="projectsGrid" id='prjctgrd'>
                {
                    projects.map(project => (
                        <div className="projectCard" id='prjctcrd' key={project.id}>
                            <div className="projectImage" id='prjctimg'>
                                <img src={project.pImage} alt=''></img>
                            </div>
                            <div className="projectAbout">
             
                                <div className="projectName" id='prjctnme'>{project.pName}</div>
                                <div className="projectDescrip" id='prjctdcrp'>{project.pDescrip}</div>
                                <div className="projectActions">
                                    
                                    <a href={project.codeViewLink} id='vwbtn'>Link to Code</a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectsSection;