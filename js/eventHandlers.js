const paragraphs = document.querySelectorAll('.paragraph');
const header = document.querySelector('.header');
const inputs = document.querySelectorAll('.input')

const aboutLink = document.querySelectorAll('.about-link');
const supportLink = document.querySelectorAll('.support-link')
const aboutSection = document.querySelector('#about');
const supportSection = document.querySelector('#support')
const links = [aboutLink, supportLink];
const anchors = [aboutSection, supportSection];

console.log(links);

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
}

function unhighlightCard (e) {
    e.children[0].children[3].children[0].style.backgroundColor = '#EAFE00';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(238,238,238, 0.8)';
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundImage = institutions_Lviv_Region[i].photo;
}

// events for links and anchors
for (let i = 0; i < links.length; i++) {
    for (let j = 0; j < links[i].length; j++) {
        links[i][j].addEventListener('click', () => {
            anchors[i].style.display = 'block';
        })
    }

}

//event listener for toggling the placeholder
inputs.forEach((e) => {
    e.originPlaceHolder = e.placeholder;
    e.addEventListener('focus', () => {
      e.placeholder = '';
    });
    e.addEventListener('blur', () => {
        e.placeholder = e.originPlaceHolder;
    })
})

//smooth-scroll with the offset of the header size
if (screen.width > 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: header.offsetHeight - 50});
}
if (screen.width <= 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: nav.offsetHeight-80});
}