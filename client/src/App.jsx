import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Make sure to import the CSS file

const App = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      // Parse JSON input
      const parsedInput = JSON.parse(input);

      // Make POST request to the backend
      const res = await axios.post('http://localhost:3000/bfhl', parsedInput);
      
      // Set response data
      setResponse(res.data);
    } catch (err) {
      // Handle errors
      console.error(err);
      setError('Invalid JSON or server error');
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Bajaj Finserv Health Challenge (Qualifier 1)</h1>
      <div className="info">
        <p className="info-item">Name: Gaurav Chaudhary</p>
        <p className="info-item">Mail: gaurav.chaudhary2021@vitstudent.ac.in</p>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here...'
          className="textarea"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {response && (
        <pre className="response-output">{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
