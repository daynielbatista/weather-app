window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperature;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const api =`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
                        
            fetch(api, { "method": "GET" })            
            //console.log('fetch(api, { "method": "GET" }): ', fetch(api, { "method": "GET" }));
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log('data: ', data);
                connst { temperature, summary} = data.currently;
                //Set DOM Elements from the API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
            })
            .catch(err => {
                console.log(err);
            });

    


        });
    } else {
        h1.textContent = "Please allow the app to access your location to show the weather in your area."
    }

 
});