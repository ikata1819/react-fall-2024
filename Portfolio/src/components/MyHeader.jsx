
import TasnimPic from './assets/Tasnim_port.jpg'
export function MyHeader() {
  return (
    <>
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
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#project">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
