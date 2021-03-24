let descriptionTag = document.querySelector('.description');

let lviv_region_map_data = {
    x: 49.837,
    y: 24.032,
    z: 14
}

let institutions_Lviv_Region = [
    lvivPPO = {
        name: `lvivPPO`,
        title: `Львівська обласна прокуратура`,
        description:    `Що ми робимо: <br><br>
                    <li> - підтримуємо публічне обвинувачення в суді (в рамках кримінального провадження);</li>
                    <li> -	розглядаємо скарги та відновлюємо Ваші порушені права у разі:
                    <li>   -	недотримання термінів досудового розслідування в кримінальному провадженні;</li>
                    <li>   - відмови у реєстрації кримінального провадження;</li>
                    <li>   -	зупинення досудового розслідування;</li>
                    <li>   - закриття кримінального провадження;</li>
                    <li>   -	відмови у визнанні потерпілим;</li>
                    <li>  -	розглядаємо скарги щодо порушення прав в’язнів у місцях несвободи та інших громадян при застосування до них заходів адміністративного впливу.</li>
                        <br> Що ми не робимо:<br><br>
                    <li> - не представляємо інтереси громадян в суді;</li>
                    <li> -не розглядаємо скарги на дії, рішення чи бездіяльність державних та самоврядних органів, працівників патрульної поліції м.Львова та Львівської області;</li>
                    <li> - не проводимо перевірок з питань додержання і застосування законів;</li>
                    <li> - не притягаємо до відповідальності службових осіб, які не надали відповідь на Ваше звернення або запит про доступ до публічної інформації;</li>
                    <li> -не розглядаємо звернення щодо можливого порушення земельного законодавства, незаконного використання земельних ресурсів, врегулювання земельних відносин;</li>
                    <li> -не розглядаємо звернення з приводу порушення законодавства про звернення громадян, про доступ до публічної інформації.</li>`,
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
        description:    `Що ми робимо: <br><br>
                        <li>- забезпечуємо захист державного суверенітету та конституційного ладу від протиправних посягань;</li>
                        <li>- здійснюємо захист законних інтересів держави та прав громадян від розвідувально-підривної діяльності іноземних спецслужб;</li>
                        <li>- виявляємо, припиняємо, розкриваємо злочини проти основ національної безпеки України, миру, безпеки людства, та міжнародного правопорядку, контрабанди;</li>     
                        <li>- є головним органом у загальнодержавній системі боротьби з терористичною діяльністю.</li>
                         
                        <br>Що ми не робимо:<br><br>
                        <li>-         не здійснюємо керівництво досудовим розслідуванням, не надаємо слідчим вказівок, не скасовуємо постанови слідчих;</li>
                        <li>-         не втручаємось у цивільно-правові відносини;</li>
                        <li>-       не переглядаємо судові рішення на предмет їх законності і обґрунтованості;</li>
                        <li>-         не здійснюємо охорону громадського порядку.</li>`,

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
        description:    `Що ми робимо: <br><br>
                        <li>- забезпечуємо дотримання Ваших прав і свобод;</li>
                        <li>- попереджуємо громадян не вчиняти кримінальних та адміністративних правопорушень;</li>
                        <li>- попереджуємо, розкриваємо, припиняємо та розслідуємо злочини;</li>
                        <li>- припиняємо адміністративні правопорушення;</li>
                        <li>- розшукуємо та затримуємо осіб, що переховуються за вчинення злочинів, а також розшукуємо безвісти зниклих громадян;</li>
                        <li>- видаємо на скасовуємо дозвіл на зброю та перевіряємо її зберігання;</li>
                        <li>- контролюємо дотримання правил дорожнього руху;</li>
                        <li>- забезпечуємо правопорядок у місцях великого скупчення людей;</li>
                        <li>- вживаємо заходів по протидії домашньому насильству.</li>
                        
                        <br>Що ми не робимо:<br><br>
                        <li>- не розглядаємо цивільні спори;</li>
                        <li>- не постановляємо вироків по кримінальних провадженнях;</li>
                        <li>- не переглядаємо рішення судів, прокуратури, органів місцевого самоврядування, а також не притягуємо цих посадових осіб до дисциплінарної відповідальності;</li> 
                        <li>- не проводимо перевірки суб’єктів підприємницької діяльності;</li>
                        <li>- не надаємо довідки про відсутність (наявність) судимості.</li>`,
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
        description:    `Що ми робимо: <br><br>
                        <li>- розглядаємо звернення на дії (бездіяльність) органів влади, які призвели до порушення Ваших прав і свобод;</li>
                        <li>- здійснюємо контроль щодо захисту прав і свобод заявників, (дотримання прав дитини та сім\`ї; соціальних; економічних прав);</li>
                        <li>- здійснюємо захист персональних даних;</li>
                        <li>- здійснюємо захист права на звернення та публічну інформацію;</li> 
                        <li>- здійснюємо контроль за дотриманням принципу недискримінації в різних сферах суспільних відносин;</li>
                        <li>- моніторимо дотримання процесуальних прав при здійсненні правосуддя;</li>
                        <li>- відвідуємо місця несвободи (у рамках реалізації національного превентивного механізму);</li>
                        <li>- забезпечуємо поновлення порушених прав і свобод людини і громадянина.</li>
                        
                        <br>Що ми не робимо:<br><br>
                        <li>- не здійснюємо досудове розслідування та не притягуємо до кримінальної відповідальності винних осіб;</li>
                        <li>- не переглядаємо судові рішення;</li>
                        <li>- не переглядаємо рішення органів державної влади, органів місцевого самоврядування, не приймаємо рішень замість цих органів та не притягуємо до дисциплінарної відповідальності їх працівників.</li>`,
        popUpLink:  "<img class=\"ombudsmanImage\" src=\"images/ombudsman.jpeg\">" + "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\" onmouseover=''>Обмудсман<br> " + "</a>",
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
    lvivOmbudsman = {
        name: `lvivOmbudsman`,
        title: `Представник Уповноваженого Верховної Ради України з прав людини в західних областях`,
        description:    `Що ми робимо: <br><br>
                        <li>- розглядаємо звернення на дії (бездіяльність) органів влади, які призвели до порушення Ваших прав і свобод;</li>
                        <li>- здійснюємо контроль щодо захисту прав і свобод заявників, (дотримання прав дитини та сім\`ї; соціальних; економічних прав);</li>
                        <li>- здійснюємо захист персональних даних;</li>
                        <li>- здійснюємо захист права на звернення та публічну інформацію;</li> 
                        <li>- здійснюємо контроль за дотриманням принципу недискримінації в різних сферах суспільних відносин;</li>
                        <li>- моніторимо дотримання процесуальних прав при здійсненні правосуддя;</li>
                        <li>- відвідуємо місця несвободи (у рамках реалізації національного превентивного механізму);</li>
                        <li>- забезпечуємо поновлення порушених прав і свобод людини і громадянина.</li>
                        
                        <br>Що ми не робимо:<br><br>
                        <li>- не здійснюємо досудове розслідування та не притягуємо до кримінальної відповідальності винних осіб;</li>
                        <li>- не переглядаємо судові рішення;</li>
                        <li>- не переглядаємо рішення органів державної влади, органів місцевого самоврядування, не приймаємо рішень замість цих органів та не притягуємо до дисциплінарної відповідальності їх працівників.</li>`,
        popUpLink:  "<img class=\"ombudsmanImage\" src=\"images/ombudsman.jpeg\">" + "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\" onmouseover=''>Обмудсман<br> " + "</a>",
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
    lvivOmbudsman = {
        name: `lvivOmbudsman`,
        title: `Представник Уповноваженого Верховної Ради України з прав людини в західних областях`,
        description:    `Що ми робимо: <br><br>
                        <li>- розглядаємо звернення на дії (бездіяльність) органів влади, які призвели до порушення Ваших прав і свобод;</li>
                        <li>- здійснюємо контроль щодо захисту прав і свобод заявників, (дотримання прав дитини та сім\`ї; соціальних; економічних прав);</li>
                        <li>- здійснюємо захист персональних даних;</li>
                        <li>- здійснюємо захист права на звернення та публічну інформацію;</li> 
                        <li>- здійснюємо контроль за дотриманням принципу недискримінації в різних сферах суспільних відносин;</li>
                        <li>- моніторимо дотримання процесуальних прав при здійсненні правосуддя;</li>
                        <li>- відвідуємо місця несвободи (у рамках реалізації національного превентивного механізму);</li>
                        <li>- забезпечуємо поновлення порушених прав і свобод людини і громадянина.</li>
                        
                        <br>Що ми не робимо:<br><br>
                        <li>- не здійснюємо досудове розслідування та не притягуємо до кримінальної відповідальності винних осіб;</li>
                        <li>- не переглядаємо судові рішення;</li>
                        <li>- не переглядаємо рішення органів державної влади, органів місцевого самоврядування, не приймаємо рішень замість цих органів та не притягуємо до дисциплінарної відповідальності їх працівників.</li>`,
        popUpLink:  "<img class=\"ombudsmanImage\" src=\"images/ombudsman.jpeg\">" + "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\" onmouseover=''>Обмудсман<br> " + "</a>",
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
    institutions_Lviv_Region[i].onmouseover = L.marker([institutions_Lviv_Region[i].marker.x, institutions_Lviv_Region[i].marker.y], {icon: myIcon}).addTo(mymap)
            .bindPopup(institutions_Lviv_Region[i].popUpLink);
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