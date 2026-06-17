import React from 'react';

const Services = () => {
    const servicesData = [
        { icon: 'fa-mobile-alt', title: 'Phone UI Designer', desc: 'Creating intuitive and attractive user interfaces for mobile applications.' },
        { icon: 'fa-laptop-code', title: 'Web Design', desc: 'Crafting visually appealing and functional website layouts.' },
        { icon: 'fa-palette', title: 'Graphic Designer', desc: 'Designing engaging graphics and visual elements for web and print.' },
        { icon: 'fa-code', title: 'Programmer', desc: 'Developing robust and efficient code for various applications.' },
        { icon: 'fa-search', title: 'SEO Specialist', desc: 'Optimizing websites to improve search engine rankings and visibility.' },
        { icon: 'fa-bullhorn', title: 'Web Developer', desc: 'Building and maintaining dynamic and interactive web solutions.' }
    ];

    return (
        <section className="service section" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Services</h2>
                    </div>
                </div>
                <div className="row">
                    {servicesData.map((service, index) => (
                        <div className="service-item padd-15" key={index}>
                            <div className="service-item-inner">
                                <div className="icon">
                                    <i className={`fa ${service.icon}`}></i>
                                </div>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
