import './About.css';
import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import ProjectViewPC from '../../components/ProjectView/ProjectViewPC';
import ProjectViewPCPara from '../../components/ProjectView/ProjectViewPCPara';
import ProjectViewPCKira from '../../components/ProjectView/ProjectViewPCKira';
import ProjectViewPCDraGod from '../../components/ProjectView/ProjectViewPCDraGod';
import ProjectView from '../../components/ProjectView/ProjectView';
import ProjectViewMBKira from '../../components/ProjectView/ProjectViewMBKira';
import ProjectViewMBPara from '../../components/ProjectView/ProjectViewMBPara';
import ProjectViewMBDraGod from '../../components/ProjectView/ProjectViewMBDraGod';
import { useState, useEffect } from "react";


function About(){
  const [showProjectView, setShowProjectView] = useState(false);
  const [isMB, setIsMB] = useState(window.innerWidth <= 767);
 const [selectedProjectKey, setSelectedProjectKey] = useState(null);
  const [fadeOut, setFadeOut] = useState(false);
  const projectComponents = {
    freya: { mobile: ProjectView, pc: ProjectViewPC },
    kira: { mobile: ProjectViewMBKira, pc: ProjectViewPCKira },
    para: { mobile: ProjectViewMBPara, pc: ProjectViewPCPara },
    dragonGoddess: { mobile: ProjectViewMBDraGod, pc: ProjectViewPCDraGod }
  };

  const handleProjectClick = (key) => {
    setSelectedProjectKey(key);
    setShowProjectView(true);
    setFadeOut(true);
    document.body.style.overflow = 'hidden';
    
  };
   const handleClose = () => {
    setShowProjectView(false);
    setFadeOut(false);
    document.body.style.overflow = '';
    setSelectedProjectKey(null);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMB(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const ProjectComponent = selectedProjectKey ? (isMB ? projectComponents[selectedProjectKey].mobile : projectComponents[selectedProjectKey].pc) : null;

    return(
<>
<div className={`about-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="resume">
        <div className="resume-row resume-row1">
          <div className="sticky-wrapper">
            <div className="resume-info-container">
              <div className="resume-profile-container">
                <div className="resume-profile-photo--frame">
                  <div className="resume-profile-photo" />
                </div>
                <div className="profile-text-container">
                  <p>Kaili Chang</p>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
            <div className="resume-info-container">
              <p className="resume-title">Motto</p>
              <p>
                "Things we lose have a way of coming back to us in the end, if not always in the way we expect."
              </p>
            </div>
          </div>
        </div>

        <div className="resume-row resume-row2">
          <div className="resume-info-container">
            <p className="resume-title">Education</p>
            <p className=''>Program of Learning Sciences,</p>
            <p className=''>National Taiwan Normal University</p>
            <p className='resume-grey-text'>2018-2022</p>
          </div>
          <div className="resume-info-container">
            <p className="resume-title">About me</p>
            
                <p  className='resume-paragraph'>
                  Hi! I'm Kaili Chang, a web designer with over two years of experience. 
                  I previously worked as a web visual designer for a gaming news website, 
                  where I specialized in Figma prototyping, responsive design, 
                  and front-end coding. I have improved website usability, \
                  increased user engagement, and optimized site performance scores. 
                  I’m capable of handling projects from design to coding independently, as well as collaborating effectively with project managers and developers.
                </p>
          </div>
            <div className="resume-info-container">
                <p className='resume-title'>Projects</p>
                <div className='resume-projects-container'>

                  <div className='resume-project'>
                    <div className='resume-project-cover' onClick={() => handleProjectClick('freya')}>
                      <LazyLoadImage src="/cover-freya.png" alt="Gaming landing page-Freya" effect='opacity'/>
                      <div className='more-info-icon'>
                        <div className='more-info-icon-container'></div>
                      </div>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#Web Visual Design</p>
                      <p>#Frontend Programming</p>
                    </div>
                    <p>Gaming Landing Page - Freya</p>
                  </div>
                  <hr />
                  <div className='resume-project'  onClick={() => handleProjectClick('dragonGoddess')}>
                    <div className='resume-project-cover'>
                      <LazyLoadImage src="/cover-dragonGoddess.png" alt="Dragon Goddess Gaming Site" effect='opacity'/>
                     {/* <NavLink to="/works#section1">*/}
                      <div className='more-info-icon' id="project-dragonGoddess">
                        <div className='more-info-icon-container'></div>
                      </div>
                      {/*
                      </NavLink>
                      */}
                    </div>
                    <div className='resume-project-tags'>
                      <p>#Web Visual Design</p>
                      <p>#Frontend Programming</p>
                    </div>
                    <p>Gaming Landing Page - Dragon Goddess</p>
                    
                  </div>
                  <hr />
                  <div className='resume-project' onClick={() => handleProjectClick('kira')}>
                    <div className='resume-project-cover'>
                      <LazyLoadImage src="/cover-kira.png" alt="kirabase x paradaily theme pages" effect='opacity' />
                      <div className='more-info-icon' >
                        <div className='more-info-icon-container'></div>
                      </div>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#RWD Design</p>
                      <p>#UI Engineering</p>
                    </div>
                    <p>Kirabase x Paradaily Theme Pages</p>
                  </div>
                  <hr/>
                  <div className='resume-project'  onClick={() => handleProjectClick('para')}>
                    <div className='resume-project-cover'>
                      <LazyLoadImage src="/cover-para.png" alt="Paradaily News Platform" effect="opacity"/>
                      <div className='more-info-icon'>
                        <div className='more-info-icon-container'></div>
                      </div>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#RWD Design</p>
                      <p>#UI Engineering</p>
                      <p>#Frontend Optimization</p>
                    </div>
                     <p>Paradaily's News Platform</p>
                  </div>


                </div>
                
            </div>  
        </div>

        <div className="resume-row resume-row3">
            <div className="sticky-wrapper">
                <div className="resume-info-container">
                    <p className="resume-title">Experience</p>
                            <ul className='resume-experience-list'>
                                <li>
                                    <p className='resume-subtitle'>Part-time Research Assistant</p>
                                    <p className='resume-smaller-text'>School of Learning Informatics, National Taiwan Normal University</p>
                                    <p className='resume-grey-text'>Sep 2019 - Jun 2022</p>
                                </li>
                                <li>
                                    <p className='resume-subtitle'>Graphic & Web Designer</p>
                                    
                                    <p className='resume-smaller-text'>超脫象限股份有限公司</p>
                                    <p className='resume-grey-text'>Mar 2023 - Apr 2025</p>
                                </li>
                                
                            </ul>
                </div>
                <div className="resume-info-container">
                    <p className='resume-title'>Language</p>
                    <div className='resume-languages-skill'>
                      <p>English: TOEIC 935</p>
                      <p>Japanese: JLPT N2</p>
                    </div>

                </div> 
                <div className="resume-info-container">
                    <p className='resume-title'>Skills</p>
                    <div className='resume-skill-box'>
                        <p className='resume-subtitle'>Front-End</p>
                        <div className='resume-skill-list'>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                            </ul>
                            <ul>
                                <li>React</li>
                                <li>WordPress</li>
                                <li>Git</li>
                            </ul>
                        </div>
                            <p className='resume-subtitle'>Design APP</p>
                            <div className='resume-skill-list'>
                                <ul>
                                    <li>Figma</li>
                                    <li>Photoshop</li>
                                    <li>Blender</li>
                                </ul>
                            </div>
                    </div>  
                </div>
            </div>
        </div>
      </div>
    </div>
{showProjectView && ProjectComponent && (
        <ProjectComponent onClose={handleClose} />
      )}
</>

    )

}
export default About;