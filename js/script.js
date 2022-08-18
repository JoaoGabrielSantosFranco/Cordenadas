let h2 = document.querySelector('h2');


function success(position) {
    console.log(position);
    h2 = `Latitude:${position.coords.latitude}, Longitude:${position.coords.longitude}`;
    document.getElementById("cordenadas").innerHTML = h2;

    var map = L.map('map').setView([position.coords.latitude, position.coords.longitude], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(map)
        .bindPopup('Voce Está Aqui')
        .openPopup();
 
}

function error(err) {
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    timeout: 10000,
    enableHighAccuracy: true,
});



 