import './App.css'

const App = () => (
  <>
    <nav className="nav-bg-container">
      <div className="card1-container">
        <img
          src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733323343/favicon_wnppwd.ico"
          className="website-logo"
          alt="Spacio"
        />
        <h1 className="company-name">
          SPACIO <br />
          TECHTONICS<sup className="sup-text">TM</sup>
        </h1>
      </div>
      <ul className="list-container">
        <li className="nav-link">OUR WORK</li>
        <li className="nav-link">WHY US?</li>
        <li className="Book-appointment">BOOK AN APPOINTMENT</li>
        <li className="bar-link">
          <i className="fa-solid fa-bars bar-icon" />
        </li>
      </ul>
    </nav>
    <div className="book-appointment-bg-container">
      <div className="book-appointment-card-container">
        <h1 className="book-appointment-heading">
          Simplifying <b>facades</b> from
          <b>
            <u>conception to construction</u>
          </b>
          using custom-programmed digital tools
        </h1>
        <i className="fa-solid fa-greater-than angular-icon" />
      </div>
      <button className="appointment-btn-section">
        BOOK AN APPOINTMENT
        <i className="fa-solid fa-arrow-up-right-from-square button-icon" />
      </button>
      <p className="copyright-paragraph">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div>
      <div className="spacio-techtonics-bg-container">
        <div className="spacio-techtonics-card-container">
          <h1 className="card1-heading">
            We are <br /> SpacioTechtonics
          </h1>
          <button className="more-onexpertise-btn">
            MAKE OUR
            <br /> EXPERTISE
            <i className="fa-solid fa-arrow-up-right-from-square button-icon" />
          </button>
        </div>
        <p className="spacio-descripion">
          Innovation and technology should make life simple—not the other way
          around.
          <br />
          <br />
          We built Spacio Techtonics to help architects and engineers build
          their dreams and realise them with
          <br />
          <b>
            <u>custom - programmed digital tools.</u>
          </b>
          <br />
          <br />
          With diverse backgrounds of engineers with professional experience and
          projects across India, we offer
          <br />
          <b>
            <u>facade architecture , engineering and advisory servicesv</u>
          </b>
          <br />
          <br />
          to you to realise your dreams with confidence
          <br />
          <br />
          <b>
            <u>Make your dreams grow with innovation that flows.</u>
          </b>
        </p>
      </div>
      <p className="copyright-paragraph">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div className="Exceptional-facades-bg-container">
      <div className="facades-bg-container">
        <i className="fa-solid fa-less-than facades" />
        <i className="fa-solid fa-greater-than facades" />
      </div>
      <div className="facades-description-copyright-section">
        <p className="facades">
          <span className="styling">Exceptional</span> <br /> facades delivered
        </p>
        <p className="copyright-facades">
          <i className="copyright-icon fa-regular fa-copyright" />
          SPACIO TECHTONICS | all rights reserved
        </p>
      </div>
    </div>
    <div>
      <div className="our-presence-home-section">
        <div className="our-presence-card1-container">
          <h1 className="our-presence-card1-heading">Our presence</h1>
          <p className="our-presence-card1-decription">
            We have our footprint throughout India and have work going on in the
            leading cities of India -
          </p>
          <ul className="our-presence-list-container">
            <li className="our-presence-list-item">Delhi</li>
            <li className="our-presence-list-item">Mumbai</li>
            <li className="our-presence-list-item">Hyderabad</li>
            <li className="our-presence-list-item">Bengaluru</li>
            <li className="our-presence-list-item">Coimbatore</li>
            <li className="our-presence-list-item">Chennai</li>
          </ul>
          <div className="our-presence-subcard">
            <div className="our-presence-details">
              <h1 className="our-presence-subcard-heading">100000</h1>
              <p className="our-presence-paragraph">
                SQFT. OF FACADE <br /> BUILT SO FAR
                <i className="fa-solid fa-arrow-up-right-from-square presence-icon" />
              </p>
            </div>
            <div className="our-presence-details">
              <h1 className="our-presence-subcard-heading">6+</h1>
              <p className="our-presence-paragraph">
                CITIES OF <br /> ACTIVE PROJECTS
                <i className="fa-solid fa-arrow-up-right-from-square presence-icon" />
              </p>
            </div>
            <div className="our-presence-details">
              <h1 className="our-presence-subcard-heading">6+</h1>
              <p className="our-presence-paragraph">
                CITIES OF <br /> ACTIVE PROJECTS
                <i className="fa-solid fa-arrow-up-right-from-square presence-icon" />
              </p>
            </div>
          </div>
        </div>
        <img
          src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733323317/map_o5fvfk.png"
          alt="india map"
          className="india-map"
        />
      </div>
      <p className="copyright-paragraph">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div className="latest-work-bg-container">
      <div className="latest-work-card-container">
        <h1 className="our-presence-card1-heading">Latest Work</h1>
        <button className="viewall-btn">
          VIEW ALL{' '}
          <i className="fa-solid fa-arrow-up-right-from-square viewAll-icon" />
        </button>
      </div>
      <div className="latest-work-card2-container">
        <div>
          <div className="latest-work-img1">
            <i className="fa-solid fa-less-than latest-work-icon" />
          </div>
          <p className="latest-work-location">
            MARBLED, DELHI{' '}
            <i className="fa-solid fa-arrow-up-right-from-square viewAll-icon" />
          </p>
        </div>
        <div>
          <div className="latest-work-img2">
            <i className="fa-solid fa-greater-than latest-work-icon2" />
          </div>
          <p className="latest-work-location">
            HOSPICE, COIMBATORE{' '}
            <i className="fa-solid fa-arrow-up-right-from-square viewAll-icon" />
          </p>
        </div>
      </div>
      <p className="copyright-paragraph">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div>
      <h1 className="our-presence-card1-heading">Insights</h1>
      <div className="insights-bg-container">
        <div className="insights-home-card-section">
          <div className="insights-card-container">
            <h1 className="in-heading">in</h1>
          </div>
          <p className="insights-description">
            Our director has recieved the ‘Top AEC Industry Voice’ on LinkedIN
          </p>
          <p className="insights-date">2024-06-01</p>
        </div>
        <div className="insights-home-card-section">
          <div className="insights-card-container">
            <h1 className="in-heading">in</h1>
          </div>
          <p className="insights-description">
            Our director has recieved the ‘Top AEC Industry Voice’
          </p>
          <p className="insights-date">2024-06-01</p>
        </div>
        <div className="insights-home-card-section">
          <div className="insights-card-container">
            <h1 className="in-heading">in</h1>
          </div>
          <p className="insights-description">
            Our director has recieved the ‘Top AEC Industry Voice’
          </p>
          <p className="insights-date">2024-06-01</p>
        </div>
      </div>
      <p className="copyright-paragraph">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div className="innovative-bg-container">
      <nav className="nav-bg-container">
        <div className="card1-container">
          <img
            src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733323343/favicon_wnppwd.ico"
            className="website-logo"
            alt="Spacio"
          />
          <h1 className="company-name">
            SPACIO <br />
            TECHTONICS<sup className="sup-text">TM</sup>
          </h1>
        </div>
        <ul className="list-container">
          <li className="nav-red-link">Projects</li>
          <li className="nav-red-link">services</li>
          <li className="nav-red-link">Careers</li>
          <li className="nav-red-link">Contact</li>
          <li className="bar-link">
            <i className="fa-solid fa-bars bar-icon" />
          </li>
        </ul>
      </nav>
      <div className="innovative-main-bg-container">
        <div className="innovative-card1-container">
          <h1 className="innovative-card1-heading">Innovate with us</h1>
          <p className="innovative-card1-paragraph">
            contact@spaciotechtonics.info
          </p>
          <p className="innovative-card1-paragraph">+91 94863 19871</p>
          <br />
          <br />
          <p className="innovative-card1-paragraph">
            If you’re looking for a career with us click here to apply
          </p>
          <br />
          <br />
          <br />
          <br />
          <div className="social-media-container">
            <p className="innovative-social">GET SOCIAL</p>
            <i className="fa-brands fa-instagram social-media-icon" />
            <i className="fa-brands fa-linkedin social-media-icon" />
            <i className="fa-brands fa-youtube social-media-icon" />
          </div>
        </div>
        <div className="innovative-bg-card2-container">
          <h1 className="keep-touch-heading">Keep in Touch</h1>
          <p className="innovative-card1-paragraph">
            to get updates and get contacted by us
          </p>
          <br />
          <br />
          <div className="email-btn-section">
            <input
              type="text"
              placeholder="EMAIL ADDRESS"
              className="inputEl"
            />
            <button type="button" className="inovative-btn">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <p className="copyright-facades">
        <i className="copyright-icon fa-regular fa-copyright" />
        SPACIO TECHTONICS | all rights reserved
      </p>
    </div>
    <div className="footer-bg-container">
      <div className="card1-subcard-section">
        <div className="comapny-logo-container">
          <img
            src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733323343/favicon_wnppwd.ico"
            className="footer-logo"
            alt="spacio"
          />
          <h1 className="footer-company-name">
            SPACIO <br />
            TECHTONICS<sup className="sup-text">TM</sup>
          </h1>
        </div>
        <p className="copyright-footer">
          <i className="copyright-icon fa-regular fa-copyright" />
          SPACIO TECHTONICS | all rights reserved
        </p>
      </div>
      <div className="card1-subcard-section">
        <p className="company-title">Company Links</p>
        <p className="footer-info">Privacy Policy</p>
        <p className="footer-info">Terms & Conditions</p>
        <p className="footer-info">Contact Us</p>
      </div>
      <div className="company-contact-logo">
        <h1 className="call-logo-title">Call Us</h1>
        <i className="fa-solid fa-phone call-logo" />
      </div>
    </div>
  </>
)

export default App
