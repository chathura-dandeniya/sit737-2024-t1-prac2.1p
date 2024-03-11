const express = require('express'); // Import the Express.js module
const app = express(); // Create an instance of Express.js
const port = 3000; // Define the port number

// Serve static files from the 'public' directory (you can name this directory anything you like)
app.use(express.static('public'));

// Start the server and listen on the defined port
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
