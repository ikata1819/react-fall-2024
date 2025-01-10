import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TasnimPic from './assets/Tasnim_port.jpg'; // Make sure this path is correct

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="header_bg">
          <div className="socials">
            <nav>
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100084084076025"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook"></i> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anika-tasnim-779502332/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ikata1819"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="intro">
            <img
              className="my_pic"
              src={TasnimPic}
              alt="Anika Tasnim's Profile"
            />
            <h1 className="name">Anika Tasnim</h1>
            <h1 className="designation">Undergrad CSE Student</h1>
          </div>
          <div className="main_nav">
            <nav>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div id="about">
          <h2 className="para_head">About Me</h2>
          <p className="paras">
            Hello! I'm <strong>Anika Tasnim</strong>, a second-year Computer Science student at <em>Jahangirnagar
            University</em> with a passion for exploring the vast world of technology. Currently, I'm focusing on
            learning web development and improving my writing skills. I love working on projects that combine
            creativity with logical thinking, like building websites. Aside from academics, I also enjoy sharing
            my thoughts and observations through blogging, and I believe in making tech knowledge accessible and
            enjoyable for everyone.
          </p>
        </div>

        <div id="skills">
          <h2 className="para_head">Skills</h2>
          <div className="skill_set">
            <p><i className="devicon-c-plain"></i>&nbsp;&nbsp;C</p>
            <p><i className="devicon-cplusplus-plain"></i>&nbsp;&nbsp;C++</p>
            <p><i className="fab fa-java"></i>&nbsp;&nbsp;Java</p>
            <p><i className="fab fa-html5"></i>&nbsp;&nbsp;HTML</p>
            <p><i className="fab fa-css3-alt"></i>&nbsp;&nbsp;CSS</p>
            <p><i className="fab fa-git-alt"></i>&nbsp;&nbsp;Git & GitHub</p>
          </div>
        </div>

        <div id="project">
          <h2 className="para_head">Projects</h2>
          <div className="project_set">
            <div className="paras">
              <h3>Scientific Calculator</h3>
              <p>A scientific calculator having matrix and necessary functions using <strong>C Language</strong></p>
              <p className="plink">
                <a href="https://github.com/ikata1819/Calculator-Project" target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              </p>
            </div>

            <div className="paras">
              <h3>ISS Website</h3>
              <p>A console-based website of the International Space Station using <strong>Cpp</strong></p>
              <p className="plink">
                <a href="https://github.com/ikata1819/ISS-Website" target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              </p>
            </div>

            <div className="paras">
              <h3>JU Admission Test Website</h3>
              <p>A GUI-based website of the Admission Test of Jahangirnagar University using <strong>Java</strong></p>
              <p className="plink">
                <a href="https://github.com/ikata1819/Java-Project-University-Admission-Test-" target="_blank" rel="noopener noreferrer">
                  Project Link
                </a>
              </p>
            </div>
          </div>
        </div>

        <div id="contact">
          <h2 className="para_head">Contact Me</h2>
          <form
            className="contact_form"
            action="https://getform.io/f/ajjjogna"
            method="post"
          >
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Write your message here..."
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
        <div id="address">
          <div className="address_container">
            <p>
              <i className="fas fa-map-marker-alt"></i>
              &nbsp; Jahangirnagar University, Savar, Dhaka-1342
            </p>
          </div>
        </div>
      </main>

      <footer>
        &copy; Anika Tasnim, All rights reserved 2024
      </footer>
    </>
  );
}

export default App;
