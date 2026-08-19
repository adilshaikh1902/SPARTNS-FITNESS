import React,{ useState } from "react";

function Gallery() {
  const [showGallery, setShowGallery] = useState(false);
  return (
    
    <section className="gallery-section" id="gallery">

      {/* HEADER */}
      <div className="gallery-header">

        <div>
          <div className="gallery-label">
            07 / INSIDE SPARTNS
          </div>

          <h2>
            SHOW UP.
            <br />
            <span>STAND OUT.</span>
          </h2>
        </div>

        <p>
  A closer look at SPARTNS — our space, our equipment,
  and the energy that keeps our community moving.
</p>

      </div>

      {/* GALLERY */}
      <div className="gallery-grid">

        {/* LARGE IMAGE */}
        <div className="gallery-item gallery-large">
          <img
            src="/images/gallery-1.jpg"
            alt="Fitness training"
          />
        </div>

        {/* TOP RIGHT IMAGE */}
        <div className="gallery-item gallery-top">
          <img
            src="/images/gallery-2.jpg"
            alt="Strength training"
          />
        </div>

        {/* TOP RIGHT SECOND IMAGE */}
        <div className="gallery-item gallery-top">
          <img
            src="/images/gallery-3.jpg"
            alt="Fitness workout"
          />
        </div>

        {/* BOTTOM WIDE IMAGE */}
        <div className="gallery-item gallery-bottom">
          <img
            src="/images/gallery-4.jpg"
            alt="Gym training"
          />

          <button
  className="gallery-view"
  onClick={() => setShowGallery(true)}
>
  VIEW +
</button>
        </div>

      </div>

      {showGallery && (
  <div className="gallery-overlay">

    <button
      className="gallery-close"
      onClick={() => setShowGallery(false)}
      aria-label="Close gallery"
    >
      ×
    </button>

    <div className="gallery-modal">

      <img
        src="/images/gallery-1.jpg"
        alt="SPARTNS Fitness"
      />

      <img
        src="/images/gallery-2.jpg"
        alt="SPARTNS Fitness"
      />

      <img
        src="/images/gallery-3.jpg"
        alt="SPARTNS Fitness"
      />

      <img
        src="/images/gallery-4.jpg"
        alt="SPARTNS Fitness"
      />

    </div>

  </div>
)}

    </section>
  );
}

export default Gallery;