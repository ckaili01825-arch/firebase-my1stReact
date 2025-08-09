import { useState } from 'react'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/public/vite.svg'
import emailIcon from '../../assets/icon_email.svg'
import dialogueIcon from '../../assets/icon_dialogue.svg'
import websiteIcon from '../../assets/icon_website.svg'
import './Home.css';
import ParallaxBackground from '../../components/ParallaxBackground';
import { NavLink } from 'react-router-dom';

/*
import Navbar from '../../components/Navbar/Navbar';
*/
function Home(){
     const [count, setCount] = useState(0);
      return (
        <>
        {/*
        <Navbar /> 
        */}
        <div className="container">
          {/*<ParallaxBackground/>*/}
          <div className="home">
            <div className="home-info-container">
              <div className="home-profile-container">
                <div className="home-profile-photo--frame">
                  <div className="home-profile-photo" />
                </div>
                <div className="profile-text-container">
                  <p>Kaili Chang</p>
                  <p>Web Designer</p>
                </div>
              </div>
            </div>
            <div className="home-info-row">            
                <div className = "home-notification">
                  <div className="icon">
                    <img src={websiteIcon} alt="e-mail icon" />
                  </div>
                 <p className="animated-sentence">
                    <span className="word">Hi!</span>
                    <span className="word">I'm</span>
                    <span className="word">Kaili.</span>
                    <span className="word">Welcome</span>
                    <span className="word">to</span>
                    <span className="word">my</span>
                    <span className="word">portfolio</span>
                    <span className="word">website</span>
                  </p>
                </div>
              <div className = "home-notification">
                    <div className="icon">
                      <img src={emailIcon} alt="e-mail icon" />
                    </div>
                  <p className='notification-text'>
                      contact: ckaili01825@gmail.com
                    </p>
              </div>
              <div className = "home-notification about-website">
                    <div className="icon">
                      <img src={dialogueIcon} alt="e-mail icon" />
                    </div>
                 
                      <p className='notification-text'>
                        I am a web designer with over 2 years of work experiences. <br />
                        First of all, welcome to my website!<br />
                        This is a website about me, my works, and my contact information.<br />
                        Hope you have a nice tour here!<br />
                      </p>
                    
                    <div className='link-to-about-me'>
                      <div className='link-to-about-me-container'>
                        <div className='link-to-about-me-icon-surrounding'></div>
                        <NavLink to="/about"><div className='link-to-about-me-icon'></div></NavLink>
                      </div>
                    </div>

                    
              </div>

            </div>

          </div>
          {/*
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        */ }


                 
        </div>
 
        </>
      )
}

export default Home;