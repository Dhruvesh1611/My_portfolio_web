import React, { useState, useEffect } from "react";
import "./Portfolio.css";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="portfolio">
          {/* Hero Section */}
          <section className="hero">
            <h1>Dhruvesh Valjibhai Shyara</h1>
            <h2>Full-Stack Developer</h2>
            <p>Building scalable and modern web applications with the MERN stack.</p>
          </section>

          {/* Projects Section */}
          <section className="projects">
            <h2>Projects</h2>
            <div className="project-grid">
              <div className="project-card">
                <img src="shyara-gold.png" alt="Shyara Gold" />
                <div className="project-info">
                  <h3>Shyara Gold</h3>
                  <p>An e-commerce platform for jewelry collections.</p>
                  <div className="project-tags">
                    <span>MERN</span> <span>MongoDB</span> <span>React.js</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <img src="eatclub-clone.png" alt="EatClub Clone" />
                <div className="project-info">
                  <h3>EatClub Clone</h3>
                  <p>A frontend UI clone of EatClub.</p>
                  <div className="project-tags">
                    <span>HTML</span> <span>CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="skills">
            <h2>Skills</h2>
            <div className="skill-list">
              <div className="skill-item">React.js</div>
              <div className="skill-item">Node.js</div>
              <div className="skill-item">MongoDB</div>
              <div className="skill-item">Express.js</div>
              <div className="skill-item">JavaScript</div>
              <div className="skill-item">HTML</div>
              <div className="skill-item">CSS</div>
              <div className="skill-item">Git</div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="contact">
            <h2>Contact Me</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </section>

          {/* Footer */}
          <footer className="footer">
            <p>&copy; 2025 Dhruvesh Shyara. All rights reserved.</p>
          </footer>
        </div>
      )}
    </>
  );
};

export default Portfolio;
