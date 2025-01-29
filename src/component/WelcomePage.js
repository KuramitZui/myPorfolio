import React, { useState, useEffect } from 'react';
import { FaComments, FaCopyright } from 'react-icons/fa'; 
import myImage from "../media/vincent.png"; 
import myImage2 from "../media/vincent2.jpg"; 

import bg from "../media/background.png"; 
import "../App.css";

const requireContext = require.context('../svg', false, /\.svg$/);
const svgFiles = requireContext.keys().map((filename) => ({
  src: requireContext(filename),
  alt: filename.replace('./', '').replace('.svg', ''),
}));

const Welcome = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showLink,setShowLink] = useState(false);
  const [link,setLink] = useState('');
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTalkClick = () => {
    setShowOptions(!showOptions); 
  };

  const handleOptionClick = (contactMethod) => {
    let contactLink = '';
    switch (contactMethod) {
      case 'facebook':
        contactLink = 'https://www.facebook.com/vincent.esquivel27';
        break;
      case 'gmail':
        contactLink = 'Vincentesquivel47@gmail.com';
        break;
      case 'github':
        contactLink = 'https://github.com/KuramitZui';
        break;
      default:
        break;
    }
    setLink(contactLink);
    setShowLink(true); 
    setShowOptions(false); 
  };
  return (
    <div>
      {/* Full-Screen Background with Fixed Styling */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#101414", 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7)), url(${bg})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: -1,
        }}
      ></div>

      {/* Navigation Links */}
      <div
        style={{
          position: "absolute",
          top: "5%",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 3,
        }}
      >
        {["home", "portfolio", "skills", "services", "about"].map((section) => (
          <span
            key={section}
            style={{
              fontSize: "1.2rem",
              color: "#EEEEEE",
              cursor: "pointer",
              fontFamily: "Funnel",
              margin: "0 30px",
            }}
            onClick={() => handleClick(section)}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </span>
        ))}
      </div>

      {/* Sections */}
      <div id="home" style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Home Section */}
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Left Image */}
          <div style={{ width: "50%", display: "flex", justifyContent: "center" }}>
            <img
              src={myImage} 
              alt="Welcome"
              style={{
                width: "65%",
                height: "auto",
                margin: "auto",
              }}
            />
          </div>
          {/* Right Text */}
          <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: "2.5rem",
                color: "#EEEEEE",
                fontWeight: "bold",
                margin: "0",
                fontFamily: "Funnel",
              }}
            >
              Hi! I`m Vincent
            </p>
            <h1
              style={{
                fontSize: "4.5rem",
                margin: "0",
                color: "#f8dd71",
                fontWeight: "bold",
                fontFamily: "Proxima",
              }}
            >
              Fullstack Developer
            </h1>

            <hr style={{ width: "50%", margin: "10px 0" }} />
            <p
              style={{
                fontSize: "2rem",
                margin: "10px 0",
                color: "#EEEEEE",
                width: "50%",
                fontFamily: " ",
              }}
            >
              I am a full-stack developer with a growing understanding of front-end and back-end concepts, dedicated to contributing my skills to the development of high-quality web applications.
            </p>

            <button
              style={{
                padding: "10px 10px",
                fontSize: "1.5rem",
                color: "black",
                backgroundColor: "#f8dd71",
                border: "none",
                borderRadius: "25px",
                cursor: "pointer",
                marginTop: "20px",
                fontFamily: "Funnel",
                width: "20%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
              onClick={handleTalkClick} 
            >
              <FaComments />
              Let&apos;s Talk
            </button>

            {/* Social Media Links */}
            {showOptions && (
              <div style={{
                position: "absolute",
                top: "50%", 
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#f8dd71",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 5,
                textAlign: "center",
              }}>
                <div onClick={() => handleOptionClick('facebook')} style={{ cursor: "pointer", padding: "10px" }}>Facebook</div>
                <div onClick={() => handleOptionClick('gmail')} style={{ cursor: "pointer", padding: "10px" }}>Gmail</div>
                <div onClick={() => handleOptionClick('github')} style={{ cursor: "pointer", padding: "10px" }}>Github</div>
              </div>
            )}

            {/* Link Display */}
            {showLink && (
              <div style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "#f8dd71",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 5,
                textAlign: "center",
              }}>
                <p style={{ fontSize: "1.5rem", color: "#101414" }}>Contact Link:</p>
                <a href={link} style={{ color: "#101414", textDecoration: "underline" }}>{link}</a>
                <button onClick={() => setShowLink(false)} style={{
                  marginTop: "10px",
                  marginLeft: "10px",
                  padding: "5px 10px",
                  backgroundColor: "#101414",
                  color: "#f8dd71",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}>
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" style={{ height: "100vh", padding: "50px", textAlign: "center", color: "#EEEEEE" }}>
        <h2 style={{ fontSize: "3rem", fontFamily: "Proxima" }}>Portfolio</h2>
        <p style={{ fontSize: "1.5rem" }}>This website does not finished yet.</p>
      </div>

      {/* Skills Section */}
      <div
        id="skills"
        style={{
          height: "auto", 
          padding: "50px",
          display: "flex",
          color: "#EEEEEE",
          fontFamily: "Funnel",
        }}
      >
        {/* Soft Skills - Left (40%) */}
        <div
          style={{
            flex: "0 0 35%",
            paddingRight: "10px",
            borderRight: "2px solid #f8dd71",
          }}
        >
          <h2 style={{ fontSize: "3rem", marginBottom: "20px" }}>Soft Skills</h2>
          <ul style={{ fontSize: "1.5rem", listStyle: "none", paddingLeft: 0 }}>
            <li style={{ marginBottom: "10px" }}>●	Problem-solving and analytical thinking</li>
            <li style={{ marginBottom: "10px" }}>●	Good communication skills</li>
            <li style={{ marginBottom: "10px" }}>●	Adaptable, flexible and fast learner</li>
            <li style={{ marginBottom: "10px" }}>●	Computer Literate</li>
            <li style={{ marginBottom: "10px" }}>●	Maintain focus and productivity under pressure</li>
            <li style={{ marginBottom: "10px" }}>●	Time management and organizational skills </li>
            <li style={{ marginBottom: "10px" }}>●	Strong decision-making skills</li>  
          </ul>
        </div>

        {/* Technical Skills - Right (60%) */}
        <div
          style={{
            flex: "0 0 60%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap: "20px",
            paddingLeft: "20px",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              gridColumn: "1 / -1", 
            }}
          >
            Technical Skills
          </h2>
          {/* Loop through the dynamically imported SVGs */}
          {svgFiles.map((skill, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid #f8dd71",
                borderRadius: "10px",
              }}
            >
              <img
                src={skill.src}
                alt={skill.alt}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
              <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
                {skill.alt}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div id="services" style={{ height: "100vh", padding: "50px", textAlign: "center", color: "#EEEEEE" }}>
        <h2 style={{ fontSize: "3rem", fontFamily: "Proxima" }}>Services</h2>
        <p style={{ fontSize: "1.5rem" }}>This website does not finished yet.</p>
      </div>

        {/* About Section */}
      <div
        id="about"
        style={{
          width: "70%",
          height: "100vh",
          margin: "auto",
          padding: "50px",
          textAlign: "center",
          color: "#EEEEEE",
        }}
      >
        {/* About Heading */}
        <h2 style={{ fontSize: "3rem", fontFamily: "Proxima", marginBottom: "7%" }}>
          About Me
        </h2>

        {/* Content Split into Two Columns */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between", 
            alignItems: "center",
            gap: "20px", 
          }}
        >
          {/* Left Side (Text) */}
          <div
            style={{
              flex: "1",
              paddingRight: "20px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontSize: "3rem",
                color: "#f8dd71",
                fontWeight: "bold",
                width: "70%",
                margin: "0 auto 10px",
                fontFamily: "Funnel",
              }}
            >
              Hi, I'm Vincent
            </p>
            <p
              style={{
                fontSize: "1.5rem",
                width: "70%",
                margin: "0 auto",
                fontFamily: "Funnel",
              }}
            >
              I am currently studying at the Nueva Ecija Univesity of Science and Technology, taking up Bachelor of Science in Information Technology with a specialization of Database System Technology.
              With strong knowledge and understanding of front-end and foundational knowledge of back-end technologies, such as creating user interface and behind the scenes parts of web or applications and the design and building of databases. Seeking an entry level position
              where I can apply my skills and gain hands-on experience in a professional setting.
             </p>
            <hr style={{ width: "70%", margin: "10px auto" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                width: "70%",
                margin: "auto",
                gap: "10px", 
              }}
            >
              <div
                style={{
                  backgroundColor: "#f8dd71",
                  color: "#101414",
                  padding: "8px",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  fontFamily: "Funnel",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                }}
              >
                Front-End
              </div>
              <div
                style={{
                  backgroundColor: "#f8dd71",
                  color: "#101414",
                  padding: "8px",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  fontFamily: "Funnel",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: "500",
                }}
              >
                Back-End
              </div>
              <div
                style={{
                  backgroundColor: "#f8dd71",
                  color: "#101414",
                  padding: "8px",
                  borderRadius: "10px",
                  fontSize: "1.2rem",
                  fontFamily: "Funnel",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: "550",
                }}
              >
                Database
              </div>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div
            style={{
              flex: "1", 
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={myImage2} 
              alt="About Me"
              style={{
                width: "70%", 
                height: "auto",
                objectFit: "contain",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>
        </div>



      {/* Contact Section */}
      <div
        id="contact"
        style={{
          height: "auto",
          padding: "50px",
          textAlign: "center",
          color: "#EEEEEE",
        }}
      >
        <h2 style={{ fontSize: "3rem", fontFamily: "Proxima" }}>Contact Me</h2>
        <hr style={{ width: "100%", margin: "10px 0" }} />

        <div style={{ fontSize: "1.5rem", margin: "20px 0" }}>
          <p>Email: <a href="mailto:Vincentesquivel47@gmail.com" style={{ color: "#f8dd71", textDecoration: "none" }}>Vincentesquivel47@gmail.com</a></p>
          <p>Phone: <a href="tel:+639098052172" style={{ color: "#f8dd71", textDecoration: "none" }}>+639098052172</a></p>
        </div>
        <div style={{ marginTop: "20px", fontSize: "1.1rem", color: "#EEEEEE" }}>
          <FaCopyright /> 2025 Developed by Vincent S. Esquivel.
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            width: "50px",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#f8dd71",
            border: "none",
            borderRadius: "30%",
            padding: "10px",
            fontSize: "2rem",
            color: "#101414",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};
{/*@Vincent*/}
export default Welcome;
