import React, { useState } from 'react';
import emailjs from "@emailjs/browser"
import './email.scss'
const EmailForm = () => {
    const [senderName, setSenderName] = useState('');
    const [senderEmail, setSenderEmail] = useState('');
    const [recipientEmail, setRecipientEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a template parameters object
        const templateParams = {
            from_name: senderName,
            from_email: senderEmail,
            to_email: recipientEmail,
            subject: subject,
            message: message
        };

        // Send the email using EmailJS
        emailjs.send('service_eascmyl', 'template_rez89rj', templateParams, 'YT3beLIdkIMUmScAw')
            .then((response) => {
                console.log('Email sent successfully:', response.text);
                // Clear the form inputs after successful submission
                setSenderName('');
                setSenderEmail('');
                setRecipientEmail('');
                setSubject('');
                setMessage('');
            })
            .catch((error) => {
                console.error('Email failed to send:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" className='email-input' value={senderName} onChange={(e) => setSenderName(e.target.value)} placeholder="Your Name" />
            <input type="email" className='email-input' value={senderEmail} onChange={(e) => setSenderEmail(e.target.value)} placeholder="Your Email" />
            <input type="email" className='email-input' value={recipientEmail} onChange={(e) => setRecipientEmail(e.target.value)} placeholder="Recipient's Email" />
            <input type="text" className='email-input' value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />
            <textarea className='textarea' value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write you Message" />
            <button type="submit" className='btn'>Send Email</button>
        </form>
    );
};

export default EmailForm;
