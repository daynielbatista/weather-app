window.addEventListener('load', ()=> {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;


            /*fetch("https://weather2020-weather-v1.p.rapidapi.com/e8ecee8ff60c478f8a36280fea0524fe/39.0997,94.5783", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
                    "x-rapidapi-key": "3abbd4eb03msh862f96d4571b3c8p147a29jsn4c8363c86281"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });*/

            

        });
    } else {
        h1.textContent = "Please allow the app to access your location to show the weather in your area."
    }
});