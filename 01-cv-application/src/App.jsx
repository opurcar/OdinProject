import React from 'react';


// Simulating an asynchronous function that fetches data
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation that takes some time
    setTimeout(() => {
      const success = Math.random() > 0.5; // Simulating success or failure

      if (success) {
        const data = { message: 'Data fetched successfully!' };
        resolve(data); // Resolve with the fetched data
      } else {
        reject(new Error('Failed to fetch data')); // Reject with an error
      }
    }, 1000); // Simulating a delay of 1 second
  });
};

// Using the Promise
fetchData()
  .then((result) => {
    // This block is executed when the Promise is fulfilled
    console.log('Fulfilled:', result.message);
  })
  .catch((error) => {
    // This block is executed when the Promise is rejected
    console.error('Rejected:', error.message);
  });


export default App;