document.addEventListener("DOMContentLoaded", function(e){
	//setup an onlick event when the user clicks submit
	getWeather = document.getElementById("weather");
	getWeather.onsubmit = function(e){
		e.preventDefault();
	
		var zipCode = document.getElementById('zipCode').value;
		var countrySelect = document.getElementById('countrySelect').value;
		var city = document.getElementById('city').value.replace(/ /g, "_");
		var state = document.getElementById('state').value;
		// city = city.replace(/ /g, ";");
		console.log('zipCode is:',zipCode,'country is:',countrySelect,'city is:',city);
		var url;
		var forecastUrl;
		
		if (zipCode != ""){
			console.log('not by zip');
			url = "http://api.wunderground.com/api/a4ce678b4426738b/geolookup/conditions/q/" + zipCode + ".json";
			forecastUrl = "http://api.wunderground.com/api/a4ce678b4426738b/forecast/q/" + zipCode + ".json";
		} else if (countrySelect != "" && city != ""){
			console.log('chosen country')
			if (countrySelect == 'USA'){
				console.log('chosen USA')
				url = "http://api.wunderground.com/api/a4ce678b4426738b/geolookup/conditions/q/" + state + "/" + city + ".json";
				forecastUrl = "http://api.wunderground.com/api/a4ce678b4426738b/forecast/q/" + state + "/" + city + ".json";
			} else {
				url = "http://api.wunderground.com/api/a4ce678b4426738b/geolookup/conditions/q/" + countrySelect + "/" + city + ".json";
				forecastUrl = "http://api.wunderground.com/api/a4ce678b4426738b/forecast/q/" + countrySelect + "/" + city + ".json";
			}
		};
		
		//grabs the Weather Undeground JSON for one of the url's set above
		$.ajax({
			url: url, //"http://api.wunderground.com/api/a4ce678b4426738b/geolookup/conditions/q/"+zipCode+".json", 
			dataType: "jsonp",
			success: function(parsed_json) {
				
				var zip = parsed_json.location.zip;
				var location = parsed_json.location.city;
				var country = parsed_json.location.country_name;
				var weather = parsed_json.current_observation.weather;
				var temp_f = parsed_json.current_observation.temp_f;
				var humidity = parsed_json.current_observation.relative_humidity;
				var wind = parsed_json.current_observation.wind_string
				// console.log(location);			
				//var weatherIN = "<h2>" + location + "</h2><p>" + weather + "</p><p>temp:" + temp_f + "</p><p>humidity:" + humidity + "</p><p>wind:" + wind + "</p>";
				// console.log('weatherIN:',weatherIN);
				// document.getElementById('forecastResults').innerHTML = location;
				//put the weatherIN string with context and variables into the results div as html
				//document.getElementById('weatherResults').innerHTML = weatherIN;
				console.log('1st url is ',url,'zip is:',zip);

				document.getElementById('cityResults').innerHTML = location;
				document.getElementById('countryResults').innerHTML = country;
				document.getElementById('zipResults').innerHTML = zip;
				document.getElementById('conditionsResults').innerHTML = weather;
				document.getElementById('temperatureResults').innerHTML = temp_f;
				document.getElementById('humidityResults').innerHTML = humidity;
				document.getElementById('windResults').innerHTML = wind;
			}
		
		//logs a success in the console if everything works!
		}).done(function() {
	    	//console.log("success");	
	  	}).fail(function() {
	    	console.log("Something has gone wrong, the weather could not be retrieved!"); 
	  	});

	  	$.ajax({
			url: forecastUrl, 
			dataType: "jsonp",
			success: function(parsed_json) {
				// console.log(parse_json.length);
				//set variables for a few of the parsed weather values
				console.log('1st forecastUrl is');
				console.log('arr len',parsed_json.forecast.txt_forecast.forecastday.length);
				var date = parsed_json.forecast.txt_forecast.date;
				var tr;
			    for (var i = 0; i < parsed_json.forecast.txt_forecast.forecastday.length; i++) {
			    	
			    	console.log('day is:',parsed_json.forecast.txt_forecast.forecastday[i].title)
			    	document.getElementById('dateResults').innerHTML = date;
					document.getElementById('dayResults').innerHTML = parsed_json.forecast.txt_forecast.forecastday[i].title;
					document.getElementById('foretextResults').innerHTML = parsed_json.forecast.txt_forecast.forecastday[i].fcttext;
			        // tr = $('<tr/>');
			        // tr.append("<td>" + date + "</td>");
			        // tr.append("<td>" + parsed_json.forecast.txt_forecast.forecastday[i].title + "</td>");
			        // tr.append("<td>" + parsed_json.forecast.txt_forecast.forecastday[i].fcttext + "</td>");
			        // $('forecastTable').append(tr);
			    }
				// console.log(parse_json);
				//set variables for a few of the parsed weather values
				
				var day = parsed_json.forecast.txt_forecast.forecastday[0].title;
				var forecast = parsed_json.forecast.txt_forecast.forecastday[0].fcttext;
				
				//console.log(location);			
				//put some context around the weather values that you just parsed out
				//var weatherIN = "<h2>" + location + "</h2><p>" + weather + "</p><p>temp:" + temp_f + "</p><p>humidity:" + humidity + "</p><p>wind:" + wind + "</p>";
				//console.log('weatherIN:',weatherIN);
				// document.getElementById('dateResults').innerHTML = date;
				// document.getElementById('dayResults').innerHTML = day;
				// document.getElementById('foretextResults').innerHTML = forecast;
				console.log('1st forecastUrl is', forecastUrl,'day',day);
			}
		
		//logs a success in the console if everything works!
		}).done(function() {
	    	//console.log("success");		  	
	  	}).fail(function() {
	    	console.log("Something has gone wrong, the forecast could not be retrieved!"); 
	  	});
	  	

	  	//reset previous weather 
		var clearValues = document.getElementById("clear");
		clearValues.onsubmit = function(e){
			// e.preventDefault();
			zipCode = document.getElementById('zipCode').value = "";
			countrySelect = document.getElementById('countrySelect').value = "";
			city = document.getElementById('city').value = "";
			state = document.getElementById('state').value = "";
		}
  	}

  });
