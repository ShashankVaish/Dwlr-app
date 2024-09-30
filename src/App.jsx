import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import Navbar from './Components/Navbar';

const App = () => {
  const [text, setText] = useState("DWLR 1443 is disabled");
  const [enable, setEnable] = useState(false);

  const playMusic = () => {
    var music = new Audio('/public/700-hz-beeps-86815.mp3');
    music.play();
  };

  // Generate 140 entries for the table data
  const data = Array.from({ length: 140 }, (_, index) => ({
    dwrlid: `DWLR ${1443 + index}`,
    timestamp: new Date().toLocaleString(),
    waterLevel: `${(Math.random() * (6 - 3) + 3).toFixed(1)} m`, // Random water level between 3.0 and 6.0
    battery: `${(Math.random() * (100 - 50) + 50).toFixed(0)}%`,  // Random battery percentage between 50% and 100%
    status: Math.random() > 0.7 ? "Active" : Math.random() > 0.5 ? "Active" : "Inactive", // Random status
  }));

  return (
    <>
    <Navbar/>
      <div className="app-container">
        <button className="styled-button" onClick={() => { setEnable(true); playMusic(); }}>
          Search
        </button>
        {enable && (
          <>
            <h5 className="result-text">{text}</h5>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Dwrlid</th>
                  <th>Timestamp</th>
                  <th>Water Level</th>
                  <th>Battery</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.dwrlid}</td>
                    <td>{item.timestamp}</td>
                    <td>{item.waterLevel}</td>
                    <td>{item.battery}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </>
  );
};

export default App;
