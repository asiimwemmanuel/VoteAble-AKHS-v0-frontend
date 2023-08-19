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
    console.log(body);

    const myPolls = async () => {
      setIsLoading(true);
      const res = await fetch(
        'https://voteable-backend.onrender.com/v1/myPolls',
        {
          method: 'POST',
          body: JSON.stringify({
            class: localStorage.getItem('class')
              ? localStorage.getItem('class')
              : null,
            house: localStorage.getItem('house')
              ? localStorage.getItem('house')
              : null,
          }),
        }
      );
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        setIsLoading(false);
        setPolls(data.data);
        console.log(polls);
      }
      if (!res.ok) {
        setIsLoading(false);
      }
      console.log(data);

      if (data.error === 'No polls found') {
        setNoPollsFound(true);
      }
      if (data.error === 'Please enter a house') {
        setError('Please enter a house');
      }
      if (data.error === 'Please enter a class') {
        setError('Please enter a class');
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
          </div>
        )}
        {/* {error.trim() == '' ? (
          <div className="pollc">
            <h1>Login First to access polls</h1>
          </div>
        ) : (
          ''
        )} */}
        {isLoading && !signupFirstErr ? (
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
        {polls && !isLoading
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
                  {/* <Link
                  to={`/voted-users/${ poll._id }`}
                  style={{ textDecoration: "none" }}
                >
                  <button className="Btn2">Voted Users</button>
                </Link> */}
                  {/* <button
                  className="dBtn"
                  onClick={async () => {
                    const res = await fetch(
                      `https://voteable-backend.onrender.com/v1/delete-poll/${ poll._id }`,
                      {
                        method: "DELETE",
                        credentials: "include",
                      }
                    );
                    const data = await res.json();
                    if (data.message === "Poll successfully deleted") {
                      alert("Poll deleted");
                      window.location.reload();
                    }
                  }}
                >
                  Delete Poll
                </button> */}
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
        {!polls && !isLoading ? (
          <div className="pollc">
            <h1>No polls found</h1>
            <Link to="/create-poll">
              <button className="vpBtn">Create a poll</button>
            </Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Home;
