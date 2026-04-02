import './App.css';
import AIWidget from './AIWidget';

// App.jsx

function App() {
  return (
    <>
      <header>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#ai">Chatbot</a>
          <a href="#contact">Contact</a>
          
        </nav>

        <img src="/profile2.jpg" alt="Isaac Kelly" className="profile-photo" />

        <h1>Isaac Kelly</h1>
        <p>Full Stack Developer | AI & Data Enthusiast | DevOps</p>
      </header>

      <section id="about">
      <h2>About Me</h2>
        <p>
          I'm a full stack developer with a strong foundation in software engineering, AI, and DevOps. I enjoy solving real-world problems, building meaningful digital products, and working in collaborative, fast-paced environments.
        </p>
        <p>
          I graduated with a Bachelor of IT in December 2024, where I led development teams, built AI-powered applications using OpenAI APIs, developed GUI applications using object-oriented programming, and deployed systems using Docker and CI/CD pipelines. I also built modern web applications with React, including this portfolio.
        </p>
        <p>
          <strong>Key Skills:</strong> JavaScript, React, Node.js, Python, Git, Docker, OpenAI API, AWS, MongoDB, Java, GitHub Actions, Agile
        </p>
        <a href="/Isaac_Kelly_CV_2025.pdf" download className="cv-button">
          Download My CV
        </a>

      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project-cards">


          <div className="project-card">
              <h3>Burrito King Ordering App</h3>
              <p>A desktop GUI restaurant ordering system for "Burrito King". Features menu navigation, ordering logic, database of all items, mathmatical logic or items and prices, and receipt generation.</p>
              <p><strong>Skills:</strong> Java, JavaFX, Database, Individual Problem Sovling.</p>
              <a href="https://github.com/FurtherProgramming2410/burrito-king-restaurant-isaackozma" target="_blank">View Code</a>
          </div>

          <div className="project-card">
              <h3>NFL Combine Analytics Dashboard</h3>
              <p>  Built an interactive web application that analyzes NFL Combine performance using position-adjusted scoring. The tool generates an athletic score out of 100, ranks players within their position, and identifies historically similar athletes based on combine metrics. Includes filtering, data visualisation, and real-time player search using Streamlit.</p>
              <p><strong>Skills:</strong> Python, Pandas, NumPy, Streamlit, Data Analysis, Data Visualisation, Algorithm Design.</p>
              <a href="https://nfl-combine-analytics-bfpf5stst4sptnsw536ndy.streamlit.app" target="_blank">Live Demo</a>
              <a href="https://github.com/isaackozma/nfl-combine-analytics.git" target="_blank">View code</a>
          </div>

          <div className="project-card">
            <h3>DevOps Deployment Project</h3>
            <p>Built and deployed an application pipeline with Docker, CI/CD, and Kubernetes principles as part of a DevOps course project.</p>
            <p><strong>Skills:</strong> Docker, GitHub Actions, CI/CD, Team Collaboration.</p>
            <a href="https://github.com/rmit-sdo-2024-s2/S3791361-S3925811-assignment-2" target="_blank">View Code</a>
          </div>

          <div className="project-card">
              <h3>Team E-Commerce Site</h3>
              <p>Collaborative e-commerce website built from scratch with full frontend functionality. Features responsive design, product browsing, cart system, user generation, and more.</p>
              <p><strong>Skills:</strong> HTML, CSS, JavaScript, php, Team Collaboration.</p>
              <a href="https://github.com/isaackozma/Web-application-project" target="_blank">View Code</a>
          </div>

          <div className="project-card">
              <h3>Food in Space Capstone Project</h3>
              <p>Led development within an RMIT innovation project focused on improving food experiences for astronauts using VR and sensory technology. Worked with stakeholders, managed a team, and contributed to UX and system design.</p>
              <p><strong>Skills:</strong> Leadership, Communication with Sponsors, VR Concepts, UX, Unity, C#, Haptic gloves, Team Collaboration, Working under time constraints.</p>
              <a href="https://www.rmit.edu.au/news/all-news/2024/july/space-food-aroma" target="_blank">Learn More</a>
          </div>

          <div className="project-card">
              <h3>Super Nice Website</h3>
              <p>Designed and developed a website for a Melbourne-based clothing brand, contributing to over $50,000 in revenue through improved online presence and user experience.</p>
              <p><strong>Skills:</strong> Shopify, UX Design, Client Communication</p>
              <a href="https://www.superniceclothing.com/" target="_blank">Website Link</a>
          </div>

        </div>
      </section>

      <section id="ai">
        <h2>AI Assistant</h2>
        <AIWidget />
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: kozmaisaac@gmail.com</p>
        <p>Phone: 07386803519</p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/isaac-kelly-a1a164208/" target="_blank">My Profile</a>
        </p>
      </section>
    </>
  );
}

export default App;
