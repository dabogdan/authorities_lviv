let Lviv_PPO = "<a href=\"https://lviv.gp.gov.ua/ua/index.html\" target=\"_blank\">Прокуратура<br> <img class=\"ppoImage\" src=\"images/PPO.jpeg\"></a>";
let Lviv_SSU = "<a href=\"https://ssu.gov.ua/contacts/upravlinnia\" target=\"_blank\">СБУ <br> <img class=\"mapImage\" src=\"images/SSU.png\"></a>";
let Lviv_Police = "<a href=\"https://www.npu.gov.ua/\" target=\"_blank\">Поліція<br> <img class=\"policeImage\" src=\"images/police.png\"></a>";
let Lviv_Ombudsman = "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\">Обмудсман<br> <img class=\"ombudsmanImage\" src=\"images/ombudsman.jpg\"></a>";

let mymap = L.map('mapid').setView([49.837, 24.032], 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


// marker!


// Lviv PPO

const ppoMarker = L.marker([49.83675, 24.03211]).addTo(mymap)
    .bindPopup(Lviv_PPO).openPopup();

// Lviv SSU

const ssuMarker = L.marker([49.831588, 24.019117]).addTo(mymap)
    .bindPopup(Lviv_SSU);

// Lviv Police
const policeMarker = L.marker([49.842108, 24.022006]).addTo(mymap)
    .bindPopup(Lviv_Police);

// Ombudsman
const ombudsmanMarker = L.marker([49.840785, 24.037069]).addTo(mymap)
    .bindPopup(Lviv_Ombudsman);

// popup
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Ви натиснули карту на точці " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);