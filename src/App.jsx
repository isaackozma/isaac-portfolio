import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Nav />
      <div className="app-container">
        <Hero />

        <section id="about">
        <h2>About Me</h2>
        <p>
          Junior Software Engineer / Full Stack Developer with a Bachelor of Information Technology and hands-on experience building web applications, cloud infrastructure, and AI-powered tools. Strong foundation in JavaScript, Python, React, Node.js, AWS, and Docker, with team leadership experience delivering complex technical projects. Seeking junior software, backend, full stack, DevOps, or data/AI-focused roles based in Melbourne.
        </p>
        <p>
          <strong>Key Skills:</strong> JavaScript, React, Node.js, Python, Git, Docker, OpenAI API, AWS, MongoDB, Java, GitHub Actions, Agile
        </p>
        <a href="/Isaac_Kelly_CV_2025.pdf" download className="cv-button">
          Download My CV
        </a>
      </section>

      <Projects />

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: kozmaisaac@gmail.com</p>
        <p>Phone: [redacted]</p>
        <p>
          LinkedIn:{' '}
          <a href="https://www.linkedin.com/in/isaac-kelly-a1a164208/" target="_blank" rel="noreferrer">
            My Profile
          </a>
        </p>
        </section>
      </div>
    </>
  );
}

export default App;