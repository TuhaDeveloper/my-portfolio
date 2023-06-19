import React from 'react'
import EmailForm from '../EmailForm'
import Navbar from '../Sidebar/Navbar'
import './index.scss'
import ImageAnimation from '../Logo'

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='animate__animated animate__fadeIn   Email-page'>
                <div className='Email'>
                    <h1><br />Email me to know more Information <br /></h1>

                </div>
                <div className='email-des'>
                    <p>this is some demo text to show and understant
                        and also i am adding some text to incress new views
                        this is some demo text to show and understant
                    </p>
                </div>
            </div>
            <div className='email-form'>
                <EmailForm />

            </div>
        </div>
    )
}
