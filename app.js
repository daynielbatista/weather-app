window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureSection = document.querySelector(".temperature");
    let locationTimezone = document.querySelector(".location-timezone");
    const temperatureSpan = document.querySelector(".temperature span");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            //console.log('position: ',position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            //const api =`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
            //No const api =`https://fcc-weather-api.glitch.me/api/current?lon=:${long}&lat=:${lat}`;
            const api = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=054374e7495d292bbd59351f7e77bffe`;
            
                        
            fetch(api, { "method": "GET" })            
            //console.log('verificando: ', fetch(api, { "method": "GET" }));
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('data: ', data);
                //const { temperature, summary } = data.currently;
                // const temperature = data.main.temp;
                // const summary = data.weather['0'].description.toUpperCase();
                // const icon = data.
                const temperature = data.main.temp;
                const summary = data.weather['0'].description.toUpperCase();
                const icon = data.weather['0'].icon;

                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.name;
                //Formula for Celsius
                let celsius

                //Set Icon
                setIcons(icon, document.querySelector(".icon"));
                //Change temp tp Celcius/Farenheit
                temperatureSection.addEventListener('click', () =>{
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                    } else{
                        temperatureSpan.textContent = "F";
                    }
                });


            });
            .catch(err => {
                console.log(err);
            });    

        });
    } else {
        h1.textContent = "Please allow the app to access your location to show the weather in your area."
    }

    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
 
});