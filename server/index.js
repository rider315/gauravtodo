import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';  // Import the cors package

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());  // This allows all origins by default

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
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
    res.status(500).json({ is_success: false, message: 'Server error' });
  }
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
