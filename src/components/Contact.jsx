import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('https://formsubmit.co/ajax/mehtasaurabhsingh1@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Failed to send. Please try again later.');
            }
        } catch (error) {
            setStatus('An error occurred. Please try again.');
        }
        
        setTimeout(() => setStatus(''), 5000);
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="row">
                    <div className="section-title padd-15">
                        <h2>Contact Me</h2>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Do You Have Any Question?</h3>
                <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                <div className="row">
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-phone"></i></div>
                        <h4>Call Us On</h4>
                        <p>+91 79068 54696</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                        <h4>Office</h4>
                        <p>Pithoragarh, Uttarakhand</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-envelope"></i></div>
                        <h4>Email</h4>
                        <p>mehtasaurabhsingh1@gmail.com</p>
                    </div>
                    <div className="contact-info-item padd-15">
                        <div className="icon"><i className="fa fa-globe-europe"></i></div>
                        <h4>Website</h4>
                        <p>https://dazzling-elf-15075d.netlify.app/</p>
                    </div>
                </div>
                <h3 className="contact-title padd-15">Send Me An Email?</h3>
                <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                
                <div className="row">
                    <form onSubmit={handleSubmit}>
                        <div className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                                    </div>
                                </div>
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea className="form-control" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                                    </div>
                                </div>
                                <div className="form-item col-12 padd-15">
                                    <button type="submit" className="btn">Send Email</button>
                                </div>
                            </div>
                            {status && <p className="form-status-msg" style={{ marginTop: '15px', color: 'var(--skin-color)' }}>{status}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
