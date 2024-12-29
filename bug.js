const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    // Error handling is missing here, this is the bug
    console.error(error);
  });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation that might fail
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      reject(new Error('Something went wrong'));
    } else {
      resolve();
    }
  });
}