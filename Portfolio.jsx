import React from "react";
import Profile from "../assets/Img/Profile_photo.jpg";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="whole">
      <div className="Hire">
        <a href="www.linkedin.com/in/vivek-tandle">Hire me</a>
        {/* <p> Hire me </p> */}
      </div>

      <div className="me-info">
        <div className="me-content">
          <p>Hello I'm </p>
          <h1>Vivek Tandle</h1>
          <h2> Frontend developer </h2>
        </div>
        <img src={Profile} />
      </div>

      <h1 className="about-heading">About Me</h1>
      <div className="about">
        <div className="about-me">
          <img src={Profile} />
          <div className="about-me-content">
            <p>
              Hi there! I'm Vivek Tandle, a Computer Science graduate who loves
              solving problems and creating new things.<br></br><br></br> Passionate about
              Problem-Solving & Innovation | Computer Science Grad | Skilled in
              DSA, React.js, SQL, HTML, CSS, JavaScript.<br></br><br></br> I'm familiar
              with React.js for building interactive websites, SQL for handling
              data, HTML, CSS, and JavaScript for web development.
            </p>

            <button className="btn">Download resume</button>
          </div>
        </div>
      </div>

      <div className="education">
        <h1> Education</h1>
        <div className="edu-content">
          <p> Sambhram Institute of technology </p>
          <p> B.E, Computer Science Engineering </p>
          <p> Batch: 2020-2024</p>
        </div>
      </div>

      <div className="projects">
        <h1>Projects</h1>
        <div className="pro">
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>

          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="certificates">
        <h2> Certificates</h2>
        <div className="cert">
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="internship">
        <h2>Internships</h2>
        <div className="cards">
          <div className="card1">
            <img src={Profile} alt="Avatar" />

            <div class="card11">
              <h1>John Doe</h1>
            </div>
          </div>
          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>

          <div className="card1">
            <img src={Profile} alt="Avatar" />
            {/* <img src={Profile} alt="Avatar" style={{width:"50%"}} /> */}
            <div class="card11">
              <h1>
                <b>John Doe</b>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
      </div>
      <div className="skill-grid">
        <div className="skill-box">
          <div className="skill-name">HTML</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">CSS</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">JavaScript</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Reactjs</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Java</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">SQL</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Numpy</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Pandas</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Microsoft Word</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Github</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Jupyter</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">VScode</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Skill 13</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Skill 14</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Skill 15</div>
        </div>
        <div className="skill-box">
          <div className="skill-name">Skill 16</div>
        </div>
      </div>

      <footer className="footer">
        <div className="get-in-touch">
          <h1>Get in Touch</h1>
          <div className="logos">
            <i
              className="fa fa-instagram"
              style={{
                fontSize: 40,

                color: "white",
              }}
            ></i>
            <i
              class="fa fa-github"
              style={{
                fontSize: 40,

                color: "white",
              }}
            ></i>

            <i
              className="fa fa-linkedin"
              style={{
                fontSize: 40,

                color: "white",
              }}
            ></i>
          </div>
        </div>
        <div className="get-in-touch">
          <div className="logos">
            <i
              className="fa fa-envelope"
              style={{
                fontSize: 40,

                color: "white",
              }}
            ></i>
          </div>
          <h4> vivektandle2002@gmail.com</h4>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
