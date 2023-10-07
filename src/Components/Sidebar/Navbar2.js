import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Navbar2.scss';
import { NavLink } from 'react-router-dom';
import { faBuilding, faEnvelope, faHome, faUser, } from '@fortawesome/free-solid-svg-icons'

const Navbar2 = () => {

    return (
        <nav className="navbar">
            <ul className='navlink'>
                <NavLink exact='true' activeclassname='active' to='/' >
                    <FontAwesomeIcon icon={faHome} color='gray' />
                </NavLink>

                <NavLink exact='true' className='about-link' activeclassname='active' to='/about' >
                    <FontAwesomeIcon icon={faUser} color='gray' />
                </NavLink>
                <NavLink exact='true' className='projects' activeclassname='active' to='/projects' >
                    <FontAwesomeIcon icon={faBuilding} color='gray' />
                </NavLink>
                <NavLink exact='true' className='contact' activeclassname='active' to='/contact' >
                    <FontAwesomeIcon icon={faEnvelope} color='gray' />
                </NavLink>

            </ul>
        </nav>
    );
};

export default Navbar2;
