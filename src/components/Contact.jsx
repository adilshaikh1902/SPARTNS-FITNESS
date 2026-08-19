import React from "react";

function Contact() {

 const handleWhatsApp = (e) => {
  e.preventDefault();

  const form = e.target;

  const name = form.name.value.trim();
  const phone = form.phone.value.trim();
  const goal = form.goal.value;
  const program = form.program.value;
  const message = form.message.value.trim();

  // Indian mobile number validation
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid 10-digit Indian mobile number.");
    return;
  }

  const whatsappMessage =
`Hello SPARTNS FITNESS!

Name: ${name}
Phone: ${phone}
Fitness Goal: ${goal}
Preferred Program: ${program}

Message:
${message || "No additional message."}`;

  const whatsappURL =
    `https://wa.me/918540070707?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank");
};

  return (
    <>
      {/* =========================================
          CONTACT SECTION
      ========================================= */}

      <section className="contact-section" id="contact">

        {/* LEFT SIDE */}
        <div className="contact-left">

          <div className="contact-label">
            08 / YOUR NEXT REP
          </div>

          <h2>
            READY TO
            <br />
            <span>START?</span>
          </h2>

          <p className="contact-subtitle">
            Your stronger self starts with your next workout.
          </p>

          <div className="contact-buttons">

            <a
              href="tel:08540070707"
              className="contact-button primary"
            >
              CALL 08540070707
              <span>↗</span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=SPARTNS+FITNESS+Hadapsar+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              GET DIRECTIONS
              <span>↗</span>
            </a>

          </div>

          <div className="contact-address">

            <h3>SPARTNS FITNESS</h3>

            <p>
              Survey No 209/5, Manjari Road,
              <br />
              Capital Plaza, 1st Floor, DP Road,
              <br />
              Hadapsar, Pune, Maharashtra 412028
            </p>

          </div>

        </div>


        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-wrapper">

          <div className="contact-form-header">

            <h3>LET'S TALK</h3>

            <p>
              Tell us where you want to go.
            </p>

          </div>


          <form
            className="contact-form"
            onSubmit={handleWhatsApp}
          >

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />

            </div>


            {/* PHONE */}
            <div className="form-group">

              <label htmlFor="phone">
                PHONE NUMBER
              </label>

              <input
  id="phone"
  name="phone"
  type="tel"
  placeholder="Your phone number"
  inputMode="numeric"
  maxLength="10"
  pattern="[6-9][0-9]{9}"
  required
/>

            </div>


            {/* GOAL + PROGRAM */}
            <div className="form-row">

              <div className="form-group">

                <label htmlFor="goal">
                  FITNESS GOAL
                </label>

                <select
                  id="goal"
                  name="goal"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a goal
                  </option>

                  <option value="Weight Loss">
                    Weight Loss
                  </option>

                  <option value="Muscle Building">
                    Muscle Building
                  </option>

                  <option value="Strength">
                    Strength
                  </option>

                  <option value="General Fitness">
                    General Fitness
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>
                </select>

              </div>


              <div className="form-group">

                <label htmlFor="program">
                  PREFERRED PROGRAM
                </label>

                <select
                  id="program"
                  name="program"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Choose a program
                  </option>

                  <option value="Weight Training">
                    Weight Training
                  </option>

                  <option value="Cardio">
                    Cardio
                  </option>

                  <option value="CrossFit">
                    CrossFit
                  </option>

                  <option value="Zumba">
                    Zumba
                  </option>

                  <option value="Aerobics">
                    Aerobics
                  </option>

                  <option value="Dance Fitness">
                    Dance Fitness
                  </option>

                  <option value="Personal Training">
                    Personal Training
                  </option>

                  <option value="Yoga">
                    Yoga
                  </option>

                  <option value="Nutrition Consulting">
                    Nutrition Consulting
                  </option>

                </select>

              </div>

            </div>


            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                MESSAGE OPTIONAL
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Anything you want us to know?"
              ></textarea>

            </div>


            {/* WHATSAPP */}
            <button
              type="submit"
              className="whatsapp-button"
            >
              SEND ENQUIRY ON WHATSAPP
              <span>↗</span>
            </button>

          </form>

        </div>

      </section>


      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="footer">

        <div className="footer-top">

          <div className="footer-logo">

            <span className="footer-logo-main">
              SPARTNS
            </span>

            <span className="footer-logo-sub">
              FITNESS
            </span>

          </div>

          <div className="footer-tagline">
            TRAIN. TRANSFORM. THRIVE.
          </div>

          <a
            href="#top"
            className="back-top"
          >
            BACK TO TOP ↑
          </a>

        </div>


       <div className="footer-bottom">

  <span>
    © 2025 SPARTNS FITNESS
  </span>

  <span className="footer-location">
    HADAPSAR, PUNE • MAHARASHTRA
  </span>

  <a href="#contact">
    CONTACT ↗
  </a>

  <a
  href="https://www.instagram.com/spartnsfitness/?hl=en"
  target="_blank"
  rel="noopener noreferrer"
  className="instagram-link"
  aria-label="Instagram"
>
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
    />
    <circle
      cx="12"
      cy="12"
      r="4"
    />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      fill="currentColor"
      stroke="none"
    />
  </svg>
</a>

</div>

      </footer>
    </>
  );
}

export default Contact;