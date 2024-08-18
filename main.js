const fs = require('fs');

// Define the message to be written
const message = "Hello, World!";

// Use the writeFile function to write the message to output.txt
fs.writeFile('output.txt', message, (err) => {
    if (err) {
        // Log the error if one occurs
        console.error('Error writing to file:', err);
        throw err;
    }
    console.log('Message written successfully!');
});
