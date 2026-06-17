import React, { useState } from 'react';

const Sidebar = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`aside ${isOpen ? 'open' : ''}`}>
            <div className="logo">
                <a href="#"><span>M</span>ehta</a>
            </div>
            <div className="nav-toggler" onClick={toggleNav}>
                <span></span>
            </div>
            <ul className="nav">
                <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsOpen(false)}><i className="fa fa-home"></i>Home</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsOpen(false)}><i className="fa fa-user"></i>About</a></li>
                <li><a href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsOpen(false)}><i className="fa fa-list"></i>Services</a></li>
                <li><a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={() => setIsOpen(false)}><i className="fa fa-briefcase"></i>Portfolio</a></li>
                <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsOpen(false)}><i className="fa fa-comments"></i>Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
