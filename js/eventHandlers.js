let paragraphs = document.querySelectorAll('.paragraph');

//change of the logo border color to red on the cards when hover over them
//add attributes for events
paragraphs.forEach((e) => {
    // e.setAttribute('onmouseover','highlightCard(this);');
    // e.setAttribute('onmouseout', 'unhighlightCard(this);');
})
//change color of the card-image border
function highlightCard (e) {
    e.children[0].children[3].children[0].style.backgroundColor = 'white';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(234,254,0, 1);';
    // e.children[0].children[3].children[0].addEventListener('mouseover', () =>{
    //     this.style.color = 'green';
    // });
    // e.children[0].children[0].style.boxShadow = '2px 2px 10px rgba(200, 0, 0, 0.7)';
    // e.style.boxShadow = '2px 2px 25px rgb(0, 0, 0)';
    // e.children[0].style.color = '#EB1B51';
}

function unhighlightCard (e) {
    e.children[0].children[3].children[0].style.backgroundColor = '#EAFE00';
    e.style.boxShadow = 'inset 0 0 0 2000px rgba(238,238,238, 0.85);';
    // e.children[0].children[0].style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.8)';
    // e.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.4)';
    // e.children[0].style.color = 'rgb(0,0,0)';
}
//
// for (let i = 0; i < openDescBtn.length; i++) {
//     openDescBtn[i].addEventListener('onmouseover', () => {
//         this.style.backgroundColor = 'black';
//     })
// }


// openDescBtn.forEach(e => {
//     e.addEventListener('onmouseover', () => {
//         this.style.backgroundColor = 'black';
//     })
// })

// function changeBackground () {
//     this.style.backgroundColor = 'black';
// }

document.querySelectorAll('.btn').forEach(e => {
    e.setAttribute('onmouseover', 'this.style.backgroundColor = "black"');
})