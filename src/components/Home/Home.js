import React from 'react';
import './Home.css';
import VolumesContainer from '../Volume/VolumesContainer'; // Import the VolumeCards component

const Home = () => {

  return (
    <div className="centered-container">
        <VolumesContainer/>
    </div>
  );
};

export default Home;
