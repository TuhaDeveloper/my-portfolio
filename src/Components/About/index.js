import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
export const About = () => {
    return (
        <div className='animate__animated animate__fadeIn   about-page'>
            <div className=' about'>
                <div className='about-tag'>
                    <h1><br />About me <br /></h1>
                </div>
                <div className='about-des'>
                    <div className='intro'>
                        <p>I am an experienced and dedicated front-end web developer specializing in React.js.
                            With a passion for creating visually stunning and highly functional user interfaces,
                            I strive to deliver exceptional digital experiences that engage and delight users.
                            I am passionate about front-end development and always eager to take on new challenges. I am excited to contribute my skills and knowledge to create exceptional digital experiences and drive innovation in the field.

                        </p>
                    </div>

                    <h2>Skills:</h2>

                    <div>
                        <p>
                            <strong> React.js:</strong> I possess an in-depth understanding of React and have hands-on experience in developing scalable and efficient applications using this popular JavaScript library. I am proficient in working with React components, state management (Redux), and modern React features like hooks and context API.
                        </p>
                        <p>
                            <strong>HTML5 & CSS3:</strong> I am proficient in writing clean, semantic HTML and CSS code to bring designs to life. I have a keen eye for detail and can effectively implement responsive and accessible designs that work seamlessly across different devices and browsers.

                        </p>
                        <p>
                            <strong>JavaScript & ES6:</strong> I have a strong foundation in JavaScript and stay up to date with the latest ES6 features and syntax. I can write clean and modular JavaScript code, utilize modern JavaScript frameworks and libraries, and leverage APIs to create dynamic and interactive web applications.

                        </p>
                        <p>
                            <strong> UI/UX Design:</strong> I have a solid understanding of user-centered design principles and possess the ability to translate wireframes and mockups into visually appealing user interfaces. I pay great attention to user experience, ensuring intuitive navigation, smooth interactions, and engaging visuals.

                        </p>
                        <p>
                            <strong> Version Control:</strong> I am proficient in using Git and have experience with popular Git workflows. I understand the importance of version control in collaborative development and can effectively manage and merge code repositories.

                        </p>
                        <p>
                            <strong>Testing and Debugging:</strong> I have a strong understanding of testing methodologies and tools like Jest and Enzyme. I am adept at writing unit tests and conducting debugging to ensure high-quality code and smooth functionality.

                        </p>
                        <p>
                            <strong>Portfolio: </strong>
                            Please visit my portfolio <Link className='portfolio-link' to='/projects' > Click </Link>  to explore some of the projects I have worked on. Each project showcases my expertise in React.js, responsive design, and attention to detail. Feel free to reach out to me for more information or collaboration opportunities.

                        </p>
                    </div>
                    <div className='des-footer'>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
