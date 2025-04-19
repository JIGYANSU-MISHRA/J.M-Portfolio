// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Certification.css";

// Import your certificate images
import certImage3 from "../../assets/images/Cipher.png";
import certImage1 from "../../assets/images/Hackerrank.png";
import certImage2 from "../../assets/images/IBM.png";
import certImage4 from "../../assets/images/LinkedIn.png";

const certifications = [
    {
        title: "Frontend Developer (React)",
        issuer: "HackerRank",
        date: "April 2025",
        description:
          "Certified by HackerRank for proficiency in React and frontend development through a role-based assessment.",
        image: certImage1,
      },
    {
        title: "Introduction to Software Engineering",
        issuer: "IBM via Coursera",
        date: "November 2024",
        description:
          "Completed an online course authorized by IBM through Coursera, covering fundamentals of software engineering.",
        image: certImage2,
      },
  
  {
    title: "Full Stack Development using MERN Stack",
    issuer: "CipherSchools",
    date: "July 2024",
    description:
      "Certified for successfully completing Full Stack Development training using the MERN Stack at CipherSchools.",
    image: certImage3,
  },
  {
    title: "Become a Full-Stack Web Developer",
    issuer: "LinkedIn Learning",
    date: "February 2023",
    description:
      "Completed a learning path covering full-stack web development, including frontend, backend, and software development concepts.",
    image: certImage4,
  },
  // Add more certifications as needed
];

const Certification = () => {
  return (
    <div id="Certifications" className="certifications">
      <h1 className="certification-title">Certifications & Courses</h1>
      <div className="certifications-container">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certification-image"
            />
            <h3>{cert.title}</h3>
            <p>
              <strong>Issuer:</strong> {cert.issuer}
            </p>
            <p>
              <strong>Date:</strong> {cert.date}
            </p>
            <p>{cert.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
