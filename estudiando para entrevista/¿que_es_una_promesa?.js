/*

 ¿ que es una promesa ?

	Una promesa es un objecto que representa la finalización de un evento 
	asincronico. 

	Una promesa maneja tres estados:
		1. Pendiente
		2. Completada
		3. Rechazada


¿ What's a promise ?

A Promise is an object representing the eventual completion or failure of an
asynchronous operation  

A promise has three states:

	1. Pending
	2. fulfilled
	3. rejected

*/

function simulateAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("operation completed successfully");
    }, 2000);
  });
}
console.log(simulateAsyncOperation());

simulateAsyncOperation()
  .then((result) => {
    console.log("result successfully");
  })
  .catch((error) => {
    console.log("error");
  })
  .finally(() => {
    console.log("always is executed");
  });

// ===========================================================

// Function to fetch data from an API
function fetchData() {
    return new Promise((resolve, reject) => {
        // Fetch data from an API endpoint
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                // Check if the response was successful
                if (!response.ok) {
                    // If not, reject the promise with the status text
                    reject('Error: ' + response.statusText);
                }
                // If successful, parse the JSON response and resolve the promise with the data
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                // If an error occurs during the fetch, reject the promise with the error message
                reject('Error fetching data: ' + error.message);
            });
    });
}

// Using the promise to fetch data
fetchData()
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
