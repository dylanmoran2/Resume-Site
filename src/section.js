import React, { useEffect, useRef } from "react";
import "./resume.css";

function Section({ children }) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Try setting threshold to 0 to see if it helps
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="animate-scroll">
      {children}
    </div>
  );
}

export default Section;
