import React, { useState, useEffect, useId } from 'react';
import './MyPolls.css';
import Header from '../../components/Header/Header.jsx';
// import { CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function MyPolls() {
  const [copyText, setCopyText] = useState('');
  // eslint-disable-next-line
  const [signupFirstErr, setSignupFirstErr] = useState('Copy Link 🔗');
  // eslint-disable-next-line
  const [noPollsFound, setNoPollsFound] = useState();
  const [polls, setPolls] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = React.useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const myPolls = async () => {
      setIsLoading(true);
      const res = await fetch(
        'https://voteable-backend.onrender.com/v1/myPolls',
        {
          method: 'GET',
        }
      );
      const data = await res.json();
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
                <div className="pollc" style={{ height: '280px' }} key={id}>
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
                    <CopyToClipboard
                      className="Btn"
                      style={{ marginLeft: '57%' }}
                      text={`https://voteable-app.onrender.com/poll/${poll._id}`}
                      onCopy={() => {
                        setCopyText('Copied Text ✅');
                      }}
                    >
                      {copyText}
                    </CopyToClipboard>
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

export default MyPolls;
