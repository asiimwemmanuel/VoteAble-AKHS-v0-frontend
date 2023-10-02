import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatarPic from '../../assets/VoteAble logo.png';
import Header from '../../components/Header/Header.jsx';
// import Context from "../../Context/Context";

import './Login.css';

export default function Login() {
  // const ctx = useContext(Context);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [passErr, setPassErr] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');

  const navigate = useNavigate();

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleHouseChange = (event) => {
    setSelectedHouse(event.target.value);
  };

  const login = () => {
    if (
      !name ||
      !password ||
      !selectedGender ||
      !selectedClass ||
      !selectedHouse
    ) {
      if (!name) setNameErr('Please enter a valid name');
      if (!password) setPassErr('Please enter a valid password');
      if (!selectedGender) setPassErr('Please enter a gender');
      if (!selectedClass) setPassErr('Please select a class');
      if (!selectedHouse) setPassErr('Please select a house');
      return;
    }

    localStorage.setItem('Student_ID', name);
    localStorage.setItem('name', "Joshua Mukisa");
    localStorage.setItem('password', password);
    // localStorage.setItem('gender', selectedGender);
    // localStorage.setItem('class', selectedClass);
    // localStorage.setItem('house', selectedHouse);

    navigate('/polls');
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="joinOuterContainer">
      <Header />
      <div className="joinInnerContainer" style={{ marginTop: '200px' }}>
        <img src={avatarPic} className="avPic" alt="VoteAble" />
        <h1 className="heading">Login</h1>
        <div>
          <input
            name="name"
            style={{ fontSize: '17px' }}
            value={name}
            placeholder="Student ID"
            className="joinInput"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
              setNameErr('');
            }}
            onBlur={() => {
              if (!name) setNameErr('Please enter a valid name');
            }}
          />
          {nameErr && <p className="namep">{nameErr}</p>}
        </div>
        <div>
          <input
            style={{ fontSize: '17px' }}
            name="password"
            placeholder="Password"
            value={password}
            className="joinInput mt-20"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
              setPassErr('');
            }}
            onBlur={() => {
              if (!password) setPassErr('Please enter a valid password');
            }}
          />
          {passErr && <p className="passp">{passErr}</p>}
        </div>
 
        <button
          className={'button mt-20'}
          onClick={login}
          style={{ padding: '5px' }}
        >
          <p style={{ fontSize: '17px' }}>Login</p>
        </button>
        {/* <Link to="/signup" className="fPL">
          <p>Not signed up? Signup here</p>
        </Link>
        <Link to="/forgot-password" className="ALSU">
          <p>Forgot password?</p>
        </Link> */}
      </div>
    </div>
  );
}
