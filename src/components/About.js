function About() {
  return (
    <section className="about-section" id="about">

         <div className="section-label">
    01 / THE SPARTNS STANDARD
  </div>

      {/* LEFT CONTENT */}
      <div className="about-content">

        <h2>
          MORE THAN A GYM.
          <br />
          <span>YOUR FITNESS</span>
          <br />
          <span>COMMUNITY.</span>
        </h2>

        <p className="about-description">
          Whether you are just starting out or chasing a new personal
          best, SPARTNS FITNESS gives you the space, tools, and people
          to stay consistent.
        </p>

        <ul className="about-features">
          <li>
            <span>✓</span>
            Experienced, supportive trainers
          </li>

          <li>
            <span>✓</span>
            Modern equipment & spacious floors
          </li>

          <li>
            <span>✓</span>
            Programs for every fitness goal
          </li>
        </ul>

        <a href="#programs" className="about-link">
          EXPLORE OUR PROGRAMS
          <span>↗</span>
        </a>

      </div>

      {/* RIGHT IMAGE */}
      <div className="about-image">

        <div className="est-badge">
          <small>EST.</small>
          <strong>2024</strong>
        </div>

        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=90"
          alt="SPARTNS FITNESS training"
        />

        

      </div>

    </section>
  );
}

export default About;