// creating the card elements for the cards section
for (let i = 0; i < institutions_Lviv_Region.length; i++) {
    // create paragraphs quantity according to the array
    let tagParagraph = document.createElement("div");
    tagParagraph.classList.add("paragraph");
    tagParagraph.setAttribute('id', 'paragraph');
    descriptionTag.appendChild(tagParagraph);

    // event listener 'mouseover' of the paragraph - adding shadow

    tagParagraph.addEventListener('mouseover', () => {
        institutions_Lviv_Region[i].onmouseover.openPopup();
            for (let j = 0; j < paragraph.length; j++) {
                unhighlightCard(paragraph[j]);
        }
        highlightCard(paragraph[i]);
    });

    //eventhandler for 'click' event on the marker
    institutions_Lviv_Region[i].onmouseover.addEventListener('click', () => {
        for (let j = 0; j < paragraph.length; j++) {
            unhighlightCard(paragraph[j]);
        }
        highlightCard(paragraph[i]);
        //scroll to the card when the marker is clicked on the map
        paragraph[i].scrollIntoView({
            behavior: 'smooth',
            block: "center"
        })
    })



    //.card .grid
    let tagCard = document.createElement('div');
    tagCard.classList.add("card");
    tagCard.classList.add("grid");
    tagParagraph.appendChild(tagCard);

    //img logo
    let logoTag = document.createElement('img');
    logoTag.classList.add("card-image");
    logoTag.setAttribute('src', institutions_Lviv_Region[i].imgSrc);
    tagCard.appendChild(logoTag);

    //title
    let titleTag = document.createElement('p');
    titleTag.classList.add("title");
    titleTag.innerHTML = institutions_Lviv_Region[i].title;
    tagCard.appendChild(titleTag);

    //address
    let addressTag = document.createElement('p');
    addressTag.classList.add("address");
    addressTag.innerHTML = institutions_Lviv_Region[i].address;
    tagCard.appendChild(addressTag);

    //.institutions .grid
    let institutionsTag = document.createElement('div');
    institutionsTag.classList.add("institutions");
    institutionsTag.classList.add("grid");
    tagCard.appendChild(institutionsTag);

    //.btn
    let btnTag = document.createElement('a');
    btnTag.classList.add("btn");
    btnTag.setAttribute('href', institutions_Lviv_Region[i].btnHref);
    btnTag.setAttribute('target', 'blank');
    btnTag.innerHTML = "Сайт";
    institutionsTag.appendChild(btnTag);

    //.open-description
    let btnOpenDescription = document.createElement('a');
    btnOpenDescription.classList.add("btn");
    btnOpenDescription.classList.add("open-description");
    btnOpenDescription.setAttribute('onclick', 'onClick(this);');
    btnOpenDescription.setAttribute('obj', institutions_Lviv_Region[i].name);
    btnOpenDescription.setAttribute('target', 'blank');
    btnOpenDescription.innerHTML = "Про нас";
    institutionsTag.appendChild(btnOpenDescription);
}