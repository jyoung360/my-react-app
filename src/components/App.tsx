import React from 'react';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <div className="app">
            <header className="app-header">
                <h1>Welcome to My One Page Website</h1>
                <p>This is a simple one-page website built with React.</p>
            </header>
            <main className="app-main">
                <section>
                    <h2>About</h2>
                    <p>This section contains information about the website.</p>
                </section>
                <section>
                    <h2>Services</h2>
                    <p>Details about the services offered can be found here.</p>
                </section>
                <section>
                    <h2>Contact</h2>
                    <p>Get in touch with us through this section.</p>
                </section>
            </main>
            <footer className="app-footer">
                <p>&copy; 2023 My One Page Website</p>
            </footer>
        </div>
    );
};

export default App;