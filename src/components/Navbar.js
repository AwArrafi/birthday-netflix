import React, { useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isTransparent, setIsTransparent] = React.useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isTransparent ? "transparent" : ""}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="logo"
        className="netflix-logo"
      />
      <div className="text">
        <h1>Happy Birthday, Lintang!</h1>
      </div>
    </nav>
  );
}

export default Navbar;
