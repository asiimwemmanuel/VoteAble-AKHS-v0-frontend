import React from 'react';
import Header from '../../components/Header/Header.jsx';
import './Privacy.css';

const PrivacyPolicy = () => {
  return (
    <div
      className="FlexBG"
      style={{
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)',
      }}
    >
      <Header />
      <div className="privacy-policy-content">
        <h1>Privacy Policy</h1>
        <p>
          At VoteAble, your privacy is important to us. This Privacy Policy
          outlines how we collect, use, and protect your personal information.
        </p>
        <h2>Information We Collect</h2>
        <p>
          When you use our services, we may collect the following information:
        </p>
        <ul>
          <li>Your full name</li>
          <li>Your class</li>
          <li>Your house (Hawks, Eagles, Falcons, Kites)</li>
          <li>Your password (for authentication of your stored information)</li>
        </ul>
        <h2>How We Use Your Information</h2>
        <p>We use the collected information for the following purposes:</p>
        <ul>
          <li>Processing your votes</li>
          <li>Facilitating donations</li>
          <li>Providing a personalized user experience</li>
          <li>Improving our services</li>
          <li>Generating personalised ad experiences</li>
        </ul>
        <h2>Data Storage and Security</h2>
        <h2>Sharing Your Information</h2>
        <p>
          We do not share your personal information with third parties without
          your explicit consent, except as required by law or to fulfill our
          services.
        </p>
        <h2>Changes to Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest
          version will always be available on our website.
        </p>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about our Privacy Policy, please
          contact us at voteable123@gmail.com
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
