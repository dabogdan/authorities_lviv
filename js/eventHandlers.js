const paragraphs = document.querySelectorAll('.paragraph');
const inputs = document.querySelectorAll('.input')

const aboutLink = document.querySelectorAll('.about-link');
const supportLink = document.querySelectorAll('.support-link')
const aboutSection = document.querySelector('#about');
const supportSection = document.querySelector('#support')
const footerSection = document.querySelector('.footer')
const links = [aboutLink, supportLink];
const anchors = [aboutSection, supportSection];

const searchLinks = document.querySelectorAll('.search-link');

// const searchField = document.querySelector('.search-area');
// const searchLink = document.querySelector('search');

//change of the logo border color to red on the cards when hover over them
//add events to the button when card is highlighted
paragraphs.forEach((e) => {
    e.children[0].children[3].children[0].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "black";
    });
    e.children[0].children[3].children[0].addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor = "white";
    });
})

//card highlighting functions
function highlightCard(e) {
    e.children[0].children[3].children[0].style.backgroundColor = 'white';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(234,254,0, 1)';
}

function unhighlightCard(e) {
    e.children[0].children[3].children[0].style.backgroundColor = '#EAFE00';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(238,238,238, 0.8)';
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundImage = institutions_Lviv_Region[i].photo;
}

// anchors appear on click
links.forEach((e, i) => {
    e.forEach((el) => {
        el.addEventListener('click', () => {
            anchors[i].style.display = 'block';
        })
    })
})

//event listener for toggling the placeholders
inputs.forEach((e) => {
    e.originPlaceHolder = e.placeholder;
    e.addEventListener('focus', () => {
        e.placeholder = '';
    });
    e.addEventListener('blur', () => {
        e.placeholder = e.originPlaceHolder;
    })
})


//    focus on search when click on search-link
searchLinks.forEach((e) => {
    e.addEventListener('click', () => {
        searchUsers.focus();
    })
})

//smooth-scroll with the offset of the header size
const scroll = new SmoothScroll('.link[href*="#"]', {
    header: '.header'
});


institutions_Lviv_Region.forEach((e) => {
    e.onmouseover.addEventListener('click', () => {
        anchors.forEach((el) => {
            el.style.display = 'none';
        });
        footerSection.style.display = 'none';
    })

})

// //isolate scroll effect on cards
// const isolatedScroll = require('cards');
//
// // Isolate scrolling of selected element:
// const unbindHandlers = isolatedScroll(element);
//
// // Remove isolated scroll behaviour:
// unbindHandlers();

let simpleBarDistricts = new SimpleBar(document.getElementById('cards'));
