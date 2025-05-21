import { useState, useEffect } from "react";
import arrow from "/arrow-up-solid.svg";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [overFooter, setOverFooter] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);

      const footer = document.querySelector("footer");
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const scrollPos = window.scrollY + window.innerHeight;
        setOverFooter(scrollPos > footerTop);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    isVisible && (
      <button
        className={`scroll-top-btn ${overFooter ? "over-footer" : ""}`}
        onClick={scrollToTop}
      >
        <img src={arrow} alt="Retour en haut" />
      </button>
    )
  );
}

export default ScrollButton;