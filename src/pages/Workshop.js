import React from 'react';
import './Workshop.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'
import Workshop from '../assets/Workshop.png'

const Skill = () => {
  const handleApply = () => {
    alert('Thank you for your interest! Application submitted.');
  };

  return (
  <div>
  <Headerall />
    <div className="container">
      <div className="row workshop-header">
        <div className="col-md-6">
          <h1 className="workshop-title">Workshop</h1>
          <p className="workshop-description">
            "Join our hands-on workshops at SkillLoop and enhance your expertise with industry-relevant skills. Learn from experienced professionals, engage in interactive sessions, and gain practical knowledge to boost your career!".
          </p>
        </div>
        <div className="col-md-6">
          <img src={Workshop} alt="Learning concept illustration" className="learn-image" />
        </div>
      </div>

      <h2 className="upcoming-title">UPCOMING EVENTS</h2>

      <div className="event-card">
        <div className="d-flex align-items-center">
          <div className="text-center me-4">
            <div className="event-date">23 Nov</div>
            <div className="event-time">6:00 PM</div>
          </div>
          <div className="logo-container me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="#4e7ca1">
              <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-1.334-2.099-1.198-1.05-2.62-1.51-4.156-1.867-.93-.187-1.9-.42-2.87-.648.054-1.666.028-3.339.081-5.006.043-1.324-.604-2.345-1.913-2.702-1.31-.357-2.543.086-3.212 1.146-.83 1.322-.615 2.785-.393 4.202.06.382.206.751.322 1.119.96.341.181.682.238 1.027.193 1.141.345 2.291.521 3.435.105.692.2 1.387.337 2.072.091.449.217.893.331 1.337.232.89.501 1.234 1.647 1.234.997-.009 1.997-.056 2.993-.083.811-.022 1.62-.07 2.429-.102l.28-.011c.97-.055 1.934-.254 2.791-.61 1.038-.431 1.175-1.377.542-2.337-.301-.46-.573-.96-.969-1.341-1.241-1.194-1.371-1.827-1.354-3.323l.948.11c1.074.104 2.156.185 3.315.33.593.075 1.188.216 1.782.262.644.05 1.062-.413 1.065-.989.001-.217-.1-.43-.185-.637-.207-.403-.483-.778-.672-1.193-.336-.733-.686-1.458-.997-2.201-.395-.942-1.17-1.212-2.15-.786-1.08.47-2.204.765-3.458.772-.647 0-1.294-.046-1.94-.072Z" />
            </svg>
          </div>
          <div className="event-title">JAVA</div>
        </div>
        <button className="btn apply-btn" onClick={handleApply}>Apply Now</button>
      </div>

      <div className="event-card">
        <div className="d-flex align-items-center">
          <div className="text-center me-4">
            <div className="event-date">24 Nov</div>
            <div className="event-time">6:00 PM</div>
          </div>
          <div className="logo-container me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="#4584b6" d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 9.585 3C2.457 3 2.51 5.391 2.51 5.391v4.145s-.125 2.312 2.37 2.312h3.17v1.159h-4.48S1 13.03 1 16.681V21s-.309 3 8.446 3c8.756 0 8.446-2.804 8.446-2.804v-4.59s.266-2.693-3.856-2.693h-4.45v-1.22Z" />
              <path fill="#ffde57" d="M6.953 5.295a1.097 1.097 0 1 1-2.194 0a1.097 1.097 0 0 1 2.194 0Zm8.505 13.604a1.097 1.097 0 1 1-2.193 0a1.097 1.097 0 0 1 2.193 0Z" />
            </svg>
          </div>
          <div className="event-title">Python</div>
        </div>
        <button className="btn apply-btn" onClick={handleApply}>Apply Now</button>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Skill;