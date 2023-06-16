import React from 'react'
import Navbar from '../Sidebar/Navbar'
import { Outlet } from 'react-router-dom'
import 'animate.css'
import './index.scss'


const Mainpage = () => {
    return (
        <div className='App'>
            {<Navbar />}
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet />
                <span className='tags bottom-tags'>&lt;/body&gt;
                    <br />
                    <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>


            </div>
        </div>
    )
}

export default Mainpage

