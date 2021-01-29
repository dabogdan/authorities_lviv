let paragraphs = document.querySelectorAll('.paragraph');
//change of the logo border color to red on the cards when hover over them
//add attributes for events
paragraphs.forEach((e) => {
    e.setAttribute('onmouseover', 'redBorderStyle(this);');
    e.setAttribute('onmouseout', 'normalBorderStyle(this);');
})
//change color of the card-image border
redBorderStyle = (e) => {
    e.children[0].children[0].style.border = '2px solid #EB1B51';
}
normalBorderStyle = (e) => {
    e.children[0].children[0].style.border = '2px solid rgba(57,96,109,0)';
}