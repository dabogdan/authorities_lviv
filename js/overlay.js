const descriptionPopup = document.getElementById('description-popup');
const institutionText = document.getElementById('institution-text');
const institutionTitle = document.getElementById('institution-title');
const regionsPopup = document.getElementById('regions-popup');
let openDescription = document.getElementsByClassName('open-description');

// insert the institution data and title into ".description-popup"
let onClick = (element) => {
    let objectName = element.getAttribute("obj").toString();//receiving attribute from the <a>-button
    let foundName;//declaring the variable to store the object name in it
    //looping through the institutions array and checking against the received attribute (objectName)
    for (let i = 0; i < institutions_Lviv_Region.length ; i++) {
        if (objectName === institutions_Lviv_Region[i].name) {
            foundName = institutions_Lviv_Region[i];
        }
    }
    //changing the innerHTML of the .half-overlay
    institutionTitle.innerHTML = foundName.title;
    institutionText.innerHTML = foundName.description;
}



//adding eventListeners to all tags with the class 'open-description'
for(let i = 0; i < openDescription.length; i++) {
    openDescription[i].addEventListener('click', () => {
        descriptionPopup.classList.add('half-overlay');
    });
}

//eventListener to close the 'half-overlay' button
document.getElementById('close-btn').addEventListener('click', () => {
    descriptionPopup.classList.remove('half-overlay');
});

//eventListeners to open and and close full-overlay with regions choice
document.querySelector('.dropdown').addEventListener('click', () => {
    regionsPopup.classList.add('full-overlay');
});
document.getElementById('close-btn-regions').addEventListener('click', () => {
    regionsPopup.classList.remove('full-overlay');
});