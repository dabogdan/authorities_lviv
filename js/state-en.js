const descriptionTag = document.querySelector('.description');

const language = "eng";

let lviv_region_map_data = {
    x: 49.837,
    y: 24.032,
    z: 14
}

let institutions_Lviv_Region = [
    lvivPPO = {
        name: `lvivPPO`,
        title: `Lviv Regional Public Prosecution Office`,
        weDo: [
            "support public prosecution in court (in the frame of criminal proceedings);",
            "we solve complaints and restore your violated rights in cases of:",
            "non-compliance with the duration of pre-trial investigation in criminal proceedings;",
            "refusal to register criminal case;",
            "suspension of the pre-trial investigation;",
            "closure of criminal proceedings;",
            "non-recognition as a victim;",
            "consider complaints about the violation of the rights of prisoners in places of detention and other citizens when applying administrative measures to them."

        ],
        weDont: [
            "do not represent the interests of citizens in the court;",
            "do not consider complaints against actions, decisions or inaction of state and self-governing bodies, patrol police officers of Lviv and Lviv region;",
            "do not conduct inspections on compliance with and application of statutes;",
            "do not prosecute officials who did not respond to your request or request for access to public information;",
            "do not consider appeals regarding possible violations of land regulations, illegal use of land resources, settlement of land relations;",
            "do not consider appeals regarding violations of the legislation on citizens' appeals, on access to public information."
        ],
        popUpLink: '<img class=\"ppoImage\" src=\"images/PPO.jpeg\"><a href=\"https://lviv.gp.gov.ua/ua/index.html\" target=\"_blank\" name="LvivPPO">Prosecution<br></a>',
        onmouseover: this.name,
        imgSrc: "images/PPO.png",
        address: "Shevchenka Avenue, 17-19, Lviv, Lviv Region, 79000",
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
        title: `Department of Security Service of Ukraine in Lviv Region`,
        weDo: [
            "We ensure the protection of state sovereignty and the constitutional order against unlawful encroachments;",
            "Protect the legitimate interests of the state and the rights of citizens from the intelligence and subversive activities of foreign special services;",
            "Detect, suspend, solve crimes against the national security of Ukraine, peace, security of mankind, and international law and order, smuggling;",
            "are the main body in the nationwide system for combating terrorist activities;"
        ],
        weDont: [
            "do not provide the supervision of the pre-trial investigations, do not provide investigators with directions, do not quash the investigators' decisions;",
            "do not interfere with civil legal relations;",
            "do not review court decisions for their legality and validity;",
            "do not protect public order"
        ],
        popUpLink: " <img class=\"mapImage\" src=\"images/ssu.jpeg\"><a href=\"https://ssu.gov.ua/contacts/upravlinnia\" target=\"_blank\">SSU <br></a>",
        onmouseover: this.name,
        imgSrc: "images/SSU.png",
        address: "79012, Lviv, Vitovskoho, Str., 55",
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
        title: `Main Department of the National Police of Ukraine in Lviv Region`,
        weDo: [
            "ensure the observance of your rights and freedoms;",
            "warn citizens not to commit criminal and administrative offenses;",
            "prevent, solve, terminate and investigate crimes;",
            "stop administrative offenses;",
            "look for and detain persons hiding for committing crimes, and also to look for the missing citizens;",
            "issue and cancel a permit for a weapon and check its storage;",
            "control the observance of traffic rules;",
            "ensure the law and order in places of large crowding of people;",
            "take measures to counter domestic violence."
        ],
        weDont: [
            "we do not consider civil disputes;",
            "do not pass sentences in criminal cases;",
            "we do not review the decisions of courts, prosecutor's offices, local self-governing authorities, nor do we bring these officials to the disciplinary liability;",
            "we do not carry out inspections of business entities;",
            "we do not provide a certificate of absence (presence) of criminal record."
        ],
        popUpLink: "<img class=\"policeImage\" src=\"images/police.jpeg\"><a href=\"https://www.npu.gov.ua/\" target=\"_blank\">Police<br></a>",
        onmouseover: this.name,
        imgSrc: "images/police.png",
        address: "General Hryhorenko Sq, 3, Lviv, Lviv Region, 79000",
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
        title: `Representative of Parliament Commissioner for Human Rights in Western Regions`,
        weDo: [
            "consider requests in relation to actions (inaction) of a state authorities that caused the violation of your rights and freedoms;",
            "exercise control over the protection of the rights and freedoms of the applicants (observance of rights of the child and the family; social; economic rights);",
            "conduct the personal data protection;",
            "conduct the protection of the right to apply and receive public information;",
            "conduct a control over the observance of the principle of non-discrimination in various spheres of public relations;",
            "monitor the observance of procedural rights in the administration of justice;",
            "visit places of non-liberty (within the framework of the implementation of the national preventive mechanism);",
            "ensure the restoration of violated human and citizen’s rights and freedoms.",
        ],
        weDont: [
            "we do not conduct a pre-trial investigation and do not bring guilty persons to the criminal liability;",
            "we do not review the court decisions;",
            "we do not review the decisions of the public authorities, local self-governing bodies, do not make any decisions instead of these authorities and do not bring their staff members to the disciplinary liability."
        ],
        popUpLink: "<img class=\"ombudsmanImage\" src=\"images/ombudsman.jpeg\">" + "<a href=\"http://www.ombudsman.gov.ua/ru/page/secretariat/regionalni-predstavnicztva-upovnovazhenogo/\" target=\"_blank\" onmouseover=''>Ombudsman<br> " + "</a>",
        onmouseover: this.name,
        imgSrc: "images/ombudsman.jpg",
        address: "Vynnychenka Str, 18, Lviv, Lviv Region, 79000",
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
    lvivSBI = {
        name: 'lvivSBI',
        title: 'Territorial Unit of the State Bureau of Investigations, located in Lviv city',
        weDo: [
            "prevent, detect, stop, solve and investigate war crimes, crimes committed by high-ranking officials, judges, law enforcement officers;",
            "we carry out operational and investigative activities and pre-trial investigation of crimes under the jurisdiction of the DBR."
        ],
        weDont: [
            "we do not decide on and do not perform tasks, functions and powers of other law enforcement or judicial agencies, bodies of representative and executive state governance, bodies of local self-government."
        ],
        popUpLink: "<img class=\"SBIImage\" src=\"images/sbi.jpeg\">" + "<a href=\"https://dbr.gov.ua/ter/lviv\" target=\"_blank\" onmouseover=''>SBI<br> " + "</a>",
        onmouseover: this.name,
        imgSrc: "images/sbi.png",
        address: "Maksyma Kryvonosa Str, 6, Lviv, Lviv Region, 79000",
        btnHref: "https://dbr.gov.ua/ter/lviv",
        webHref: "https://dbr.gov.ua/ter/lviv",
        marker: {
            x: 49.844715,
            y: 24.038897,
        },
        facebook: null,
        insta: null,
        twitter: null,
        photo: "url('images/sbi.jpeg')"
    },
    lvivFLAC = {
        name: 'lvivFLAC',
        title: 'Lviv Regional Free Legal Aid Centre',
        weDo: [
            "advise on any legal issues;",
            "explain your rights;",
            "help to solve legal problems;",
            "write the necessary complaints;",
            "find the necessary information placed in the registers of the Ministry of Justice of Ukraine;",
            "We provide a 24/7 free lawyer for detainees.",
            "In some cases, we provide a free lawyer or a lawyer of the local center:" +
            " solve the problem in court."
        ],
        weDont: [
            "we do not provide a free lawyer or a lawyer of the local center for everyone, but only for the most vulnerable, such as low-income persons, pensioners with the lowest pension, anti-terrorist operation participants, internally displaced persons, refugees, rehabilitated and others;",
            "do not investigate criminal proceedings;",
            "do not administer justice;",
            "do not prosecute."
        ],
        popUpLink: "<img class=\"FLACImage\" src=\"images/flac.webp\">" + "<a href=\"https://www.legalaid.gov.ua/tsentry/lvivskyj-mistsevyj-tsentr-z-nadannya-bezoplatnoyi-vtorynnoyi-pravovoyi-dopomogy\" target=\"_blank\" onmouseover=''>SBI<br> " + "</a>",
        onmouseover: this.name,
        imgSrc: "images/flac.svg",
        address: "Vynnychenka Str, 30, Lviv, Lviv Region, 79008",
        btnHref: "https://www.legalaid.gov.ua/tsentry/lvivskyj-mistsevyj-tsentr-z-nadannya-bezoplatnoyi-vtorynnoyi-pravovoyi-dopomogy/",
        webHref: "https://www.legalaid.gov.ua/tsentry/lvivskyj-mistsevyj-tsentr-z-nadannya-bezoplatnoyi-vtorynnoyi-pravovoyi-dopomogy/",
        marker: {
            x: 49.844538,
            y: 24.037258,
        },
        facebook: null,
        insta: null,
        twitter: null,
        photo: "url('images/flac.webp')"
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