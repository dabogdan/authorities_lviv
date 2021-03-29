const descriptionPopup = document.getElementById('description-popup');
const innerPopup = document.querySelector('.inside-popup');
// const institutionText = document.getElementById('institution-text');
// const institutionTitle = document.getElementById('institution-title');
const regionsPopup = document.getElementById('regions-popup');
const openDescription = document.getElementsByClassName('open-description');
// const

// insert the institution data and title into ".description-popup"
const onClick = (element) => {
    innerPopup.innerText = '';

    let objectName = element.getAttribute("obj").toString();//receiving attribute from the <a>-button

    let foundName;//declaring the variable to store the object name in it
    //looping through the institutions array and checking against the received attribute (objectName)
    for (let i = 0; i < institutions_Lviv_Region.length; i++) {
        if (objectName === institutions_Lviv_Region[i].name) {
            foundName = institutions_Lviv_Region[i];
            break;
        }
    }

    let institutionsTitle = document.createElement('ul')
    institutionsTitle.className = 'institution-title';
    institutionsTitle.id = 'institution-title';
    institutionsTitle.innerText = foundName.title;
    institutionsTitle.style.color = '#EAFE00';
    innerPopup.appendChild(institutionsTitle);


    let institutionText = document.createElement('ul');
    institutionText.id = 'institution-text';
    institutionText.className = 'institution-text';
    // institutionText.setAttribute('data-simplebar-auto-hide', 'false');
    // institutionText.setAttribute('data-simplebar', '');
    innerPopup.appendChild(institutionText);

    let weDoUlTag = document.createElement('p');
    if (language == "ukr") {
        weDoUlTag.textContent = 'Що ми робимо:';
    } else if (language == "eng") {
        weDoUlTag.textContent = 'What we do:';
    }
    weDoUlTag.style.color = '#EAFE00';
    weDoUlTag.style.margin = '1rem 0';
    institutionText.appendChild(weDoUlTag);

    foundName.weDo.forEach((e) => {
        let node = document.createElement('li');
        institutionText.appendChild(node);

        let listMarker = document.createElement('img');
        listMarker.src = "images/caret-right.svg";
        listMarker.style.width = "5px";
        listMarker.style.margin = "0 7px -3px 0";
        listMarker.style.padding = "1px 0 0";
        node.appendChild(listMarker);

        let p = document.createElement('p');
        p.innerText = e;
        p.style.display = 'inline';
        node.appendChild(p);
    })

    let weDontUlTag = document.createElement('p');
    if (language === "ukr") {
        weDontUlTag.textContent = 'Що ми не робимо:';
    } else if (language === "eng") {
        weDontUlTag.textContent = 'What we do not do:';
    }
    weDontUlTag.style.color = '#EAFE00';
    weDontUlTag.style.margin = '1rem 0';
    institutionText.appendChild(weDontUlTag);

    foundName.weDont.forEach((e) => {

        let node = document.createElement('li');
        institutionText.appendChild(node);

        let listMarker = document.createElement('img');
        listMarker.src = "images/caret-right.svg";
        listMarker.style.width = "5px";
        listMarker.style.margin = "0 7px -3px 0";
        listMarker.style.padding = "1px 0 0";
        node.appendChild(listMarker);

        let p = document.createElement('p');
        p.innerText = e;
        p.style.display = 'inline';
        node.appendChild(p);
    })


    //changing the innerHTML of the .half-overlay
    // institutionTitle.innerText = foundName.title;
    // institutionText.innerText = foundName.description;
}


//adding eventListeners to all tags with the class 'open-description'
for (let i = 0; i < openDescription.length; i++) {
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