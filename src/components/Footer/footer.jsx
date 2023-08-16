import React from 'react';
import Svg2 from '../../assets/youtube-icon.png';
import Svg3 from '../../assets/icons8-mail-48.png';
import Joshua from '../../assets/Joshua.jpeg';

function Footer() {
  return (
    <footer style={footerStyles}>
      <div style={contentStyles}>
        {/* <img
          src={Joshua}
          alt="JMuks"
          style={{
            height: '250px',
            borderRadius: '150px',
            transform: 'rotate(28deg)',
          }}
        /> */}
        <h1 style={headingStyles}>VoteAble, Inc &copy;</h1>
        {/* <p style={textStyles}>
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
        </p> */}
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
  background: 'linear-gradient(180deg,#4600b6, #130149)',
  color: 'white',
  padding: '40px',
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  paddingTop: '100px',
  // marginTop: '50px',
};

const contentStyles = {
  maxWidth: '1000px',
  // margin: '0',
  // display: 'flex',
  // flexDirection: 'row',
  // width: '100%',
};

const headingStyles = {
  fontSize: '36px',
  marginBottom: '20px',
};

const textStyles = {
  fontSize: '18px',
  marginBottom: '30px',
  maxWidth: '700px',
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
