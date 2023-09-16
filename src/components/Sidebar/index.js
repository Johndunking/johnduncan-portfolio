import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/j.png'
import LogoSubtitle from '../../assets/images/john.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars, faClose, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);

    return (

    <div className='nav-bar'>
        <Link 
        className="logo"
        to="/"
        onClick={() => setShowNav(false)}>
            <img src = {LogoJ} alt="logo" />
            <img className='sub-logo' src = {LogoSubtitle} alt="John" />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#17202A" />

            </NavLink>
            <NavLink  activeclassname="active" className='about-link' to="/about" onClick={() => setShowNav(false)}> 
                <FontAwesomeIcon icon={faUser} color="#17202A" />

            </NavLink>
            <NavLink  activeclassname="active" className="contact-link" to="/contact"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#17202A" />

            </NavLink>
            <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#F08080"
          size="3x"
          className='close-icon' />
        </nav>
        <ul>
            <li>
                <a target="_blank" 
                rel="noreferrer" 
                href="https://www.linkedin.com/in/john-duncan-a79739242/">
                    <FontAwesomeIcon icon={faLinkedin} color="#17202A" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Johndunking">
                    <FontAwesomeIcon icon={faGithub} color="#17202A" />
                </a>
            </li>
        </ul>
        <FontAwesomeIcon 
          onClick={() => setShowNav(true)}
          icon={faBars}
          color="#F08080"
          size="3x"
          className='hamburger-icon' />
    </div>
    )
    }

export default Sidebar