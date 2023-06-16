import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../images/j.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGift, faHome, faLink, faUser, } from '@fortawesome/free-solid-svg-icons'
import './navbar.scss'
const Navbar = () => {
    return (
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
                        <FontAwesomeIcon icon={faLink} color='gray' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/bd/jahidul-islam-tuha'>
                        <FontAwesomeIcon icon={faGift} color='gray' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/bd/jahidulislamtuha'>
                        <FontAwesomeIcon icon={faLink} color='gray' />
                    </a>
                </li>
            </ul>

        </div>
    )
}

export default Navbar