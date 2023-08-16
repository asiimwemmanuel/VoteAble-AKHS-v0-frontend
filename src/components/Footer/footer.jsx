import React from 'react';
import Svg2 from '../../assets/youtube-icon.png';
import Svg3 from '../../assets/icons8-mail-48.png';

function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={contentStyles}>
        <h1 style={headingStyles}>VoteAble, Inc &copy;</h1>
        <p style={textStyles}>
          At VoteAble Inc, we are dedicated to providing a cutting-edge voting
          platform that empowers students to make informed decisions through
          secure and accessible voting. With a strong commitment to transparency
          and fairness, we strive to revolutionize the way people engage in
          democratic processes.
          <br />
          <br />
          Hi there 👋! I'm Joshua, the founder and visionary behind VoteAble. As
          a passionate advocate for technology-driven solutions, I embarked on
          this journey to create a platform that not only simplifies the voting
          experience but also ensures the integrity of each vote. With a
          background in Web development & AI programming, I am excited to lead a
          team that shares the same vision of enhancing democratic participation
          through innovation.
        </p>
      </div>
      <div style={socialStyles}>
        <a
          href="https://youtube.com/channel/UCI9hvu4GkGLKyOZFenvcvoA"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Svg2} alt="Youtube-icon" style={iconStyles} />
          <h2 style={linkStyles}>VoteAble Inc</h2>
        </a>
        <a href="mailto:voteable123@gmail.com" target="_blank" rel="noreferrer">
          <img src={Svg3} alt="Email-icon" style={iconStyles} />
          <h2 style={linkStyles}>Email us</h2>
        </a>
      </div>
      <div style={footerBottomStyles}>
        &copy; {new Date().getFullYear()} VoteAble, Inc. All rights reserved.
      </div>
    </footer>
  );
}

// Styles
const footerStyles = {
  background: 'linear-gradient(135deg, #4600b6, #17005c)',
  color: 'white',
  padding: '40px',
  textAlign: 'center',
};

const contentStyles = {
  maxWidth: '1000px',
  margin: '0 auto',
};

const headingStyles = {
  fontSize: '36px',
  marginBottom: '20px',
};

const textStyles = {
  fontSize: '18px',
  marginBottom: '30px',
};

const socialStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '20px',
};

const iconStyles = {
  marginRight: '100px',
};

const linkStyles = {
  fontSize: '20px',
  textDecoration: 'none',
  color: 'white',
};

const footerBottomStyles = {
  textAlign: 'center',
  marginTop: '20px',
};

export default Footer;
