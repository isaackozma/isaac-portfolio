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
        <p>Full Stack Developer | AI Enthusiast | DevOps Engineer</p>
      </header>

      <section id="about">
      <h2>About Me</h2>
        <p>
          I'm a passionate and versatile full stack developer with a background in AI, DevOps, and cloud technologies. I thrive on solving real-world problems, building meaningful digital products, and working in collaborative, fast-paced environments.
        </p>
        <p>
          I graduated my Bachelor of IT on December 2024, where I led development teams, built intelligent applications using GPT APIs, created multiple GUI applications using oop, deployed pipelines with Docker and CI/CD, and created modern UIs with React, such as this website.
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
              <p>Contributed to an RMIT-led innovation project reinventing food for astronauts using sensory science, virtual reality experiences, and a 360 degree motion simulator.</p>
              <p><strong>Skills:</strong> Leadership, Communication with Sponsors, VR Concepts, UX, Unity, C#, Haptic gloves, Team Collaboration, Working under Time constraints.</p>
              <a href="https://www.rmit.edu.au/news/all-news/2024/july/space-food-aroma" target="_blank">Learn More</a>
          </div>

          <div className="project-card">
              <h3>Super Nice Website</h3>
              <p>Created a website for a local clothing store in Melbourne, helped generate over $50,000 in profit.</p>
              <p><strong>Skills:</strong> Shopify, went above and beyond customers requirements.</p>
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
