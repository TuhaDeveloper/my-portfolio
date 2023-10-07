import React from 'react'
import Navbar from '../Sidebar/Navbar'
import './index.css'
import Card from '../Card/Card'
import Wclone from '../../images/wclone.JPG'
import Yclone from '../../images/yclone.JPG'
import Fclone from '../../images/fb.JPG'
import Nclone from '../../images/Netflix.JPG'
import APiPage from '../../images/Api.JPG'
import Sclone from '../../images/spotify.JPG'
import portfolio from '../../images/portfolio.JPG'
import { Link } from 'react-router-dom'

const Projects = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className='projects'>

                <h1>Explore My All Projects</h1>
                <div className='card-component'>
                    <Link to='https://clone-882e0.web.app/' rel="noopener noreferrer" >
                        <Card imageUrl={Yclone} />
                    </Link>
                    <Link to='https://instagram-clone-react-2005.web.app/'>
                        <Card imageUrl={Wclone} />
                    </Link>
                    <Link to='https://sukran.netlify.app/'>
                        <Card imageUrl={portfolio} />
                    </Link>
                    <Link to='https://facebook-clone-24.netlify.app'>
                        <Card imageUrl={Fclone} />
                    </Link>
                    <Link to='https://netflix-clone-24.netlify.app'>
                        <Card imageUrl={Nclone} />
                    </Link>
                    <Link to='https://spotify-app-24.netlify.app'>
                        <Card imageUrl={Sclone} />
                    </Link>
                    <Link to='https://web-page-api.netlify.app'>
                        <Card imageUrl={APiPage} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Projects