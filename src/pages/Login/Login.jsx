import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import avatarPic from '../../assets/VoteAble logo.png';
import Header from '../../components/Header/Header.jsx';
// import Context from "../../Context/Context";

import './Login.css';

export default function Login() {
  // const ctx = useContext(Context);
  const [id, setID] = useState('');
  const [password, setPassword] = useState('');
  const [idErr, setIDErr] = useState('');
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
      !id ||
      !password ||
      !selectedGender ||
      !selectedClass ||
      !selectedHouse
    ) {
      if (!id) setIDErr('Please enter a valid id');
      if (!password) setPassErr('Please enter a valid password');
      if (!selectedGender) setPassErr('Please enter a gender');
      if (!selectedClass) setPassErr('Please select a class');
      if (!selectedHouse) setPassErr('Please select a house');
      return;
    }

     async function checkID(id){
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
       const data = res.json()

       if (res.ok) {
         localStorage.setItem('Student_ID', id);
         localStorage.setItem('password', password);
         localStorage.setItem('gender', selectedGender);
         localStorage.setItem('class', selectedClass);
         localStorage.setItem('house', selectedHouse);
         navigate('/polls');
       }

       if (data.error == "Student account does not exist") {
        setIDErr("Wrong Student ID")
       }
       
       if (data.error == "Invalid Student password") {
         setPassErr("Invalid Student password")
       }
     }

    checkID(id)
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
            id="id"
            style={{ fontSize: '17px' }}
            value={id}
            placeholder="Student ID"
            className="joinInput"
            type="text"
            onChange={(event) => {
              setID(event.target.value);
              setIDErr('');
            }}
            onBlur={() => {
              if (!id) setIDErr('Please enter a valid id');
            }}
          />
          {idErr && <p className="idp">{idErr}</p>}
        </div>
        <div>
          <input
            style={{ fontSize: '17px' }}
            id="password"
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '15px',
          }}
        >
          {/* <label htmlFor="classDropdown" style={{ marginBottom: '5px', fontSize: '16px' }}>Class:</label> */}
          <select
            id="classDropdown"
            value={selectedClass}
            onChange={handleClassChange}
            className="joinInput mt-10"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              width: '100%',
            }}
          >
            <option value="">Select a class</option>
            <option value="Y7">Y7</option>
            <option value="Y8">Y8</option>
            <option value="Y9">Y9</option>
            <option value="Y10">Y10</option>
            <option value="Y11">Y11</option>
            <option value="IB1">IB1</option>
            <option value="IB2">IB2</option>
          </select>
          {/* House Selection */}
          {/* <label htmlFor="houseDropdown" style={{ marginTop: '10px', marginBottom: '5px', fontSize: '16px' }}>House:</label> */}
          <select
            id="houseDropdown"
            value={selectedHouse}
            onChange={handleHouseChange}
            className="joinInput"
            style={{
              padding: '8px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px',
              width: '100%',
            }}
          >
            <option value="">Select a house</option>
            <option value="Hawks">Hawks</option>
            <option value="Falcons">Falcons</option>
            <option value="Eagles">Eagles</option>
            <option value="Kites">Kites</option>
          </select>
          <form
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '15px',
            }}
          >
            <label style={{ marginRight: '20px' }}>
              <input
                type="radio"
                value="male"
                checked={selectedGender === 'male'}
                onChange={handleGenderChange}
                style={{ accentColor: '#4600b6' }}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="female"
                checked={selectedGender === 'female'}
                onChange={handleGenderChange}
                style={{ accentColor: '#4600b6' }}
              />
              Female
            </label>
          </form>
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
