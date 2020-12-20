var Lviv_PPO = "<a href=\"https://lviv.gp.gov.ua/ua/index.html\" target=\"_blank\">Прокуратура Львівської області <br> <img class=\"ppoImage\" src=\"images/PPO.png\"></a><br><p> Прокуратура Львівської області</p>";
var Lviv_SSU = "<a href=\"https://ssu.gov.ua/contacts/upravlinnia\" target=\"_blank\">Служба безпеки України <br> <img class=\"mapImage\" src=\"images/SSU.png\"></a><br><p> Управління Служби безпеки України у Львівській області</p>";
var Lviv_Police = "<a href=\"https://www.npu.gov.ua/\" target=\"_blank\">Наіональна поліція Львівщини<br> <img class=\"policeImage\" src=\"images/police.png\"></a><br><p> Поліція Львівщини</p>";
var Lviv_Ombudsman = "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\">Уповноважений Верховної Ради з прав людини в західних областях<br> <img class=\"ombudsmanImage\" src=\"images/ombudsman.jpg\"></a><br><p> Уповноважений Верховної Ради України з прав людини.</p>";

var rolofs = '<a href=\"https://marcus-rolofs.com\"><br> Зразок району <br> <img class=\"rolofs\" src=\"../images/rolofs.jpeg\"></a>';


var mymap = L.map('mapid').setView([49.837, 24.032], 13);

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
    .bindPopup("<b>Вітаємо!</b><br />Це " + Lviv_PPO).openPopup();

// Lviv SSU

const ssuMarker = L.marker([49.831588, 24.019117]).addTo(mymap)
    .bindPopup("<b>Вітаємо!</b><br />Це " + Lviv_SSU);

// Lviv Police
const policeMarker = L.marker([49.842108, 24.022006]).addTo(mymap)
    .bindPopup("<b>Вітаємо!</b><br />Це " + Lviv_Police);

// Ombudsman
const ombudsmanMarker = L.marker([49.840785, 24.037069]).addTo(mymap)
    .bindPopup("<b>Вітаємо!</b><br />Це " + Lviv_Ombudsman);


// circle
// L.circle([51.508, -0.11], 500, {
// 	color: 'red',
// 	fillColor: '#f03',
// 	fillOpacity: 0.5
// }).addTo(mymap).bindPopup("I am a circle.");

// polygon
const marcusPolygon = L.polygon([
    [49.838425, 24.038429],
    [49.820044, 24.023666],
    [49.820708, 23.987617],
    [49.842854, 24.02195]
]).addTo(mymap).bindPopup("Тут зображено зразок картинки зразкового району." + rolofs);

// popup
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Ви натиснули карту на точці " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

// change whatWeDo to PPO onmouseover
//
// const changeContent = document.querySelector('.whatWeDo');
//
// const whatPPO_does = '<p>' +
//     'Що ми робимо: ' +
//     '<br> - підтримуємо публічне обвинувачення в суді (в рамках кримінального провадження)\;' +
//     '<br> -	розглядаємо скарги та відновлюємо Ваші порушені права у разі:' +
//     '<br> -	недотримання термінів досудового розслідування в кримінальному провадженні; ' +
//     '<br> - відмови у реєстрації кримінального провадження\;' +
//     '<br> -	зупинення досудового розслідування\;' +
//     '<br> - закриття кримінального провадження\;' +
//     '<br> -	відмови у визнанні потерпілим;' +
//     '<br>-	розглядаємо скарги щодо порушення прав в’язнів у місцях несвободи та інших громадян при застосування до них заходів адміністративного впливу. ' +
//     '<br> Що ми не робимо:' +
//     '<br> - не представляємо інтереси громадян в суді;' +
//     '<br> -не розглядаємо скарги на дії, рішення чи бездіяльність державних та самоврядних органів, працівників патрульної поліції м.Львова та Львівської області;' +
//     '<br> - не проводимо перевірок з питань додержання і застосування законів;' +
//     '<br> - не притягаємо до відповідальності службових осіб, які не надали відповідь на Ваше звернення або запит про доступ до публічної інформації;' +
//     '<br> -не розглядаємо звернення щодо можливого порушення земельного законодавства, незаконного використання земельних ресурсів, врегулювання земельних відносин;' +
//     '<br> -не розглядаємо звернення з приводу порушення законодавства про звернення громадян, про доступ до публічної інформації' + '</p>';
//
// changeToPPO = () => {
//     changeContent.innerHTML = whatPPO_does;
// }

// change whatWeDo to SSU onmouseover
//
// const whatSSU_does = 'Що робить Служба безпеки України <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, iusto, quam. Explicabo totam dolore assumenda accusantium quis iure dignissimos placeat tempora. Quas fuga incidunt deserunt! Quasi cupiditate aut quo incidunt.'
//
//
// changeToSSU = () => {
//     changeContent.innerHTML = whatSSU_does;
// }
//
// // change whatWeDo to SSU onmouseover
//
// const whatPolice_does = 'Що робить Національна поліція України <br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum non, mollitia. Temporibus nostrum nobis cumque, cupiditate accusantium minus eius laudantium, minima ut, porro, dignissimos tempora? Optio labore et alias molestias.'
//
//
// changeToPolice = () => {
//     changeContent.innerHTML = whatPolice_does;
// }
//
// // change whatWeDo to Ombudsman onmouseover
// const whatOmbudsman_does = 'Що робить Уповноважений Верховної Ради	з прав людини<br><br> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum non, mollitia. Temporibus nostrum nobis cumque, cupiditate accusantium minus eius laudantium, minima ut, porro, dignissimos tempora? Optio labore et alias molestias.'
//
//
// changeToOmbudsman = () => {
//     changeContent.innerHTML = whatOmbudsman_does;
// }

