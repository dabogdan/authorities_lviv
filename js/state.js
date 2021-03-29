const descriptionTag = document.querySelector('.description');

let lviv_region_map_data = {
    x: 49.837,
    y: 24.032,
    z: 14
}

let institutions_Lviv_Region = [
    lvivPPO = {
        name: `lvivPPO`,
        title: `Львівська обласна прокуратура`,
        weDo: [
            "підтримуємо публічне обвинувачення в суді (в рамках кримінального провадження);",
            "розглядаємо скарги та відновлюємо Ваші порушені права у разі:",
            "недотримання термінів досудового розслідування в кримінальному провадженні;",
            "відмови у реєстрації кримінального провадження;",
            "зупинення досудового розслідування;",
            "закриття кримінального провадження;",
            "відмови у визнанні потерпілим;",
            "розглядаємо скарги щодо порушення прав в’язнів у місцях несвободи та інших громадян при застосування до них заходів адміністративного впливу."
        ],
        weDont: [
            "не представляємо інтереси громадян в суді;",
            "не розглядаємо скарги на дії, рішення чи бездіяльність державних та самоврядних органів, працівників патрульної поліції м.Львова та Львівської області;",
            "не проводимо перевірок з питань додержання і застосування законів;",
            "не притягаємо до відповідальності службових осіб, які не надали відповідь на Ваше звернення або запит про доступ до публічної інформації;",
            "не розглядаємо звернення щодо можливого порушення земельного законодавства, незаконного використання земельних ресурсів, врегулювання земельних відносин;",
            "не розглядаємо звернення з приводу порушення законодавства про звернення громадян, про доступ до публічної інформації."
        ],
        popUpLink: '<img class=\"ppoImage\" src=\"images/PPO.jpeg\"><a href=\"https://lviv.gp.gov.ua/ua/index.html\" target=\"_blank\" name="LvivPPO">Прокуратура<br></a>',
        onmouseover: this.name,
        imgSrc: "images/PPO.png",
        address: "проспект Шевченка, 17-19, Львів, Львівська область, 79000",
        btnHref: "https://lviv.gp.gov.ua/ua/index.html",
        webHref: "https://lviv.gp.gov.ua/ua/index.html",
        marker: {
            x: 49.83675,
            y: 24.03211,
        },
        facebook: "https://www.facebook.com/lviv.gp.gov.ua/",
        insta: null,
        twitter: null,
        photo: "url('images/PPO.jpeg')",
    },
    lvivSSU = {
        name: `lvivSSU`,
        title: `Управління Служби безпеки України у Львівській області`,
        weDo: ["забезпечуємо захист державного суверенітету та конституційного ладу від протиправних посягань;",
            "здійснюємо захист законних інтересів держави та прав громадян від розвідувально-підривної діяльності іноземних спецслужб;",
            "виявляємо, припиняємо, розкриваємо злочини проти основ національної безпеки України, миру, безпеки людства, та міжнародного правопорядку, контрабанди;",
            "є головним органом у загальнодержавній системі боротьби з терористичною діяльністю."],
        weDont: ["не здійснюємо керівництво досудовим розслідуванням, не надаємо слідчим вказівок, не скасовуємо постанови слідчих;",
            "не втручаємось у цивільно-правові відносини;",
            "не переглядаємо судові рішення на предмет їх законності і обґрунтованості;",
            "не здійснюємо охорону громадського порядку.",],
        popUpLink: " <img class=\"mapImage\" src=\"images/ssu.jpeg\"><a href=\"https://ssu.gov.ua/contacts/upravlinnia\" target=\"_blank\">СБУ <br></a>",
        onmouseover: this.name,
        imgSrc: "images/SSU.png",
        address: "79012, м. Львів, вул. Вітовського, 55",
        btnHref: "https://ssu.gov.ua/contacts/upravlinnia",
        webHref: "https://ssu.gov.ua/contacts/upravlinnia",
        marker: {
            x: 49.831588,
            y: 24.019117,
        },
        facebook: 'https://www.facebook.com/SBULviv/',
        insta: 'https://www.instagram.com/lvivsbu/',
        twitter: null,
        photo: "url('images/ssu.jpg')"
    },
    lvivNPU = {
        name: `lvivNPU`,
        title: `Головне управління Національної поліції України у Львівській області`,
        weDo: [
            "забезпечуємо дотримання Ваших прав і свобод;",
            "попереджуємо громадян не вчиняти кримінальних та адміністративних правопорушень;",
            "попереджуємо, розкриваємо, припиняємо та розслідуємо злочини;",
            "припиняємо адміністративні правопорушення;",
            "розшукуємо та затримуємо осіб, що переховуються за вчинення злочинів, а також розшукуємо безвісти зниклих громадян;",
            "видаємо на скасовуємо дозвіл на зброю та перевіряємо її зберігання;",
            "контролюємо дотримання правил дорожнього руху;",
            "забезпечуємо правопорядок у місцях великого скупчення людей;",
            "вживаємо заходів по протидії домашньому насильству."],

        weDont: [
            "не розглядаємо цивільні спори;",
            "не постановляємо вироків по кримінальних провадженнях;",
            "не переглядаємо рішення судів, прокуратури, органів місцевого самоврядування, а також не притягуємо цих посадових осіб до дисциплінарної відповідальності;",
            "не проводимо перевірки суб’єктів підприємницької діяльності;",
            "не надаємо довідки про відсутність (наявність) судимості."],
        popUpLink: "<img class=\"policeImage\" src=\"images/police.jpeg\"><a href=\"https://www.npu.gov.ua/\" target=\"_blank\">Поліція<br></a>",

        onmouseover: this.name,
        imgSrc: "images/police.png",
        address: "площа Генерала Григоренка, 3, Львів, Львівська область, 79000",
        btnHref: "https://www.npu.gov.ua/",
        webHref: "https://www.npu.gov.ua/",
        marker: {
            x: 49.842108,
            y: 24.022006,
        },
        facebook: "https://www.facebook.com/MVS.LVIV/",
        insta: "https://www.instagram.com/lviv_region_police/",
        twitter: "https://twitter.com/lv_npu_gov_ua",
        photo: "url('images/police.jpeg')"
    },
    lvivOmbudsman = {
        name: `lvivOmbudsman`,
        title: `Представник Уповноваженого Верховної Ради України з прав людини в західних областях`,
        weDo: [
            "розглядаємо звернення на дії (бездіяльність) органів влади, які призвели до порушення Ваших прав і свобод;",
            "здійснюємо контроль щодо захисту прав і свобод заявників, (дотримання прав дитини та сім\`ї; соціальних; економічних прав);",
            "здійснюємо захист персональних даних;",
            "здійснюємо захист права на звернення та публічну інформацію;",
            "здійснюємо контроль за дотриманням принципу недискримінації в різних сферах суспільних відносин;",
            "моніторимо дотримання процесуальних прав при здійсненні правосуддя;",
            "відвідуємо місця несвободи (у рамках реалізації національного превентивного механізму);",
            "забезпечуємо поновлення порушених прав і свобод людини і громадянина."],
        weDont: [
            "не здійснюємо досудове розслідування та не притягуємо до кримінальної відповідальності винних осіб;",
            "не переглядаємо судові рішення;",
            "не переглядаємо рішення органів державної влади, органів місцевого самоврядування, не приймаємо рішень замість цих органів та не притягуємо до дисциплінарної відповідальності їх працівників."],
        popUpLink: "<img class=\"ombudsmanImage\" src=\"images/ombudsman.jpeg\">" + "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\" onmouseover=''>Обмудсман<br> " + "</a>",
        onmouseover: this.name,
        imgSrc: "images/ombudsman.jpg",
        address: "вул. Винниченка, 18, м. Львів, 79000",
        btnHref: "http://www.ombudsman.gov.ua/ua",
        webHref: "http://www.ombudsman.gov.ua/ua",
        marker: {
            x: 49.840785,
            y: 24.037069,
        },
        facebook: null,
        insta: null,
        twitter: null,
        photo: "url('images/ombudsman.jpeg')"
    },
]

//creating map
let mymap = L.map('mapid').setView([lviv_region_map_data.x, lviv_region_map_data.y], lviv_region_map_data.z);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

//marker icon
let myIcon = L.icon({
    iconUrl: 'images/marker-icon.svg',
    iconSize: [20, 35],
    shadowUrl: 'images/marker-shadow.png',
    shadowSize: [20, 30],
    shadowAnchor: [5, 20],
});

// creating markers and insert them into the array of instutitions
for (let i = 0; i < institutions_Lviv_Region.length; i++) {
    institutions_Lviv_Region[i].onmouseover = L.marker(
        [institutions_Lviv_Region[i].marker.x,
            institutions_Lviv_Region[i].marker.y],
        {icon: myIcon}).addTo(mymap).bindPopup(institutions_Lviv_Region[i].popUpLink);
}

// popup
let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("Ви натиснули карту на точці " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

mymap.invalidateSize();