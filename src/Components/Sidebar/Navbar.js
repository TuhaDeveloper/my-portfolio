import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../images/j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';
import './navbar.scss'
import Navbar2 from './Navbar2'
const Navbar = () => {
    return (
        <div>
            <div>
                <Navbar2 />
            </div>
            <div>
                <div className='nav-bar'>
                    <Link className='logo' to='/'>
                        <img src={LogoS} alt='logo' />
                        <span className='letter'>Toha</span>
                    </Link>

                    <nav>
                        <NavLink exact='true' activeclassname='active' to='/' >
                            <FontAwesomeIcon icon={faHome} color='gray' />
                        </NavLink>
                        <NavLink exact='true' className='about-link' activeclassname='active' to='/about' >
                            <FontAwesomeIcon icon={faUser} color='gray' />
                        </NavLink>
                        <NavLink exact='true' className='contact' activeclassname='active' to='/contact' >
                            <FontAwesomeIcon icon={faEnvelope} color='gray' />
                        </NavLink>

                    </nav>

                    <ul>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jahidul-islam-tuha-908b38267/'>
                                <FontAwesomeIcon icon={faLinkedin} color='gray' />
                            </a>
                        </li>
                        <li>
                            <a rel='noreferrer' href='https://github.com/TuhaDeveloper'>
                                <FontAwesomeIcon icon={faGithub} color='gray' />
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel='noreferrer' href='https://www.facebook.com/jahid.tuha.3/'>
                                <FontAwesomeIcon icon={faFacebook} color='gray' />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Navbar