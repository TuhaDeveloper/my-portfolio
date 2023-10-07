import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../images/j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './navbar.scss'
import Navbar2 from './Navbar2'
const Navbar = () => {
    return (
        <div>
            {/* it div will show when display will be 350px or less  */}
            <div>
                <Navbar2 />
            </div>
            {/* it div will close when display will be big than 350px  */}

            <div>
                <div className='nav-bar'>
                    <Link className='logo' to='/'>
                        <img src={LogoS} alt='logo' />
                        <span className='letter'>Toha</span>
                    </Link>

                    <nav>
                        <NavLink exact='true' activeclassname='active' to='/' >
                            <FontAwesomeIcon icon={faHome} color='white' />
                        </NavLink>
                        <NavLink exact='true' className='about-link' activeclassname='active' to='/about' >
                            <FontAwesomeIcon icon={faUser} color='white' />
                        </NavLink>
                        <NavLink exact='true' className='projects' activeclassname='active' to='/projects' >
                            <FontAwesomeIcon icon={faBuilding} color='white' />
                        </NavLink>
                        <NavLink exact='true' className='contact' activeclassname='active' to='/contact' >
                            <FontAwesomeIcon icon={faEnvelope} color='white' />
                        </NavLink>

                    </nav>

                    <ul>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jahidul-islam-tuha-908b38267/'>
                                <FontAwesomeIcon icon={faLinkedin} color='white' />
                            </a>
                        </li>
                        <li>
                            <a rel='noreferrer' href='https://github.com/TuhaDeveloper'>
                                <FontAwesomeIcon icon={faGithub} color='white' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/jahid.tuha.3/'>
                                <FontAwesomeIcon icon={faFacebook} color='white' />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar