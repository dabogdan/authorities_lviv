let paragraphs = document.querySelectorAll('.paragraph');
//change of the logo border color to red on the cards when hover over them
//add attributes for events
paragraphs.forEach((e) => {
    e.setAttribute('onmouseover','highlightCard(this);');
    e.setAttribute('onmouseout', 'unhighlightCard(this);');
})
//change color of the card-image border
let highlightCard = (e) => {
    e.children[0].children[0].style.border = '2px solid #EB1B51';
    e.children[0].children[0].style.boxShadow = '2px 2px 10px rgba(200, 0, 0, 0.7)';
    e.style.boxShadow = '2px 2px 25px rgb(0, 0, 0)';
    e.children[0].style.color = '#EB1B51';
}

let unhighlightCard = (e) => {
    e.children[0].children[0].style.border = '2px solid rgba(57,96,109,0)';
    e.children[0].children[0].style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.8)';
    e.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.4)';
    e.children[0].style.color = 'rgb(0,0,0)';
}