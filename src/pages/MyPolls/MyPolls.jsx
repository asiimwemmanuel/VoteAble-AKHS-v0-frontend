import React, { useState, useEffect } from 'react';
import './MyPolls.css';
import Header from '../../components/Header/Header.jsx';
// import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import QRCode from 'react-qr-code';
import { RWebShare } from 'react-web-share';
import Menuu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import CopyBoard from 'react-copy-to-clipboard';
import Poll from '../Polls/Poll/Poll.jsx'

function Home() {
  const [copy, setCopy] = useState(true);
  // eslint-disable-next-line
  const [signupFirstErr, setSignupFirstErr] = useState(false);
  // eslint-disable-next-line
  const [noPollsFound, setNoPollsFound] = useState();
  const [error, setError] = useState('');
  const [polls, setPolls] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const handleCopy = (event) => {
  //   setCopyText('Copied Text ✅');
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const myPolls = async () => {
      console.log({
        class: localStorage.getItem('class'),
        house: localStorage.getItem('house'),
      });
      setIsLoading(true);

      const res = await fetch(
        'https://voteable-backend.onrender.com/v1/myPolls',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            Student_ID: localStorage.getItem('Student_ID'),
            password:localStorage.getItem('password')
          }),
        }
      );

      const data = await res.json();
      setIsLoading(false);

      console.log(data);

      if (res.ok) {
        setPolls(data.data);
        console.log(polls);
      }

      if (data.error === "Student account does not exist") {
        setError(data.error);
      }

    };
    if (localStorage.getItem('name')) {
      setSignupFirstErr(false);
      myPolls();
    } else {
      setSignupFirstErr(true);
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <div
        className="FlexBG"
        style={{ backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)' }}
      >
        <Header />
        {signupFirstErr && (
          <div className="pollc">
            <h1>Login First to access polls</h1>
            <p style={{marginLeft:'10px', marginRight:'10px'}}>Please login with valid credentials to vote as a student of Aga Khan High School, Kampala. <br/> <br/>Please end the shinanigans and stop gallivanting</p>
          </div>
        )}
        {/* {error.trim() == '' ? (
          <div className="pollc">
            <h1>Login First to access polls</h1>
          </div>
        ) : (
          ''
        )} */}
        {!signupFirstErr && isLoading ? (
          <div
            style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
          >
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
            <div className="pollc" style={{ background: '#d8d8d8' }}>
              <div
                style={{
                  height: '80px',
                  width: '90%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '25px',
                  borderRadius: '15px',
                }}
              ></div>
              <div
                style={{
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '30%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'absolute',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '80%',
                  borderRadius: '10px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '65%',
                  borderRadius: '10px',
                  marginLeft: '-120px',
                }}
              ></div>
              <div
                style={{
                  position: 'relative',
                  height: '40px',
                  width: '34%',
                  backgroundColor: '#a5a4a4',
                  marginTop: '87%',
                  borderRadius: '10px',
                  marginLeft: '-130px',
                }}
              ></div>
            </div>
          </div>
        ) : (
          ''
        )}
        {/* {polls && !isLoading
          ? polls.map((poll) => {
              return (
                <div className="pollc" style={{ height: '280px' }}>
                  <div className="hC">
                    <h1>{poll.question}</h1>
                  </div>
                  <Link
                    to={`/poll/${poll._id}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <button className="Btn">View Poll</button>
                  </Link>
               
                  {poll.voted.includes(localStorage.getItem('name')) ?
                   <button style={{color:"#bababa"}} className='Btn'>View Poll</button>:''}
                 
                  <div>
                    <CopyBoard
                      onCopy={() => {
                        setCopy(poll._id);
                      }}
                      text={` VoteAble | ${poll.question} \n \n https://voteable-app.onrender.com/poll/${poll._id}`}
                    >
                      <button className="Btn" style={{ marginLeft: '57%' }}>
                        {copy == poll._id ? 'Copied Link ✅' : 'Copy Link 🔗'}
                      </button>
                    </CopyBoard>
                  </div>
                </div>
              );
            })
          : ''}
         */}
          {polls && !isLoading
          ? polls.map((poll) => <Poll pollId={poll._id}/>)
          : ''}
        {!polls && !isLoading ? (
          <div className="pollc">
            <h1>{error}</h1>
           {error == 'Student account does not exist' ?  <p>The ID that you entered does not belong to a student of Aga Khan High School, Kampala. <br/> <br/>Please end the shinanigans and stop gallivanting</p> : ''}
          
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Home;
