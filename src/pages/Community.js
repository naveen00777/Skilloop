import React from 'react';
import './Community.css';
import Headerall from '../components/Headerall'
import Footer from '../components/Footer'

const Community = () => {
  // Community data
  const communities = [
    {
      id: 1,
      name: "Java community",
      description: "Skill loop's largest java community...",
      icon: "cup-hot"
    },
    {
      id: 2,
      name: "Python community",
      description: "Skill loop's largest python community...",
      icon: "filetype-py"
    },
    {
      id: 3,
      name: "Java Script community",
      description: "Skill loop's largest Java Script community...",
      icon: "filetype-js"
    },
    {
      id: 4,
      name: "Entrepreneurship community",
      description: "Skill loop's largest Entrepreneurship community...",
      icon: "briefcase"
    },
    {
      id: 5,
      name: "Investment community",
      description: "Skill loop's largest Investment community...",
      icon: "cash-coin"
    },
    {
      id: 6,
      name: "Digital Advertising community",
      description: "Skill loop's largest Digital Advertising community...",
      icon: "megaphone"
    },
    {
      id: 7,
      name: "Time Management community",
      description: "Skill loop's largest Time Management community...",
      icon: "clock"
    },
    {
      id: 8,
      name: "Mediation community",
      description: "Skill loop's largest Mediation community...",
      icon: "people"
    }
  ];

  // Render the appropriate icon based on the icon name
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'cup-hot':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cup-hot" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5Z"/>
            <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.001.002-.016-.021-.008-.01.008.01-.047.023Z"/>
          </svg>
        );
      case 'filetype-py':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-filetype-py" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM0 11.85h1.6c.18 0 .32.06.44.17.12.11.18.27.18.45v1.4c0 .17-.06.33-.18.45-.12.1-.26.16-.44.16h-.98v1h.76c.32 0 .6-.12.84-.35.26-.23.38-.54.38-.91v-1.4c0-.39-.12-.7-.36-.92-.24-.24-.54-.35-.9-.35H.76v2.43H0V11.85Zm2.48 3.68v-2.62h.76c.32 0 .6.11.82.33.22.23.34.52.34.89v.13c0 .36-.1.65-.3.87-.2.23-.47.35-.78.35h-.84v.05Zm.15-1.7v.89H3c.2 0 .33-.06.4-.17.1-.11.14-.27.14-.47v-.18c0-.18-.06-.33-.16-.43a.6.6 0 0 0-.42-.14h-.33Z"/>
          </svg>
        );
      case 'filetype-js':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-filetype-js" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5L14 4.5ZM3.186 13.629C3.187 13.246 3.404 13 3.75 13c.312 0 .575.233.575.75v.102c0 .567-.266.768-.6.768-.236 0-.553-.148-.673-.316l.426-.363c.05.07.142.156.265.156.12 0 .21-.09.21-.284v-.232h-.002Z"/>
            <path d="M6.25 4.567c.52 0 1.012.119 1.388.77.143.237.62.404.188.503l-.672.604c-.048-.11-.113-.174-.195-.19-.126-.026-.243.03-.313.17v.698c0 .322.109.533.313.533.089 0 .168-.035.236-.105.048-.053.083-.113.107-.177l.672.5c-.126.287-.313.5-.562.64-.249.142-.575.21-.96.21-.533 0-.886-.159-1.56-.507-.132-.268-.265-.639-.265-1.106V5.093c0-.327.24-.619.72-.906.287-.182.653-.271 1.02-.271Z"/>
          </svg>
        );
      case 'briefcase':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        );
      case 'cash-coin':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cash-coin" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z"/>
            <path d="M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z"/>
            <path d="M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z"/>
            <path d="M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z"/>
          </svg>
        );
      case 'megaphone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-megaphone" viewBox="0 0 16 16">
            <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0v-.214c-2.162-1.241-4.49-1.843-6.912-2.083l.405 2.712A1 1 0 0 1 5.51 15.1h-.548a1 1 0 0 1-.916-.599l-1.85-3.49a68.14 68.14 0 0 0-.202-.003A2.014 2.014 0 0 1 0 9V7a2.02 2.02 0 0 1 1.992-2.013 74.663 74.663 0 0 0 2.483-.075c3.043-.154 6.148-.849 8.525-2.199V2.5zm1 0v11a.5.5 0 0 0 1 0v-11a.5.5 0 0 0-1 0zm-1 1.35c-2.344 1.205-5.209 1.842-8 2.033v4.233c.18.01.359.022.537.036 2.568.189 5.093.744 7.463 1.993V3.85zm-9 6.215v-4.13a95.09 95.09 0 0 1-1.992.052A1.02 1.02 0 0 0 1 7v2c0 .55.448 1.002 1.006 1.009A60.49 60.49 0 0 1 4 10.065zm-.657.975 1.609 3.037.01.024h.548l-.002-.014-.443-2.966a68.019 68.019 0 0 0-1.722-.082z"/>
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
        );
      case 'people':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Arrow icon for all community cards
  const arrowIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
    </svg>
  );

  return (
  <div>
  <Headerall/>
    <div className="skilloop-container">
      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="page-title">Best of Skilloop</h1>
        <h2 className="subtitle">Top Communities<br />
          <span className="text-muted">Browse Skill Loop's largest communities</span>
        </h2>

        <div className="row">
          {communities.map((community) => (
            <div key={community.id} className="col-md-4">
              <div className="community-card">
                <div className="d-flex align-items-center">
                  <div className="community-icon">
                    {renderIcon(community.icon)}
                  </div>
                  <div className="community-info">
                    <h5>{community.name}</h5>
                    <small>{community.description}</small>
                  </div>
                </div>
                <div className="arrow-icon">
                  {arrowIcon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Community;