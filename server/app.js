const express = require('express');
const { saveDataToFile } = require('./controller');
const cors = require('cors'); // Import the cors package

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors()); // Use the cors middleware

// Route to handle data and save it to file
app.post('/save-data', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Username or password missing' });
  }

  const result = await saveDataToFile(username, password);
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
