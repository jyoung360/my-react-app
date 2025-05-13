import React from 'react';

const About: React.FC = () => {
    return (
        <div className="about-page">
            <h2>About Us</h2>
            <p>
                Welcome to 3D Print Hub! With over 10 years of experience in the 3D printing industry,
                we are passionate about turning ideas into reality. Our expertise spans across various
                3D printing technologies and services, ensuring high-quality results for every project.
            </p>
            <h3>Our Expertise</h3>
            <ul className="expertise-list">
                <li><strong>FDM Printing:</strong> Precision and durability for functional prototypes and parts.</li>
                <li><strong>Resin Printing:</strong> High-detail prints for intricate designs and models.</li>
                <li><strong>Model Creation:</strong> Custom 3D model design tailored to your needs.</li>
                <li><strong>Part Duplication:</strong> Accurate replication of existing parts and objects.</li>
            </ul>
            <p>
                At 3D Print Hub, we are committed to delivering exceptional service and quality. Whether you're
                a hobbyist, a business, or an inventor, we are here to help you bring your ideas to life.
            </p>
        </div>
    );
};

export default About;