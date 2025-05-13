import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import '../styles/App.css';
import Services from './Services';
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';

const App: React.FC = () => {
    const currentYear = new Date().getFullYear(); // Dynamically get the current year

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <div className="logo-container">
                        <img src="/logo.png" alt="3D Print Hub Logo" className="logo" />
                        <h1>3D Print Hub</h1>
                    </div>
                    <nav className="navbar">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <NavLink 
                                    to="/" 
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink 
                                    to="/about" 
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    About
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink 
                                    to="/services" 
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink 
                                    to="/gallery" 
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Gallery
                                </NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink 
                                    to="/contact" 
                                    className={({ isActive }) => isActive ? 'navbar-link active' : 'navbar-link'}
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <button className="login-button">Login</button>
                </header>
                <main className="app-main">
                    <Routes>
                        <Route 
                            path="/" 
                            element={
                                <div className="home-page">
                                    <section className="hero">
                                        <h2>Welcome to 3D Print Hub</h2>
                                        <p>
                                            At 3D Print Hub, we specialize in bringing your ideas to life through high-quality 3D printing. 
                                            Browse our extensive collection of 3D models, select the ones you love, and place an order to have them printed and shipped to your doorstep.
                                        </p>
                                    </section>
                                    <section className="features">
                                        <h3>Why Choose Us?</h3>
                                        <div className="features-list">
                                            <div className="feature-item">
                                                <h4>Wide Range of Models</h4>
                                                <p>Explore a diverse collection of 3D models for every need and occasion.</p>
                                            </div>
                                            <div className="feature-item">
                                                <h4>Secure Payments</h4>
                                                <p>Pay safely and securely for your selected models and services.</p>
                                            </div>
                                            <div className="feature-item">
                                                <h4>Custom Designs</h4>
                                                <p>Request customizations or upload your own designs for a truly unique product.</p>
                                            </div>
                                            <div className="feature-item">
                                                <h4>Fast Delivery</h4>
                                                <p>Receive high-quality 3D prints delivered quickly to your doorstep.</p>
                                            </div>
                                        </div>
                                    </section>
                                    <section className="cta">
                                        <h3>Get Started Today!</h3>
                                        <p>
                                            Start exploring our gallery and let us help you turn your ideas into reality. 
                                            <NavLink to="/gallery" className="cta-link">Browse Gallery</NavLink>
                                        </p>
                                    </section>
                                </div>
                            } 
                        />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <footer className="app-footer">
                    <p>&copy; {currentYear} 3D Print Hub. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;