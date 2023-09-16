import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoJ from '../../assets/images/j.png'
import LogoSubtitle from '../../assets/images/john.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src = {LogoJ} alt="logo" />
            <img className='sub-logo' src = {LogoSubtitle} alt="John" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#17202A" />

            </NavLink>
            <NavLink exact="true" activeclassname="active" className='about-link' to="/about">
                <FontAwesomeIcon icon={faUser} color="#17202A" />

            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#17202A" />

            </NavLink>
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
    </div>
)

export default Sidebar