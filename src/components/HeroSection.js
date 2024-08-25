import React, { useState } from "react";
import "./HeroSection.css";

import videoH from "../assets/video-hero.mp4";

function HeroSection() {
  const [showOverlay, setShowOverlay] = useState(false);

  const handlePlayClick = () => {
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Selamat Ulang Tahun, Sayang!</h2>
        <p>
          "You Are my other half, my soul, and my everything" Selamat Ulang
          Tahun Sayang, Love you to the moon and back ❤️
        </p>
        <div className="hero-button">
          <button className="play-button" onClick={handlePlayClick}>
            <span>&#9658;</span> Putar
          </button>
        </div>
      </div>

      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-button" onClick={handleCloseOverlay}>
              &times;
            </button>
            <video controls autoPlay>
              <source src={videoH} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default HeroSection;
