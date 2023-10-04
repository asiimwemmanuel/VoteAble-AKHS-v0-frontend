import React, { useEffect, useState, useRef } from 'react';
import Header from '../../../components/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './CreatePoll.css';

function CreatePoll() {
  const [options, setOptions] = useState([]);
  const [questionErr, setQuestionErr] = useState(null);
  const [optionErr, setOptionErr] = useState(null);
  const [question, setQuestion] = useState('');
  const [formClosed, setFormClosed] = useState(false);
  const [option, setOption] = useState('');
  const [fileErr, setFileErr] = useState(null);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('');
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
    if (selectedClass) setOptionErr('');
  };
  const handleHouseChange = (event) => {
    setSelectedHouse(event.target.value);
    if (selectedHouse) setOptionErr('');
  };
  const inputRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handleQuestionChange = (e) => {
    setQuestionErr(null);
    setQuestion(e.target.value);
  };

  const handleOptionChange = (e) => {
    setOption(e.target.value);
    setOptionErr(null);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.type.includes('image/')) {
      setImage(selectedImage);
      setFileErr(null);
    } else {
      setImage(null);
      setFileErr('Please upload an image!');
    }
  };

  const handleUseQuestion = (e) => {
    e.preventDefault();
    if (question) {
      setFormClosed(true);
    } else {
      setQuestionErr('Enter a question');
    }
  };

  const handleAddOption = (e) => {
    e.preventDefault();
    if (!option) {
      setOptionErr('Enter an option');
      return;
    }

    const updatedOptions = [...options];
    updatedOptions.push({ option, image });
    setOptions(updatedOptions);
    setOption('');

    if (image) {
      const updatedImages = [...images];
      updatedImages.push(image);
      setImages(updatedImages);
      setImage(null);
      inputRef.current.value = null;
    }

    if (updatedOptions.length < 2) {
      setOptionErr('Enter another option');
    }
  };

  const createPoll = async () => {
    const finalOptions = options.map((opt) => {
      if (opt.image) {
        return { text: opt.option, photo: opt.image.name };
      } else {
        return { text: opt.option };
      }
    });

    try {
      const res = await fetch(
        'http://localhost:8000/v1/create-poll',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: question,
            options: finalOptions,
            owner: {
              name: localStorage.getItem('name'),
              password: localStorage.getItem('password'),
              gender: localStorage.getItem('gender'),
            },
            class: selectedClass,
            house: selectedHouse,
          }),
        }
      );

      if (res.ok) {
        navigate('/polls');
      }

      const data = res.data;

      if (data.error === 'You have to login / signup to create a poll') {
        setOptionErr('You have to login to create a poll');
      }
    } catch (error) {
      console.error('Error creating poll:', error);
    }
  };

  return (
    <div
      className="joinOuterContainer"
      style={{ backgroundImage: 'linear-gradient(180deg,#17005c, #4600b6)' }}
    >
      <Header />
      <div className="form" style={{ marginTop: '10%' }}>
        <h1 style={{ marginBottom: '5px' }}>Create Poll</h1>
        <h2>{question}</h2>
        {!formClosed ? (
          <form onSubmit={handleUseQuestion}>
            <input
              type="text"
              placeholder="Question"
              className="qInput"
              value={question}
              style={{ fontSize: '17px' }}
              onChange={handleQuestionChange}
              onBlur={() => {
                if (!question) {
                  setQuestionErr('Enter a question');
                }
              }}
            />
            {questionErr && <p className="passp">{questionErr}</p>}
            <button className="button mt-20">Use question</button>
          </form>
        ) : null}
        {formClosed ? (
          <form onSubmit={handleAddOption}>
            <ol type="1">
              {options.map((option, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginBottom: '15px',
                  }}
                >
                  {option.image && (
                    <img
                      className="optionImg"
                      src={URL.createObjectURL(option.image)}
                      alt="Option Image"
                    />
                  )}
                  <li style={{ marginLeft: '25px' }}>{option.option}</li>
                </div>
              ))}
            </ol>
            <input
              type="text"
              placeholder="Option"
              style={{ fontSize: '17px' }}
              className="qInput"
              value={option}
              onBlur={() => {
                if (!option && options.length < 2) {
                  setOptionErr('Enter an option');
                }
              }}
              onChange={handleOptionChange}
            />
            <div className="fileUpload">
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control
                  type="file"
                  onChange={handleImageChange}
                  ref={inputRef}
                  name="my-file"
                />
              </Form.Group>
            </div>
            {optionErr && <p className="passp">{optionErr}</p>}
            {fileErr && <p className="passp">{fileErr}</p>}
            <button className="button mt-20">Add option</button>

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
              <option value="N/A">N/A</option>
              <option value="Y7">Y7</option>
              <option value="Y8">Y8</option>
              <option value="Y9">Y9</option>
              <option value="Y10">Y10</option>
              <option value="Y11">Y11</option>
              <option value="IB1">IB1</option>
              <option value="IB2">IB2</option>
            </select>
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
              <option value="N/A">N/A</option>
              <option value="Hawks">Hawks</option>
              <option value="Falcons">Falcons</option>
              <option value="Eagles">Eagles</option>
              <option value="Kites">Kites</option>
            </select>
          </form>
        ) : null}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '15px',
          }}
        ></div>
        <button
          className="button mt-20"
          onClick={() => {
            if (!question) {
              setQuestionErr('Enter a question');
            }
            if (!option && options.length > 0) {
              setOptionErr('');
            }

            if (options.length < 2) {
              setOptionErr('You need to add more than 1 option');
            }

            if (!selectedClass) setOptionErr('Please select a class');
            if (!selectedHouse) setOptionErr('Please select a house');

            createPoll();
          }}
        >
          Create Poll
        </button>
      </div>
    </div>
  );
}

export default CreatePoll;
