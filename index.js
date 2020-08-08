window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude

            const api = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&long={long}&appid={bb1832fb10b414bf45d8951cf0c984ee}`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data)
                    const { temperature } = data.currently;

                    data.currently.temperature
                })
        });
    }
})