import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Tilt from 'react-parallax-tilt';

const Home = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Web Designer", "Programmer", "Web Developer", "Graphic Designer"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="home section" id="home">
            <div className="container">
                <div className="row">
                    <div className="home-info padd-15">
                        <h3 className="hello">Hello, my name is <span className="name">Saurabh Singh Mehta</span></h3>
                        <h3 className="my-profession">I'm a <span className="typing" ref={el}></span></h3>
                        <p>I am a web developer and data analytics enthusiast with expertise in modern web
                            technologies and user-centered design. I specialize in creating responsive applications
                            and intuitive interfaces while using data insights to inform strategic decisions.
                            Committed to delivering high-quality solutions, I have experience in both front-end and
                            back-end development, ensuring that I meet industry standards and achieve client goals.
                        </p>
                        <a href="#contact" className="btn hire-me">Hire Me</a>
                    </div>
                    <div className="home-img padd-15">
                        <Tilt 
                            className="parallax-effect" 
                            perspective={500} 
                            glareEnable={true} 
                            glareMaxOpacity={0.45} 
                            scale={1.05}
                        >
                            <div className="holographic-card">
                                <img src="img/screenshot_30-8-2024_115636_www.fotor.com.jpeg" alt="Saurabh Singh Mehta" />
                            </div>
                        </Tilt>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
