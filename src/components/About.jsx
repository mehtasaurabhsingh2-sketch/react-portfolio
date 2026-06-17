import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>About Me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content padd-15">
                        <div className="row">
                            <div className="about-text padd-15">
                                <h3>I am Saurabh Singh Mehta and <span>Web Developer, data analytics</span></h3>
                                <p>I’m Saurabh Singh Mehta, a web developer and data analytics enthusiast passionate
                                    about building dynamic, user-friendly websites and creating data-driven
                                    solutions. With an eye for detail and a solid grasp of modern web technologies
                                    and data tools, I enjoy crafting responsive web applications and turning data
                                    into insights that matter. Whether front-end development, back-end work, or
                                    diving into data, I’m all about delivering quality results that meet client
                                    needs and industry standards.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="personal-info padd-15">
                                <div className="row">
                                    <div className="info-item padd-15"><p>Birthdate : <span>03 feb 2005</span></p></div>
                                    <div className="info-item padd-15"><p>Age : <span>19</span></p></div>
                                    <div className="info-item padd-15"><p>Website : <span>www.domain.com</span></p></div>
                                    <div className="info-item padd-15"><p>Email : <span>mehtasaurabhsingh1@gmail.com</span></p></div>
                                    <div className="info-item padd-15"><p>Degree : <span>pursuing B.Sc IT 3rd year</span></p></div>
                                    <div className="info-item padd-15"><p>Phone number : <span>+91 79068 54596</span></p></div>
                                    <div className="info-item padd-15"><p>Location : <span>Uttarakhand, INDIA</span></p></div>
                                    <div className="info-item padd-15"><p>Freelance Status: <span>Available</span></p></div>
                                </div>
                                <div className="row">
                                    <div className="buttons padd-15">
                                        <a href="/Saurabh-Singh-Mehta-Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                                        <a href="#contact" className="btn hire-me">Hire Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="skills padd-15">
                                <div className="row">
                                    <div className="skills-item padd-15">
                                        <h5>CSS, Bootstrap</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '76%' }}></div>
                                            <div className="skill-percent">76%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>SQL, Excel</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '89%' }}></div>
                                            <div className="skill-percent">89%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Python</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '66%' }}></div>
                                            <div className="skill-percent">66%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>HTML</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '96%' }}></div>
                                            <div className="skill-percent">96%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>JS, AWS</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '86%' }}></div>
                                            <div className="skill-percent">86%</div>
                                        </div>
                                    </div>
                                    <div className="skills-item padd-15">
                                        <h5>Azure, Tableau, Power BI, Pandas</h5>
                                        <div className="progress">
                                            <div className="progress-in" style={{ width: '70%' }}></div>
                                            <div className="skill-percent">70%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="education padd-15">
                                <h3 className="title">Education</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2022 - 2025</h3>
                                                <h4 className="timeline-title">Degree in Information Technology</h4>
                                                <p className="timeline-text">Currently pursuing a degree focused on the core aspects of Information Technology, including web development, software engineering, and cybersecurity. Dedicated to mastering both theoretical concepts and practical applications...</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2021 - 2022</h3>
                                                <h4 className="timeline-title">12th Grade Education</h4>
                                                <p className="timeline-text">Institution: Manas Academy Completed 12th grade with a focus on science and technology, fostering a strong foundation in analytical and problem-solving skills...</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2019 - 2020</h3>
                                                <h4 className="timeline-title">High Schooling</h4>
                                                <p className="timeline-text">School: New Beer Shiba School Completed a comprehensive secondary education at Shiba School, building a strong academic foundation across various subjects...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="experience padd-15">
                                <h3 className="title">Experience</h3>
                                <div className="row">
                                    <div className="timeline-box padd-15">
                                        <div className="timeline shadow-dark">
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2023 - Present</h3>
                                                <h4 className="timeline-title">Open Source Contributor & Web Dev Enthusiast</h4>
                                                <p className="timeline-text">Actively exploring and contributing to open-source projects on GitHub, focusing on technologies such as React, Next.js, HTML, CSS, JavaScript, Bootstrap, and TypeScript...</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2022 - 2023</h3>
                                                <h4 className="timeline-title">Technology Workshop Facilitator</h4>
                                                <p className="timeline-text">Organized and led workshops on emerging technologies, focusing on topics such as cloud computing, data analysis, and artificial intelligence...</p>
                                            </div>
                                            <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h3 className="timeline-date"><i className="fa fa-calendar"></i> 2019 - 2022</h3>
                                                <h4 className="timeline-title">Freelance Web Developer</h4>
                                                <p className="timeline-text">Completed various freelance projects focusing on web development. Developed websites and applications utilizing HTML, CSS, JavaScript, and Bootstrap...</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
