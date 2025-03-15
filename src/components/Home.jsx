import React from 'react';
import './App.css';  // You can add custom styles for the component

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your journey to excellence starts here.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Feature 1</h3>
            <p>Learn more about this feature.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 2</h3>
            <p>Learn more about this feature.</p>
          </div>
          <div className="feature-card">
            <h3>Feature 3</h3>
            <p>Learn more about this feature.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
