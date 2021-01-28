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
// let popupName;
let itWorks = (e) => {
    console.log(e.originalEvent + ' works');
}
const ppoMarker = L.marker([49.83675, 24.03211])
    .addTo(mymap)
    .bindPopup(institutions_Lviv_Region[0].popUpLink)
    .on('mouseover', itWorks, this)
    .on('click', itWorks);
    // .addEventListener('click', (e) => {
    //     popupName = e.target._popup._contentNode.children[0].name;
    // });

// console.log(ppoMarker.name);



// Lviv SSU

const ssuMarker = L.marker([49.831588, 24.019117]).addTo(mymap)
    .bindPopup(institutions_Lviv_Region[1].popUpLink);

// Lviv Police
const policeMarker = L.marker([49.842108, 24.022006]).addTo(mymap)
    .bindPopup(institutions_Lviv_Region[2].popUpLink);

// Ombudsman
const ombudsmanMarker = L.marker([49.840785, 24.037069]).addTo(mymap)
    .bindPopup(institutions_Lviv_Region[3].popUpLink);

// popup
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Ви натиснули карту на точці " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);