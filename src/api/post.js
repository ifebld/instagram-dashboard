import axios from "axios";

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram130.p.rapidapi.com/username-by-id',
  params: {userid: '13460080'},
  headers: {
    'X-RapidAPI-Key': 'bdd42b1579mshddfbc9efd45447cp1826e6jsn013ec105f873',
    'X-RapidAPI-Host': 'instagram130.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});