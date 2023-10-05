// PollCarousel.js
import React, { useState } from 'react';
import Poll from '../../components/Poll_Carousel.js';

function PollCarousel({ polls }) {
  const [currentPollIndex, setCurrentPollIndex] = useState(0);

  const handleNextPoll = () => {
    setCurrentPollIndex((prevIndex) =>
      prevIndex === polls.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPoll = () => {
    setCurrentPollIndex((prevIndex) =>
      prevIndex === 0 ? polls.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="poll-carousel">
      <Poll pollId={polls[currentPollIndex]._id} />
      <button onClick={handlePrevPoll}>Previous</button>
      <button onClick={handleNextPoll}>Next</button>
    </div>
  );
}

export default PollCarousel;
