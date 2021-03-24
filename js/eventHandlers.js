const paragraphs = document.querySelectorAll('.paragraph');
const aboutBtn = document.querySelector('.about-link');
const aboutSection = document.querySelector('#about');
const header = document.querySelector('.header');

//change of the logo border color to red on the cards when hover over them
//add events to the button when card is highlighted
paragraphs.forEach((e) => {
    e.children[0].children[3].children[0].addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor="black";
    });
    e.children[0].children[3].children[0].addEventListener("mouseout", (event) => {
        event.target.style.backgroundColor="white";
    });
})
//card highlighting functions
function highlightCard (e) {
    e.children[0].children[3].children[0].style.backgroundColor = 'white';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(234,254,0, 1)';
    // e.style.filter = 'grayscale(0%)';
}

function unhighlightCard (e) {
    e.children[0].children[3].children[0].style.backgroundColor = '#EAFE00';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(238,238,238, 0.8)';
    // e.style.filter = 'grayscale(100%)';
    // e.children[0].children[1].filter = 'grayscale(0%)';
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundImage = institutions_Lviv_Region[i].photo;
}

// about link
aboutBtn.addEventListener('click', () => {
    aboutSection.style.display = 'block';
})


//smooth-scroll with the offset of the header size
if (screen.width > 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: header.offsetHeight - 50});
}
if (screen.width <= 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: nav.offsetHeight-80});
}