const descriptionPopup = document.getElementById('description-popup');
const institutionText = document.getElementById('institution-text');
const institutionTitle = document.getElementById('institution-title');
const regionsPopup = document.getElementById('regions-popup');
let openDescription = document.getElementsByClassName('open-description');
// const regionsList = document.getElementById('regions-list');

// insert the institution data and title into ".description-popup"
let onClick = (element) => {
    console.log(element);
    institutionTitle.innerHTML = element.getAttribute('description-title');
    institutionText.innerHTML = element.getAttribute('description-data');
}

//adding eventListeners to all tags with the class 'open-description'
for(let i = 0; i < openDescription.length; i++) {
    openDescription[i].addEventListener('click', () => {
        descriptionPopup.classList.add('half-overlay');
    });
}
document.getElementById('close-btn').addEventListener('click', () => {
    descriptionPopup.classList.remove('half-overlay');
});

document.querySelector('.dropdown').addEventListener('click', () => {
    regionsPopup.classList.add('full-overlay');
});
document.getElementById('close-btn-regions').addEventListener('click', () => {
    regionsPopup.classList.remove('full-overlay');
});