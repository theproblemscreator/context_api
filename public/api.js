const { default: axios } = require("axios");

async function fetchApi() {
    try {
        const response = await axios.get(apiUrl); // Await the API response
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error; // Throw the error to handle it in the calling function

    }
}
(async () => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    try {
        const data = await axios.get(apiUrl); // Call the async function
        console.log('Fetched Data:', data);
    } catch (error) {
        console.error('Error occurred:', error.message);
    }
})();
