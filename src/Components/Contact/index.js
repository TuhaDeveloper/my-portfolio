import React from 'react'
import EmailForm from '../EmailForm'
import Navbar from '../Sidebar/Navbar'
import './index.scss'

export const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className='animate__animated animate__fadeIn   Email-page'>
                <div className='Email'>
                    <h1><br />Inbox Open for Opportunities: Reach Out and Let's Collaborate <br /></h1>
                </div>
                <div className='email-des'>
                    <p>
                        Ready to turn your ideas into reality or have any questions about my work?
                        Reach out using the contact form below. Let's create something extraordinary together! Your message is just a click away.
                    </p>
                </div>
            </div>
            <div className='email-form'>
                <EmailForm />

            </div>
        </div>
    )
}
