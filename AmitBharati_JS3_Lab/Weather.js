var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var datedetails = document.querySelector('#date')
var min = document.querySelector('#min')
var max = document.querySelector('#max')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val) {
  return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
    .then(res => res.json())


    .then(data => {
      var datedetails = new Date().toUTCString().slice(4, 16);
      var day = new Date().toUTCString().slice(0, 3);
      if (day == 'Mon') {
        day = 'Monday';
      }
      else if (day == 'Tue') {
        day = 'Tuesday';
      }
      else if (day == 'Wed') {
        day = 'Wednesday';
      }
      else if (day == 'Thu') {
        day = 'Thrusday';
      }
      else if (day == 'Fri') {
        day = 'Friday';
      }
      else if (day == 'Sat') {
        day = 'Saturday';
      }
      else if (day == 'Sun') {
        day = 'Sunday';
      }
      var nameval = data['name']
      var descrip = data['weather']['0']['description']
      var tempature = data['main']['temp']
      var tempmax = data['main']['temp_max']
      var tempmin = data['main']['temp_min']
      var country = data['sys']['country']
      city.innerHTML = `<span>${nameval} , ${country}<span>`
      date.innerHTML = `<span>${day},${datedetails}<span>`
      temp.innerHTML = `<span>${convertion(tempature)} &deg C</span>`
      description.innerHTML = `<span>${descrip}<span>`
      max.innerHTML = `<span>${convertion(tempmax)} &degC<span>`
      min.innerHTML = `<span>${convertion(tempmin)} &degC<span>`
    })

    .catch(err => alert('You entered Wrong city name'))
})