$("#search-button").on('click', function () {
    event.preventDefault();
    var city = $('#city').val().trim().toLowerCase();
    var weatherURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + ",us&units=imperial&appid=00604984263164d160d696afed305b97";
    var startDate = $('#arrival-date').val().trim();
    console.log(startDate);
    var endDate = $('#departure-date').val().trim();
  
      // This is the API call from Open Weather
    $.ajax({
      url: weatherURL,
      method: "GET"
    }).then(function (response) {
    
      var currentTemp = response.list[0].main.temp;
      var currentConditions = response.list[0].weather[0].main;
  
      // The current temperature is added to the page
      $("#temp").html("Current Temperature: " + currentTemp +"°");
      $("#conditions").html("Current Conditions: " + currentConditions);
      console.log(response);
    });
      