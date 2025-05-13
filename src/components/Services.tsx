import React from 'react';

const Services: React.FC = () => {
    return (
        <div className="services-page">
            <h2>Our Services</h2>
            <p>
                At 3D Print Hub, we offer a comprehensive range of 3D printing services designed to meet your needs. Whether you're a hobbyist, a professional, or a business, we provide high-quality solutions with flexibility and speed.
            </p>
            <h3>What We Offer</h3>
            <ul className="services-list">
                <li>
                    <strong>Upload Your Models:</strong> Easily upload your 3D models in supported file formats, and we'll handle the rest.
                </li>
                <li>
                    <strong>Printing in Multiple Materials:</strong> Choose from a variety of materials, including PLA, PETG, resin, and TPE, to suit your project's requirements.
                </li>
                <li>
                    <strong>Payment Options:</strong> Pay securely using credit card, PayPal, or Venmo for your convenience.
                </li>
                <li>
                    <strong>Choice of Colors:</strong> Select from a wide range of colors to personalize your prints.
                </li>
                <li>
                    <strong>Fast Turn-Around:</strong> Get your prints completed and delivered quickly without compromising quality.
                </li>
                <li>
                    <strong>Customization:</strong> Need something unique? We offer customization services to bring your ideas to life.
                </li>
            </ul>
            <p>
                Our goal is to provide reliable, high-quality 3D printing services that are tailored to your needs. Let us help you turn your ideas into reality!
            </p>
        </div>
    );
};

export default Services;