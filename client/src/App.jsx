import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows="10"
          cols="50"
          placeholder='Enter JSON here...'
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {response && (
        <pre>{JSON.stringify(response, null, 2)}</pre>
      )}
    </div>
  );
};

export default App;
