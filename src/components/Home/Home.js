import React from 'react';
import './Home.css';
import VolumeCards from '../Volume/VolumeCards'; // Import the VolumeCards component

const Home = () => {
  // Define the volume data for each row
  const volumesData = [
    { number: 1, title: 'Volume 1', journalName: 'Journal 1', description: 'Description 1', releaseDate: '2022-01-01', img: 'image1.jpg' },
    { number: 2, title: 'Volume 2', journalName: 'Journal 2', description: 'Description 2', releaseDate: '2022-02-01', img: 'image2.jpg' },
    // Add more volume data as needed
  ];

  return (
    <div className="centered-container">
      <div className="volumes-grid">
        {/* Render four rows, each containing two volumes */}
        {[0, 1, 2, 3].map((index) => (
          <div key={index} className="row">
            <VolumeCards {...volumesData[index * 2]} /> {/* Render first volume in the row */}
            <VolumeCards {...volumesData[index * 2 + 1]} /> {/* Render second volume in the row */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
