const header = document.querySelector('.place-map');

// creating the card elements for the cards section
for (let i = 0; i < institutions_Lviv_Region.length; i++) {
    // create paragraphs quantity according to the array
    let tagParagraph = document.createElement("div");
    tagParagraph.classList.add("paragraph");
    // tagParagraph.setAttribute('id', 'paragraph');
    descriptionTag.appendChild(tagParagraph);

    // event listeners 'mouseenter' and 'mouseleave' of the paragraph - enabling/disabling shadow

    tagParagraph.addEventListener('mouseenter', () => {
        institutions_Lviv_Region[i].onmouseover.openPopup();
            for (let j = 0; j < paragraph.length; j++) {
                unhighlightCard(paragraph[j]);
        }
        highlightCard(paragraph[i]);
    });

    tagParagraph.addEventListener('mouseleave', () => {
        for (let j = 0; j < paragraph.length; j++) {
            unhighlightCard(paragraph[j]);
        }
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
        })
    })

    //.card .grid
    let tagCard = document.createElement('div');
    tagCard.classList.add("card");
    tagCard.classList.add("grid");
    tagParagraph.appendChild(tagCard);


    //title
    let titleTag = document.createElement('p');
    titleTag.classList.add("title");
    titleTag.innerHTML = institutions_Lviv_Region[i].title;
    tagCard.appendChild(titleTag);

    //img logo
    let logoTag = document.createElement('img');
    logoTag.classList.add("card-image");
    logoTag.setAttribute('src', institutions_Lviv_Region[i].imgSrc);
    tagCard.appendChild(logoTag);

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

    //.open-description
    let btnOpenDescription = document.createElement('a');
    btnOpenDescription.classList.add("btn");
    btnOpenDescription.classList.add("open-description");
    btnOpenDescription.setAttribute('onclick', 'onClick(this);');
    btnOpenDescription.setAttribute('obj', institutions_Lviv_Region[i].name);
    btnOpenDescription.setAttribute('target', 'blank');
    btnOpenDescription.innerHTML = "about";
    institutionsTag.appendChild(btnOpenDescription);

    //web
    if(institutions_Lviv_Region[i].webHref != null){
        let web = document.createElement('a');
        web.classList.add('web');
        web.setAttribute('href', institutions_Lviv_Region[i].webHref);
        web.setAttribute('target', 'blank');
        institutionsTag.appendChild(web);
    }

    //facebook
    if(institutions_Lviv_Region[i].facebook != null){
        let fb = document.createElement('a');
        fb.classList.add('facebook');
        fb.setAttribute('href', institutions_Lviv_Region[i].facebook);
        fb.setAttribute('target', 'blank');
        institutionsTag.appendChild(fb);
    }

    //instagram
    if(institutions_Lviv_Region[i].insta != null) {
        let insta = document.createElement('a');
        insta.classList.add('instagram');
        insta.setAttribute('href', institutions_Lviv_Region[i].insta);
        insta.setAttribute('target', 'blank');
        institutionsTag.appendChild(insta);
    }

    //twitter
    if(institutions_Lviv_Region[i].twitter != null) {
        let twitter = document.createElement('a');
        twitter.classList.add('twitter');
        twitter.setAttribute('href', institutions_Lviv_Region[i].twitter);
        twitter.setAttribute('target', 'blank');
        institutionsTag.appendChild(twitter);
    }
}