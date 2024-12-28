import React, { useState } from 'react';
import Papa from 'papaparse';

function App() {
  const [csvData, setCsvData] = useState(null);
  const [present, setPresent] = useState(false);

  const handleParseFromUrl = () => {
    const csvUrl = "https://res.cloudinary.com/misbackend/raw/upload/v1731676659/u0dyuazoejqtamwjif2k.csv"; // Replace with your actual URL

    Papa.parse(csvUrl, {
      download: true, // Enables fetching from a remote URL
      header: true, // Adjust based on your CSV structure
      skipEmptyLines: true,
      complete: (results) => {
        console.log(results.data);
        
        const foundData = results.data.find((item) => item.USERNAME === "fs22co005");
        
        setCsvData(foundData);
        setPresent(!!foundData);

        console.log("Found Data:", foundData);
        console.log("Present:", !!foundData);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
      },
    });
  };

  return (
    <div>
      <h2>Parse CSV from URL</h2>
      <button onClick={handleParseFromUrl}>Fetch and Parse CSV</button>
      <div>
        <h3>Parsed Data:</h3>
        {present ? (
          <div>
            <p>Username: {csvData?.username}</p>
            <p>Date: {csvData?.date}</p>
          </div>
        ) : (
          <p>No data found for the specified username.</p>
        )}
      </div>
    </div>
  );
}

export default App;
