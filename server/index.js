import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5001;

// Middleware for CORS
app.use(cors({
  origin: ['https://gauravchaudhary.online', 'http://localhost:5001', 'http://localhost:5173'],  // Allow multiple origins
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type',
  credentials: true,  // Allow credentials if necessary (set to true if using cookies, etc.)
}));


app.options('*', cors());  // Handle preflight requests for all routes

app.use(bodyParser.json());


// Route
app.post('/bfhl', (req, res) => {
  console.log('Received data:', req.body);
  try {
    const data = req.body.data || [];
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0 ? [lowercaseAlphabets[lowercaseAlphabets.length - 1]] : [];

    res.json({
      is_success: true,
      user_id: "gaurav_chaudhary",
      email: "gaurav.chaudhary2021@vitstudent.ac.in",
      roll_number: "21BEC2315",
      numbers,
      alphabets,
      highest_lowercase_alphabet: highestLowercaseAlphabet
    });
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
