const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'rose.html'));
});

app.post('/increment', (req, res) => {
  const filePath = path.join(__dirname, 'counter.txt');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading the counter file.');
    }

    const currentCount = parseInt(data) || 0;
    const newCount = currentCount + 1;

    fs.writeFile(filePath, newCount.toString(), 'utf8', (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error writing to the counter file.');
      }

      res.send('Counter incremented successfully.');
    });
  });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});