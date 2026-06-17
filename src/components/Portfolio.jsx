import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const portfolioItems = [
        { id: 1, category: 'web', img: 'img/screenshot 2024-08-10 144141.png' },
        { id: 2, category: 'web', img: 'img/screenshot 2024-08-10 144109.png' },
        { id: 3, category: 'design', img: 'img/screenshot 2024-08-10 144208.png' },
        { id: 4, category: 'design', img: 'img/screenshot 2024-08-10 144220.png' },
        { id: 5, category: 'web', img: 'img/screenshot 2024-08-10 144243.png' },
        { id: 6, category: 'design', img: 'img/screenshot 2024-08-10 144301.png' },
        { id: 7, category: 'design', img: 'img/screenshot 2024-08-10 144313.png' },
        {
            id: 8,
            category: 'ai',
            isSpecial: true,
            title: 'Resume Point Builder',
            desc: 'A free AI-powered tool that generates tailored resume bullet points based on job roles and required experience levels — helping you craft a standout resume fast.',
            tags: ['Resume', 'AI Tool', 'Career'],
            link: 'https://dmh-eta.vercel.app/'
        }
    ];

    const filteredItems = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);

    return (
        <section className="portfolio section" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Portfolio</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="portfolio-heading padd-15">
                        <h2>My Last Projects:</h2>
                    </div>
                </div>
                
                {/* NEW FEATURE: Portfolio Filtering */}
                <div className="row">
                    <div className="portfolio-filter padd-15">
                        <button type="button" className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
                        <button type="button" className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Web Design</button>
                        <button type="button" className={filter === 'design' ? 'active' : ''} onClick={() => setFilter('design')}>Graphics</button>
                        <button type="button" className={filter === 'ai' ? 'active' : ''} onClick={() => setFilter('ai')}>AI Tools</button>
                    </div>
                </div>

                <div className="row">
                    {filteredItems.map(item => (
                        <div className="portfolio-item padd-15" key={item.id}>
                            {item.isSpecial ? (
                                <Tilt perspective={1000} scale={1.02} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    <div className="portfolio-item-inner project-card shadow-dark">
                                        <div className="project-icon">
                                            <i className="fa fa-file-alt"></i>
                                        </div>
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                        <div className="project-tags">
                                            {item.tags.map(tag => <span className="project-tag" key={tag}>{tag}</span>)}
                                        </div>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                                            <i className="fa fa-external-link-alt"></i> View Live
                                        </a>
                                    </div>
                                </Tilt>
                            ) : (
                                <Tilt perspective={1000} scale={1.02} tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    <div className="portfolio-item-inner shadow-dark">
                                        <div className="portfolio-img">
                                            <img src={item.img} alt={`Portfolio ${item.id}`} />
                                        </div>
                                    </div>
                                </Tilt>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
