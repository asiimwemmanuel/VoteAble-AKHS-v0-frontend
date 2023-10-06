import React, { useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import Svg from '../../assets/undraw_election_day_w842.svg';
import Svg2 from '../../assets/undraw_voting_nvu7.svg';
import Svg3 from '../../assets/undraw_growth_analytics_re_pyxf.svg';
import logo from '../../assets/VoteAble-header-image-2.png';
// import anime from 'animejs/lib/anime.es.js';
import CookieConsent from 'react-cookie-consent';
import './Home.css';
// import ScrollToTop from "react-scroll-to-top";

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    // anime({
    //     targets: '.wcTxt',
    //     translateX: {
    //         value: 180,
    //         duration: 800
    //     },
    //     rotate: {
    //         value: 360,
    //         duration: 1800,
    //         easing: 'easeInOutSine'
    //     },
    //     // scale: {
    //     //     value: 2,
    //     //     duration: 1600,
    //     //     delay: 800,
    //     //     easing: 'easeInOutQuart'
    //     // },
    //     delay: 250 // All properties except 'scale' inherit 250ms delay
    // });
  }, []);

  return (
    <div
      className="FlexBG"
      style={{
        paddingTop: '10px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)',
      }}
    >
      <Header />
      <h1
        style={{
          color: 'white',
          fontSize: '55px',
          marginLeft: '20px',
          marginRight: '5px',
          marginBottom: '-5px',
        }}
        className="wcTxt"
      >
        Welcome to VoteAble
      </h1>
      <p
        style={{
          color: 'white',
          marginBottom: '25px',
          maxWidth: '750px',
          marginLeft: '20px',
          marginRight: '20px',
          lineHeight: '30px',
        }}
      >
        {' '}
        <b>VoteAble: Empowering Students, Amplifying Voices!</b> 🗣️🗳️ <br />
        <br />
        Introducing VoteAble, the online voting platform engineered by AI, Deep
        Learning & Software developer and enthusiast, <b>Joshua Mukisa</b>. I'm
        currently a student of Aga Khan Highschool in IB1. Presenting the
        future of voting to the hands of the students. Headed by: <br />
        <b />Joshua Mukisa, IB1<b /> <br />
        <b/>Akhil Muni, iB1<b/> <br/>
      </p>
      <div className="hc">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // flexWrap: 'wrap',
            alignItems: 'center',
            margin: '20px',
          }}
          key="welc-1"
        >
          <img src={Svg} alt="voteable-svg" className="svg" />
          <h1
            style={{
              color: 'white',
              marginRight: '20px',
              marginBottom: '50px',
              marginLeft: '20px',
            }}
          >
            Vote from anywhere
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px',
          }}
          key="welc-2"
        >
          <img
            src={Svg2}
            alt="voteable-svg"
            className="svg"
            style={{ marginRight: '20px', marginBottom: '20px' }}
          />
          <h1
            style={{
              color: 'white',
              marginRight: '20px',
              marginBottom: '50px',
              marginLeft: '20px',
            }}
          >
            Convenient online polling
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '20px',
          }}
          key="welc-3"
        >
          <img
            src={Svg3}
            alt="voteable-svg"
            className="svg3"
            style={{ marginRight: '20px', marginBottom: '20px' }}
          />
          <h1
            style={{
              color: 'white',
              marginRight: '20px',
              marginBottom: '50px',
              marginLeft: '20px',
            }}
          >
            Real-time Statistics
          </h1>
        </div>
      </div>
      <div className="featureDescriptions">
        <div
          className="featureDescription"
          style={{ maxWidth: '700px', marginRight: '10px', marginLeft: '10px' }}
        >
          <h1>Bringing Voting to You</h1>
          <p>
            Introducing VoteAble Your Voice, Your Choice! Bringing the power of
            voting to students, igniting civic engagement and shaping the
            future. Join the movement for a brighter tomorrow!
          </p>
        </div>
        <div
          className="featureDescription"
          style={{ maxWidth: '700px', marginRight: '10px', marginLeft: '10px' }}
        >
          <h1>Results in Seconds, Not Hours</h1>
          <p>
            Send a poll and get organized results in donut-chart form, within
            seconds. We take care of the complications.
          </p>
        </div>
        <div
          className="featureDescription"
          style={{ maxWidth: '700px', marginRight: '10px', marginLeft: '10px' }}
        >
          <h1>No More Voting in Labs (Y10-IB2)</h1>
          <p>
            Unlock the Full Potential of Voting with VoteAble! Seamlessly
            navigate through a user-friendly interface. Enjoy a spectrum of
            features from the comfort of your phones!
          </p>
        </div>
      </div>
      {/* <ScrollToTop smooth /> */}
      {/* <h1>Welcome to VoteAble</h1> */}
      <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="Cookie-consent"
        style={{ background: '#2B373B' }}
        buttonStyle={{
          color: '#4e503b',
          fontSize: '13px',
          borderRadius: '10px',
        }}
        declineButtonStyle={{ borderRadius: '10px' }}
        enableDeclineButton
        expires={10}
      >
        This website uses cookies to enhance the user experience.{' '}
      </CookieConsent>
    </div>
  );
}

export default Home;
