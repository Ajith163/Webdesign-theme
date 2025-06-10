import React, { useState, useContext } from 'react';
import dashboardImg from './assets/dashboard.png';
import mblImg from './assets/WORLD.jpg';
import Marketing from './assets/marketing.jpg';
import Marketing2 from './assets/img22.jpg';
import Marketing3 from './assets/img223.jpg';
import './App.css';
import Piechart from './components/Blog';
import Carousel from './components/carousel/carousel.jsx';
import NewSec from './components/section.jsx';
import Testimonial from './components/teastimonial/Testimonial.jsx';
import { ThemeContext } from './components/Theme/ThemeContext.jsx';
import Blog from './components/blogSection.jsx';
import Footer from './components/footer.jsx';

const features = [
  { title: "Ready To Use", icon: "fa-cubes" },
  { title: "Easy Customize", icon: "fa-sliders-h" },
  { title: "Awesome UI", icon: "fa-paint-brush" },
  { title: "Track Anything", icon: "fa-chart-line" },
  { title: "Free Updates", icon: "fa-sync-alt" },
  { title: "Lovely Features", icon: "fa-heart" },
];

const steps = [
  {
    id: "01",
    title: "Download & Register",
    description: "Integer vitae lacus eu magna bibendum pellentesque.",
    image: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    backText: "Register and get started in seconds!",
  },
  {
    id: "02",
    title: "Manage Projects",
    description: "Keep track of all your tasks and team performance.",
    image: "https://cdn-icons-png.flaticon.com/512/2144/2144760.png",
    backText: "Organize your work with ease!",
  },
  {
    id: "03",
    title: "Edit Projects",
    description: "Update and customize your project anytime.",
    image: "https://cdn-icons-png.flaticon.com/512/4202/4202849.png",
    backText: "Make changes to improve results!",
  },
];

const cardData = [
  { title: "Project Introduction", description: "Donec finibus accumsan lorem, conv dapibus a", icon: "🧩" },
  { title: "Research & Concept", description: "Donec finibus accumsan lorem, conv dapibus a", icon: "💡" },
  { title: "Project Termination", description: "Donec finibus accumsan lorem, conv dapibus a", icon: "🖚" },
  { title: "Project Organize", description: "Donec finibus accumsan lorem, conv dapibus a", icon: "📁" },
];

const HeroSection = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={theme === 'light' ? 'light-theme' : ''}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
<a href="#" className="navbar-brand gradient-LEUNIONE">LEUNIONE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button onClick={toggleTheme} className="btn btn-outline-light ms-3">
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-lg-center">
              {["Home", "SERVICES", "BLOG", "CONTACT"].map((item) => (
                <li key={item} className="nav-item">
                  <a href="#" className={`nav-link text-white${item === "Home" ? " active" : ""}`}>
                    {item}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-3">
                <button className="btn bg-danger text-white">ENQUIRE NOW</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="hero">
        <div className="hero-content text-white text-center text-lg-start px-4">
          <h1 className="display-5 fw-bold mb-3">
            Showcase Your <br />
            <span className="text-danger">Le Union</span> In Easy Way
          </h1>
          <p className='font-black'>
            Fusce id tortor ac justo ornare eleifend. Etiam vitae mattis dolor, at molestie mauris.
            Etiam ullamcorper semper arcu, posuere interdum ipsum mollis eget.
          </p>
          <div className="cta-group mt-3">
            <button className="btn text-white font-fw-bold button me-3 bg-danger" style={{ fontSize: "12px" }}>
              DISCOVER LE UNION NOW
            </button>
            <button className="btn btn-outline-danger d-flex align-items-center justify-content-center px-3 py-2">
              ▶
            </button>
          </div>
        </div>

        <div className="hero-graphics">
          <div className="gradient-orb"></div>
          <div className="floating-cards">
            <div className="card card-1">
                            <img src={Marketing3}/>


            </div>
            <div className="card card-2">
                            <img src={Marketing2}/>

            </div>
            <div className="card card-3">
              <img src={Marketing}/>
            </div>
          </div>
        </div>
      </main>

      <div className="features-section">
        <div className="container text-center">
          <h6 className="text-danger fw-bold heading-underline">CORE FEATURES</h6>
          <h2 className="fw-bold mb-5 bg">How Our Software Work</h2>
          <div className="row justify-content-center">
            {cardData.map(({ title, description, icon }, idx) => (
              <div
                key={idx}
                className="col-md-6 col-lg-3 mb-4"
                onMouseEnter={() => setActiveCardIndex(idx)}
                onClick={() => setActiveCardIndex(idx)}
              >
                <div className={`feature-card ${activeCardIndex === idx ? 'active' : ''}`}>
                  <div className="icon mb-3">{icon}</div> <br></br>
                  <h5 className="fw-bold mt-2">{title}</h5>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="business-section py-5">
        <p className="text-danger fw-bold text-center fs-5">ABOUT APP</p>
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="image-section mb-4 mb-lg-0">
            <img src={dashboardImg} alt="Dashboard Illustration" className="img-fluid floating-image" />
          </div>
          <div className="text-section ps-lg-5 text-center text-lg-start">
            <h2 className="fw-bold mb-3 bg">Increase Your Business With Us</h2>
            <p className="mb-4 text-secondary">
              Fusce non ullamcorper mi. Nullam commodo, est a rutrum fermentum, augue nisi convallis dui,
              eleifend posuere odio tortor ut erat. Aenean luctus urna nec ligula mattis, et tristique nulla vulputate.
            </p>
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <span className="check-icon me-2">✔️</span>
                <div>
                  <h6 className="fw-bold mb-1 text-white">Multiple Projects</h6>
                  <p className="text-secondary mb-0">
                    Vamus bibendum cursus euismod. Phasellus placerat dui quis elit pretium sollicitudin.
                  </p>
                </div>
              </li>
              <li className="d-flex align-items-start">
                <span className="check-icon me-2">✔️</span>
                <div>
                  <h6 className="fw-bold mb-1 text-white">Organize Projects</h6>
                  <p className="text-secondary mb-0">
                    Vamus bibendum cursus euismod. Phasellus placerat dui quis elit pretium sollicitudin.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Piechart />

      <div>
        <div className="subtitle text-danger">HOW IT WORK</div>
        <h2 className="workflow-title bg">Our App Work Flow</h2>
        <div className="workflow-container">
          {steps.map((step) => (
            <div className="card-3d" key={step.id}>
              <div className="card-inner">
                <div className="card-front">
                  <img src={step.image} alt={step.title} />
<h4 style={{ color: 'black', fontWeight: 'bold', fontStyle: 'italic' ,fontSize:'14px'}}>
  {step.title}
</h4>
                  <p className='fw-bold' style={{color:'darkblue'}}>{step.description}</p>
                  <div className="step-number">{step.id}</div>
                </div>
                <div className="card-back">
                  <p>{step.backText}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container py-5 text-center feature-section">
        <p className="subtitle text-primary fw-semibold text-danger">PERFECT SOLUTION</p>
        <h2 className="workflow-title fw-bold mb-5 bg">What Will Get From App</h2>
        <div className="row align-items-center justify-content-center gx-4 gy-5">
         <div className="col-lg-3 d-flex flex-column gap-4">
  {features.slice(0, 3).map((f, i) => (
    <div
      key={i}
      className={`feature-card glass-effect ${i === 1 ? "ms-lg-4" : ""}`} 
    >
      <div className="icon-container">
        <i className={`fas ${f.icon}`}></i>
      </div>
      <h5 className={`fw-bold ${theme === "dark" ? "gradient-light-blue" : "gradient-dark-blue"}`}>
        {f.title}
      </h5>
      <p>Interdum et malesuada fames ac ante ipsum primis.</p>
    </div>
  ))}
</div>


          <div className="col-lg-4 d-none d-lg-block">
            <img src={mblImg} className="img-fluid phone-img ms-lg-3 " alt="App Screenshot" />
          </div>

          <div className="col-lg-3 d-flex flex-column gap-4">
            {features.slice(3).map((f, i) => (
              <div key={i}            
className={`feature-card glass-effect ${(i === 0 || i === 2) ? "ms-lg-5" : ""}`}

>
                <div className="icon-container">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h5 className={`fw-bold ${theme === "dark" ? "gradient-light-blue" : "gradient-dark-blue"}`}>
                  {f.title}
                </h5>
                <p>Interdum et malesuada fames ac ante ipsum primis.</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Carousel />
      <NewSec />
      <Testimonial />
      <Blog />
      <Footer />
    </div>
  );
};

export default HeroSection;
