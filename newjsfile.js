const request = require('request');
const argv = require('yargs').argv;



let apiKey = '43501838c68f0892763a7b7aff0e3436';
let cityname = argv.c || 'Boston';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${apiKey}`;


request(url, function (error, response, body)
{
  if (error)
  {
  console.log('error:', error);
  }
  else
  {
      let weather = JSON.parse(body);
      let message = `Its ${weather.main.temp} degrees in ${weather.name}`;
      console.log(message);
  }
});
