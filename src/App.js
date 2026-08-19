import "./App.css";
import About from "./components/About";
import WhySpartns from "./components/WhySpartns";
import Programs from "./components/Programs";
import PersonalTraining from "./components/PersonalTraining";
import KnowYourBody from "./components/KnowYourBody";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="website">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="logo-main">SPARTNS</span>
          <span className="logo-sub">FITNESS</span>
        </div>

        <nav className="navigation">
          <a href="#about">About</a>
          <a href="#programs">Programs</a>
          <a href="#training">Training</a>
          <a href="#reviews">Reviews</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
          <a href="tel:08540070707" className="call-link">
            CALL NOW ↗
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">

          <div className="location">
            <span></span>
            HADAPSAR, PUNE
            <b>•</b>
          </div>

          <h1>
            BUILD YOUR
            <br />
            <span>STRONGEST</span>
            <br />
            SELF.
          </h1>

          <p className="hero-description">
            Train harder. Move better. Live stronger.
            <br />
            Professional training and a motivating fitness
            environment, built for your next level.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-button">
              START YOUR FITNESS JOURNEY
              <span>↗</span>
            </a>

            <a href="tel:08540070707" className="secondary-button">
              CALL US
              <span>↗</span>
            </a>
          </div>

          <div className="rating">
            <strong>4.6</strong>
            <span className="stars">★★★★★</span>
            <span className="divider"></span>
            <strong>589+ GOOGLE REVIEWS</strong>
          </div>
        </div>

        <div className="hero-side-text">
          TRAIN
          <br />
          TRANSFORM
          <br />
          THRIVE
        </div>

        <div className="scroll-text">
          SCROLL TO EXPLORE
          <span>↓</span>
        </div>
      </section>

        {/* FITNESS MARQUEE */}
<div className="fitness-marquee">
  <div className="marquee-track">
    <span>✦</span>
    <strong>PROGRESS</strong>

    <span>✦</span>
    <strong>COMMUNITY</strong>

    <span>✦</span>
    <strong>STRENGTH</strong>

    <span>✦</span>
    <strong>DISCIPLINE</strong>

    <span>✦</span>
    <strong>PROGRESS</strong>

    <span>✦</span>
    <strong>COMMUNITY</strong>

    <span>✦</span>
    <strong>STRENGTH</strong>

    <span>✦</span>
    <strong>DISCIPLINE</strong>
  </div>
</div>




      <About />
      <WhySpartns />
      <Programs />
      <PersonalTraining />
      <KnowYourBody />
      <Reviews />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;