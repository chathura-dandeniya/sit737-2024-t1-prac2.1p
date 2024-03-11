// Load the HTTP module to create an HTTP server.
const http = require('http');

// Load the file system module to read files from the file system.
const fs = require('fs');

// Define the port number on which the server will listen for requests.
const port = 3000;

// Create an HTTP server. The function passed to createServer is called once for each HTTP request made to the server.
const server = http.createServer((req, res) => {
    // Read the content of 'index.html' asynchronously.
    fs.readFile('index.html', (err, data) => {
        // Check if there was an error reading the file.
        if (err) {
            // If an error occurred, send an HTTP status code of 500 (Internal Server Error).
            res.writeHead(500);
            // End the response and send a message indicating the error.
            res.end('Error loading index.html');
        } else {
            // If the file was read successfully, send an HTTP status code of 200 (OK).
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // End the response and send the content of 'index.html'.
            res.end(data);
        }
    });
});

// Make the server start listening on the specified port. Once the server starts listening, the callback function is called.
server.listen(port, () => {
    // Log a message to the console indicating that the server is running and listening for requests.
    console.log(`Server running at http://localhost:${port}/`);
});