import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-elem-104">
    <div className="footer-elem-121">
      <div className="footer-elem-113">
        {" "}
        <span className="footer-elem-130">
        <a href="/" className="link" target="_self">
          Space Exploration Dashboard
          </a>
        </span>
        <span className="footer-elem-112">
          Your Portal to the Universe 
        </span>
      </div>
      <div className="footer-elem-120">
        <div className="footer-elem-119">
          {" "}
          <span className="cd-paragraph-clean footer-elem-114">
            COMPANY
          </span>
          <span className="cd-paragraph-clean footer-elem-118">
            About us
          </span>
          <span className="cd-paragraph-clean footer-elem-116">
            Careers
          </span>
          <span className="cd-paragraph-clean footer-elem-117">
            News
          </span>
          <span className="cd-paragraph-clean footer-elem-115">
            Contact
          </span>
        </div>
      </div>
      <div className="footer-elem-127">
        {" "}
        <span className="footer-elem-125">
          Subscribe to Our Cosmic Updates 
        </span>
        <span className="footer-elem-126">
            Stay ahead of celestial events and missions with our newsletters.{" "}
        </span>
        <div className="footer-elem-128">
          {" "}
          <input
            type="email"
            placeholder="Enter email address"
            className="footer-elem-129"
          />
          <button className="footer-elem-131">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="footer-elem-105">
      {" "}
      <span className="cd-paragraph-clean footer-elem-106">
          Disclaimer: The Space Exploration Dashboard provides data and
          information for general informational purposes. Accuracy of the
          information and data provided cannot always be guaranteed due to the
          dynamic nature of space weather and missions. Any reliance on the
          information is therefore strictly at your own risk.{" "}
      </span>
    </div>
    <div className="footer-elem-109">
      <div className="footer-elem-108">
        {" "}
        <span className="cd-paragraph-clean footer-elem-107">
          Copyright the Space Exploration Dashboard 2023
        </span>
      </div>
    </div>
    </footer>
  );
};

export default Footer;