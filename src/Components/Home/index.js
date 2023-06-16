import React from 'react'
import logoTitle from '../../images/j.png'
import { Link } from 'react-router-dom'
import 'animate.css'
import './index.scss'
import Logo from '../Logo'
import ImageAnimation from '../Logo'


const Home = () => {
    return (
        <div className=' animate__animated animate__fadeIn   home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    <img className='animate__animated animate__rotateIn' src={logoTitle} />
                    ahid
                    <br />
                    web developer
                </h1>
                <h2 className='animate__animated animate__fadeIn animate__delay-1s animate__backwards'>Frontend Developer /JavaScrift Expart</h2>
                <Link to='/contact' className='animate__animated animate__fadeIn flat-button animate__delay-1s animate__backwards'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home