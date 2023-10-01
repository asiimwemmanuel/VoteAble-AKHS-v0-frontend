import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header.jsx';
import { useParams, useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import './Poll.css';
function Poll(props) {
  const { pollId } = useParams();
  const navigate = useNavigate();
  const [pollNotFound, setPollNotFound] = useState();
  const [question, setQuestion] = useState();
  const [options, setOptions] = useState();
  const [option, setOption] = useState({});
  const [signupFirstErr, setSignupFirstErr] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    async function poll() {
      setIsLoading(true);
      const res = await fetch(
        `https://voteable-backend.onrender.com/v1/poll/${pollId}`,
        {
          method: 'GET',
        }
      );
      setIsLoading(false);
      const data = await res.json();
      if (data.error) {
        setPollNotFound(data.error);
      } else {
        setQuestion(data.data.question);
        setOptions(data.data.options);
      }
      console.log(data);
    }
    poll();
  }, [pollId]);

  async function vote() {
    const optiontext = option.text;
    const res = await fetch(
      `https://voteable-backend.onrender.com/v1/vote/${pollId}`,
      {
        method: 'POST',
        body: JSON.stringify({
          answer: optiontext,
          Student_ID: localStorage.getItem('Student_ID'),
          password: localStorage.getItem('password'),
          
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(optiontext, option);

    const data = await res.json();
    if (res.ok) {
      setSignupFirstErr('Voted');
    }
    if (data.error) {
      setSignupFirstErr(data.error);
    }

  }
  return (
    <div
      className="joinOuterContainer"
      style={{ backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)' }}
    >
      <Header />
      {isLoading ? (
        <CircularProgress
          style={{
            color: 'white',
            // position: "absolute",
            // top: "20%",
            // left: "40%",
          }}
        />
      ) : (
        <div className="pollC" style={{ marginTop: '10%' }}>
          <h2>{pollNotFound ? pollNotFound : question}</h2>
          {signupFirstErr === 'Voted' ? (
            <h2
              style={{
                marginTop: '-10px',
                marginBottom: '20px',
                color: '#4600b6',
              }}
            >
              Voted
            </h2>
          ) : (
            <p className="passp" style={{ marginBottom: '10px' }}>
              {signupFirstErr}
            </p>
            )}
            
          <div className="options">
            {options
              ? options.map((option) => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        padding: '5px',
                        borderBottom: '2px black solid',
                        marginBottom: '12px',
                      }}
                    >
                      {option.photo ? (
                        <img
                          src={`https://voteable-backend.onrender.com/uploads/${option.photo}`}
                          className="optionImg"
                        />
                      ) : (
                        ''
                      )}
                      <input
                        style={{ accentColor: '#4600b6', cursor: 'pointer' }}
                        className="option"
                        type="radio"
                        value={option.text}
                        name="option"
                        onClick={() => {
                          setOption(option);
                        }}
                      />
                      <p>{option.text}</p>
                      <br></br>
                      <br></br>
                    </div>
                  );
                })
              : ''}
          </div>
          {pollNotFound ? (
            ''
          ) : (
            <button className={'vBTN'} onClick={vote}>
              <p>Vote</p>
            </button>
          )}

          {!pollNotFound ? (
            <button
              className={'vBTN'}
              onClick={() => {
                navigate(`/poll/results/${pollId}`);
              }}
            >
              <p>Next poll ➡️</p>
            </button>
          ) : (
            ''
          )}
        </div>
      )}
    </div>
  );
}

export default Poll;
