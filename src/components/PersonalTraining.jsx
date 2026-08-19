function PersonalTraining() {
  return (
    <section className="training-section" id="training">

      {/* IMAGE */}
      <div className="training-image">
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1800&q=90"
          alt="Personal training"
        />
      </div>

      {/* CONTENT */}
      <div className="training-content">

        <div className="training-label">
          04 / PERSONAL TRAINING
        </div>

        <h2>
          TRAIN WITH
          <br />
          <span>PURPOSE.</span>
        </h2>

        <p className="training-description">
          Turn intention into a plan. Our personal training approach
          brings structured workouts, better technique, consistency,
          and focused guidance to every session.
        </p>

        <div className="training-stats">

          <div className="training-stat">
            <strong>01</strong>
            <span>STRUCTURED PLANS</span>
          </div>

          <div className="training-stat">
            <strong>02</strong>
            <span>FORM &amp; TECHNIQUE</span>
          </div>

          <div className="training-stat">
            <strong>03</strong>
            <span>TRAINER GUIDANCE</span>
          </div>

        </div>

        <a href="#contact" className="training-button">
          ENQUIRE ABOUT PERSONAL TRAINING
          <span>↗</span>
        </a>

      </div>

    </section>
  );
}

export default PersonalTraining;