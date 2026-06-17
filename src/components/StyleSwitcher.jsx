import React, { useState, useEffect } from 'react';

const StyleSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Apply dark mode on mount if previously set or default
        if (document.body.classList.contains("dark")) {
            setIsDarkMode(true);
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle("dark");
    };

    const toggleSwitcher = () => {
        setIsOpen(!isOpen);
    };

    const setActiveStyle = (color) => {
        const alternateStyles = document.querySelectorAll(".alternate-style");
        alternateStyles.forEach((style) => {
            if (color === style.getAttribute("title")) {
                style.removeAttribute("disabled");
            } else {
                style.setAttribute("disabled", "true");
            }
        });
    };

    const [showMore, setShowMore] = useState(false);

    // Close on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) setIsOpen(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    return (
        <div className={`style-switcher ${isOpen ? 'open' : ''}`}>
            <div className="style-switcher-toggler s-icon" onClick={toggleSwitcher}>
                <i className="fas fa-cog fa-spin"></i>
            </div>
            <div className="day-night s-icon" onClick={toggleTheme}>
                <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </div>
            <h4>Theme Colors</h4>
            <div className="colors">
                <span className="color-1" onClick={() => setActiveStyle('color-1')}></span>
                <span className="color-2" onClick={() => setActiveStyle('color-2')}></span>
                <span className="color-3" onClick={() => setActiveStyle('color-3')}></span>
                <span className="color-4" onClick={() => setActiveStyle('color-4')}></span>
                <span className="color-5" onClick={() => setActiveStyle('color-5')}></span>
                {showMore && (
                    <>
                        <span className="color-6" onClick={() => setActiveStyle('color-6')}></span>
                        <span className="color-7" onClick={() => setActiveStyle('color-7')}></span>
                        <span className="color-8" onClick={() => setActiveStyle('color-8')}></span>
                        <span className="color-9" onClick={() => setActiveStyle('color-9')}></span>
                        <span className="color-10" onClick={() => setActiveStyle('color-10')}></span>
                        <span className="color-11" onClick={() => setActiveStyle('color-11')}></span>
                    </>
                )}
            </div>
            <button 
                onClick={() => setShowMore(!showMore)}
                style={{
                    marginTop: '15px',
                    width: '100%',
                    padding: '5px',
                    background: 'transparent',
                    border: '1px solid var(--bg-black-50)',
                    color: 'var(--text-black-700)',
                    cursor: 'pointer',
                    borderRadius: '5px',
                    fontSize: '12px',
                    fontFamily: 'Poppins, sans-serif'
                }}
            >
                {showMore ? 'Show Less' : 'Show More...'}
            </button>
        </div>
    );
};

export default StyleSwitcher;
