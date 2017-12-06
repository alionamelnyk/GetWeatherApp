// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        navigator.geolocation.getCurrentPosition(onGetLocationSuccess, onGetLocationError, { enableHighAccuracy: true });

        function onGetLocationSuccess(position) {
            var latitude = position.coords.latitude;
            var longtude = position.coords.longitude;
            get(latitude, longtude);
        }

        function get(lat, lon) {
            var query = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f95b9fc5813501eb46fd085f1d1ea632&units=metric`;

            fetch(query)
                .then(function (response) {
                    response.json().then(function (data) {
                        document.getElementById("city").innerText = 'City: ' + data.name;
                        document.getElementById("country").innerText = 'Country: ' + data.sys.country;
                        document.getElementById("weather").innerText = 'Weather condition: ' + data.weather[0].main;
                        document.getElementById("description").innerText = 'Weather condition details:' + data.weather[0].description;
                        document.getElementById("temperature").innerText = 'Temperature: ' + data.main.temp + ' C';
                        document.getElementById("pressure").innerText = 'Pressure: ' + data.main.pressure;
                        document.getElementById("icon").setAttribute("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
                    });
                });
        }

        function onGetLocationError(error) {
            alert("Can not get geolocation Error: " + error.code + " Error mas: " + error.message);
        }

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        // var parentElement = document.getElementById('deviceready');
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');
        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');
    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    }

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    }
})();