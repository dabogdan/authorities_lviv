let paragraphs = document.querySelectorAll('.paragraph');
//change of the logo border color to red on the cards when hover over them
//add attributes for events
paragraphs.forEach((e) => {
    e.setAttribute('onmouseover','redBorderStyle(this);');
    e.setAttribute('onmouseout', 'normalBorderStyle(this);');
})
//change color of the card-image border
let redBorderStyle = (e) => {
    e.children[0].children[0].style.border = '2px solid #EB1B51';
}
let normalBorderStyle = (e) => {
    e.children[0].children[0].style.border = '2px solid rgba(57,96,109,0)';
}

let bigCardShadow = (e) => {
    e.style.boxShadow = '2px 2px 25px rgba(0, 0, 0, 1)';
}

let normalCardShadow = (e) => {
    e.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.4)';
}