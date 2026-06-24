import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import StyleSwitcher from './components/StyleSwitcher';
import AmbientOrb from './components/AmbientOrb';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <div className="main-container">
            <AmbientOrb />
            <Sidebar activeSection={activeSection} />
            <div className="main-content" style={{ position: 'relative', zIndex: 2 }}>
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
                    <Home />
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
                    <About />
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
                    <Services />
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
                    <Portfolio />
                </motion.div>
                
                <motion.div initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.2 }} variants={pageVariants}>
                    <Contact />
                </motion.div>
            </div>
            <StyleSwitcher />
        </div>
    );
}

export default App;
