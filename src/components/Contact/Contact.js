import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_wcx7kto', 'template_3gj0475', {
            to_name: 'Recipient Name',
            from_name: formData.name,
            subject: formData.subject + ' from ' + formData.email,
            message: formData.message,
            reply_to: formData.email,
        }, '1z0Dl3kxB_YAoIbOc')
            .then((response) => {
                console.log('Email sent successfully:', response);
                // Clear the form
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error);
            });
    };

    return (
        <div id="contact-content">
            <div className="heading text-left text-md-center">
                <h2>
                    get <span>in touch</span>
                </h2>
            </div>
            <div className="container">
                <div className="row boxes">
                    <div className="col-18 col-lg-6">
                        <div className="box">
                            <span className="material-icons">call</span>
                            <p>+65 9455 1972</p>
                        </div>
                    </div>
                    <div className="col-18 col-lg-6">
                        <div className="box">
                            <span className="material-icons">email</span>
                            <p>brandon.chris972@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="separator" />
                <div className="row">
                    <div className="col-12 col-lg-4 leftside">
                        <div>
                            <h4 className="mb-0">send me an email</h4>
                            <p>
                                Feel free to get in touch with me. I am always open to
                                discussing new projects or creative ideas.
                            </p>
                        </div>
                        <div>
                            <h4>follow me</h4>
                            <ul className="social list-unstyled mb-5 mb-lg-0 p-0 d-flex">
                                <li className="linkedin">
                                    <a title="Linkedin" href="https://www.linkedin.com/in/brandonchristopher97/" target="_blank">
                                        <i className="fa fa-linkedin" />
                                    </a>
                                </li>
                                <li className="github">
                                    <a title="Github" href="https://github.com/BrandonDK97/" target="_blank">
                                        <i className="fa fa-github" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8">
                        <form className="formcontact" onSubmit={handleSubmit}>
                            <div className="row contactform">
                                <div className="col-12 col-md-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="YOUR NAME"
                                        autoComplete="off"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="SUBJECT"
                                        autoComplete="off"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12 col-md-4">
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="YOUR EMAIL"
                                        autoComplete="off"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <textarea
                                        name="message"
                                        placeholder="YOUR MESSAGE"
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn main-btn">
                                        <span>Send Message</span>
                                    </button>
                                </div>
                                <div className="col-12 form-message d-none">
                                    <span className="output_message text-center text-uppercase" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
