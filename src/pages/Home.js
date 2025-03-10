import React, { useState } from 'react';
import './Home.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'
import Michael from '../assets/Michael.png'
import Jessica from '../assets/Jessica.png'
import Robert from '../assets/Robert.png'
import Image1 from '../assets/Image1.png'
import Image2 from '../assets/Image2.png'
import Monitor from '../assets/Monitor.png'
import Design from "../assets/Design.png";
import Business from "../assets/Business.png";
import Personal from "../assets/Personal.png";
import Languages from "../assets/Languages.png";
import Health from "../assets/Health.png";
import Contactus from "../assets/Contactus.png";
import ProcessSignUpImage from '../assets/ProcessSignUp.png';
import ProcessFindMatchesImage from '../assets/ProcessFindMatches.png';
import ProcessConnectImage from '../assets/ProcessConnect.png';
import ProcessLearnTeachImage from '../assets/ProcessLearnTeach.png';


const Getstarted = () => {
  // Categories for skills section
  const categories = [
    {
      title: "Programming and Technology",
      description: "Learn coding languages & Explore web development",
      skills: ["Python", "Java", "JavaScript", "Website", "Software engineering", "App development"],
      image: Monitor,
    },
    {
      title: "Creative and Digital Arts",
      description: "Develop graphic design skills, tools & Photography techniques",
      skills: ["Adobe Photoshop", "Adobe Illustrator", "Photography", "Digital painting"],
      image: Design,
    },
    {
      title: "Business and Entrepreneurship",
      description: "Develop skills in marketing, finance sales, and digital advertising",
      skills: ["Marketing", "Sales", "Digital advertising", "Finance", "Budgeting", "Investment"],
      image: Business,
    },
    {
      title: "Personal Development",
      description: "Master mindfulness and productivity, organizational skills",
      skills: ["Mindfulness", "Meditation", "Well-being", "Time management", "Productivity"],
      image: Personal,
    },
    {
      title: "Languages",
      description: "Study Languages and Practice conversation skills",
      skills: ["French", "Spanish", "English", "Dutch", "Japanese", "Chinese", "Speaking"],
      image: Languages,
    },
    {
      title: "Health and Wellness",
      description: "Discover services related to fitness training, nutrition counseling",
      skills: ["Fitness", "Nutrition", "Mental health", "Holistic wellness", "Nutrition counseling"],
      image: Health,
    },
  ];

  //tutors
  const [tutorSkills] = useState([
     "Accounting",
     "Banking",
     "Acco",
     "ewrfbgfhg",
     "sdfbfdv",
     "afdfgfhg",
     "dfnhgdf",
     "sfhnghf",
     "fsdfdbdf"
  ]);

  const [swapSkills] = useState([
     "dafbc bfd",
     "dvfvxczx",
     "szdfxv",
     "Accounting",
     "zdxcvhgdf",
     "dzfxvhdfc",
     "szdfg",
     "sdfg",
     "wertyuhbv"
  ]);

  // State to track selected skills
  const [selectedTutorSkill, setSelectedTutorSkill] = useState(null);
  const [selectedSwapSkill, setSelectedSwapSkill] = useState(null);

  // State to show info modals
  const [showTutorInfo, setShowTutorInfo] = useState(null);
  const [showSwapInfo, setShowSwapInfo] = useState(null);

  // Handler for tutor skill selection
  const handleTutorSkillClick = (skill, index) => {
    setSelectedTutorSkill(index);
    console.log(`Selected tutor skill: ${skill}`);
  };

  // Handler for swap skill selection
  const handleSwapSkillClick = (skill, index) => {
    setSelectedSwapSkill(index);
    console.log(`Selected swap skill: ${skill}`);
  };

  // Handler for info button clicks
  const handleTutorInfoClick = (e, skill, index) => {
    e.stopPropagation(); // Prevent triggering the parent button click
    setShowTutorInfo(index === showTutorInfo ? null : index);
    console.log(`Showing info for tutor skill: ${skill}`);
  };

  const handleSwapInfoClick = (e, skill, index) => {
    e.stopPropagation(); // Prevent triggering the parent button click
    setShowSwapInfo(index === showSwapInfo ? null : index);
    console.log(`Showing info for swap skill: ${skill}`);
  };

  // Handler for view all tutors button
  const handleViewAllTutors = () => {
    console.log("View all tutors clicked");
    alert("Viewing all tutors");
  };

  // Handler for become a tutor button
  const handleBecomeTutor = () => {
    console.log("Become a tutor clicked");
    alert("Become a tutor form opening");
  };

  // Process steps - Updated to use images instead of icons
  const steps = [
    {
      image: ProcessSignUpImage,
      title: "Sign Up",
      description: "Create your profile and list your skills and interests"
    },
    {
      image: ProcessFindMatchesImage,
      title: "Find Matches",
      description: "Discover people who have skills you want to learn"
    },
    {
      image: ProcessConnectImage,
      title: "Connect",
      description: "Schedule virtual sessions to exchange knowledge"
    },
    {
      image: ProcessLearnTeachImage,
      title: "Learn & Teach",
      description: "Share your expertise and acquire new skills"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      image: Michael,
      quote: "Working with my teacher on Skilloop has been amazing. I've learned Javascript in just 2 months, and now I'm contributing to open source projects!",
      name: "Michael"
    },
    {
      image: Jessica,
      quote: "Teaching photography on Skilloop has helped me refine my own skills. My students have gone from beginners to selling their work professionally.",
      name: "Jessica"
    },
    {
      image: Robert,
      quote: "The language exchange program on Skilloop helped me become fluent in Spanish in just 6 months. The community is supportive and engaging.",
      name: "Robert"
    }
  ];

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Form handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  // Function to handle skill button click
  const handleSkillClick = (skill) => {
    alert(`You clicked: ${skill}`);
  };

  return (
  <div>
    <Headerall />
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 hero-content">
              <h1 className="hero-title">Exchange Skills Virtually!</h1>
              <p className="hero-description">
                Imagine a platform where knowledge knows no boundaries! Skilloop is where curiosity connects peers eager to learn and teach. Whether you're a coding enthusiast looking to design algorithms or a language enthusiast wanting to dive into digital marketing, this vibrant community lets you trade expertise.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={Image1} alt="Skills Exchange Illustration" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="features-title">Explore Our Comprehensive offerings</h2>
              <ul className="features-list">
                <li><strong>Learn New Skills</strong> from peers in various fields.</li>
                <li><strong>Share Expertise</strong> to reinforce your knowledge.</li>
                <li><strong>Collaborate and Network</strong> with like-minded individuals.</li>
                <li><strong>Flexible Skill Exchange</strong> tailored to your schedule.</li>
              </ul>
            </div>
            <div className="feat">
              <img src={Image2} alt="Features Illustration" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="skills-title">Explore Skills</h2>
            </div>
            <div className="col-lg-6">
              <p className="skills-subtitle">Explore diverse global skills. Whether mastering expertise or trying something new, find endless learning and growth opportunities here.</p>
            </div>
          </div>

          <div className="row">
            {categories.map((category, index) => (
              <div className="col-md-4" key={index}>
                <div className="category-card">
                  <img src={category.image} alt={`${category.title} Icon`} className="category-icon" />
                  <h2 className="category-title">{category.title}</h2>
                  <p className="category-description">{category.description}</p>

                  <div className="skills-container">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        className="skill-button"
                        key={skillIndex}
                        onClick={() => handleSkillClick(skill)}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section-fullpage">
        <div className="process-overlay">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="process-title">How Skilloop Works</h2>
              </div>
            </div>
            <div className="row process-steps">
              {steps.map((step, index) => (
                <div className="col-md-3" key={index}>
                  <div className="process-step">
                    <div className="process-circle">
                      <img src={step.image} alt={step.title} className="process-image" />
                    </div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row mt-5">
              <div className="col-12 text-center">
                <a href="#" className="btn btn-light btn-lg">Start Your Skilloop Journey</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* tutors and data exchange Section */}
      <div className="platform-container">
        <div className="platform-section tutor-section">
          <h2 className="section-header">Meet Our Tutors</h2>
          <p className="section-subheader">See which of your peers are ready to share skill</p>

          <div className="skill-buttons">
            {tutorSkills.map((skill, index) => (
              <div key={`tutor-${index}`} className="skill-button1-container">
                <button
                  className={`skill-button1 ${selectedTutorSkill === index ? 'selected' : ''}`}
                  onClick={() => handleTutorSkillClick(skill, index)}
                >
                  <span className="arrow-icon">→</span>
                  <span className="skill-name">{skill}</span>
                  <span
                    className="info-icon"
                    onClick={(e) => handleTutorInfoClick(e, skill, index)}
                  >
                    ?
                  </span>
                </button>
                {showTutorInfo === index && (
                  <div className="info-modal">
                    <p>Information about {skill}</p>
                    <p>Click anywhere to close</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="view-all-button" onClick={handleViewAllTutors}>
            View all tutor <span className="right-arrow">›</span>
          </button>
        </div>

        <div className="arrow-container">
          <div className="arrow-right">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <path d="M30 5 L50 20 L30 35 Z" fill="black" />
              <path d="M10 5 L30 20 L10 35 Z" fill="black" />
            </svg>
          </div>
        </div>

        <div className="platform-section swap-section">
          <h2 className="section-header">Skills to Swap</h2>
          <p className="section-subheader">See which of your peers are ready to share their skill</p>

          <div className="skill-buttons">
            {swapSkills.map((skill, index) => (
              <div key={`swap-${index}`} className="skill-button-container">
                <button
                  className={`skill-button1 ${selectedSwapSkill === index ? 'selected' : ''}`}
                  onClick={() => handleSwapSkillClick(skill, index)}
                >
                  <span className="arrow-icon">→</span>
                  <span className="skill-name">{skill}</span>
                  <span
                    className="info-icon"
                    onClick={(e) => handleSwapInfoClick(e, skill, index)}
                  >
                    ?
                  </span>
                </button>
                {showSwapInfo === index && (
                  <div className="info-modal">
                    <p>Information about {skill}</p>
                    <p>Click anywhere to close</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="become-tutor-button" onClick={handleBecomeTutor}>
            Become a tutor <span className="right-arrow">›</span>
          </button>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="row">
            {testimonials.map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="testimonial-card">
                  <img src={testimonial.image} alt="User Avatar" className="testimonial-avatar" />
                  <p>"{testimonial.quote}"</p>
                  <h5>{testimonial.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={Contactus} alt="Contact Image" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="contact-title">Contact Us</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  placeholder="Message"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Contact Us</button>
              </form>
              <div className="contact-info mt-4">
                <p>Contact: help@skilloop.com</p>
                <p>Based in<br />Bangalore<br />Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
  );
};

export default Getstarted;