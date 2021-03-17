let paragraphs = document.querySelectorAll('.paragraph');

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
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(238,238,238, 0.65)';
}

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundImage = institutions_Lviv_Region[i].photo;
}