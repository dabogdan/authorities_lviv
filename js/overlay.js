const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');
const descriptionPopup = document.getElementById('description-popup');
const institutionText = document.getElementById('institution-text');
const institutionTitle = document.getElementById('institution-title');
const regionsPopup = document.getElementById('regions-popup');
// const regionsList = document.getElementById('regions-list');

// insert the institution data and title into ".description-popup"
let onClick = (element) => {
    institutionTitle.innerHTML = element.getAttribute('description-title');
    institutionText.innerHTML = element.getAttribute('description-data');
}

document.querySelector('.open-description').addEventListener('click', () => {
    descriptionPopup.classList.add('half-overlay');
});
document.getElementById('close-btn').addEventListener('click', () => {
    descriptionPopup.classList.remove('half-overlay');
});

document.querySelector('.dropdown').addEventListener('click', () => {
    regionsPopup.classList.add('full-overlay');
});
document.getElementById('close-btn-regions').addEventListener('click', () => {
    regionsPopup.classList.remove('full-overlay');
});