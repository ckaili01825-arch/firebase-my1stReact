import './About.css';
import { NavLink } from 'react-router-dom';
function About(){
    
    return(
<>
<div className="about-container">
      <div className="resume">
        <div className="resume-row resume-row1">
          <div className="sticky-wrapper">
            <div className="resume-info-container">
              {/* 個人資料 */}
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p  className='resume-paragraph'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
          </div>
            <div className="resume-info-container">
                <p className='resume-title'>Projects</p>
                <div className='resume-projects-container'>
                  <div className='resume-project'>
                    <div className='resume-project-cover'>
                      <img src="/project01.png" alt="" />
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
                  <hr />
                  <div className='resume-project'>
                    <div className='resume-project-cover'>
                      <img src="/project04.png" alt="" />
                      <NavLink to="/works#section1">
                      <div className='more-info-icon'>
                        <div className='more-info-icon-container'></div>
                      </div>
                      </NavLink>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#Web Visual Design</p>
                      <p>#Frontend Programming</p>
                    </div>
                    <p>Gaming Landing Page - Freya</p>
                  </div>
                  <hr />
                  <div className='resume-project'>
                    <div className='resume-project-cover'>
                      <img src="/project04.png" alt="" />
                      <div className='more-info-icon'>
                        <div className='more-info-icon-container'></div>
                      </div>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#Web Visual Design</p>
                      <p>#Frontend Programming</p>
                    </div>
                    <p>Gaming Landing Page - Dragon Goddess</p>
                    
                  </div>
                  <hr />
                  <div className='resume-project'>
                    <div className='resume-project-cover'>
                      <img src="/project04.png" alt="" />
                      <div className='more-info-icon'>
                        <div className='more-info-icon-container'></div>
                      </div>
                    </div>
                    <div className='resume-project-tags'>
                      <p>#RWD Design</p>
                      <p>#UI Engineering</p>
                    </div>
                    <p>#Kirabase x Paradaily Theme Pages</p>
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
                                <li>WebGL</li>
                                <li>WordPress</li>
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
</>

    )

}
export default About;