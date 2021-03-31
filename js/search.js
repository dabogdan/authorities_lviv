let searchUsers = document.querySelector('#search-institution'),
    address = document.querySelectorAll('.address'),
    searchVal,
    paragraph = document.querySelectorAll('.paragraph');

searchUsers.addEventListener('keyup', function() {
    searchVal = searchUsers.value.toLowerCase();
    institutions_Lviv_Region.forEach((e, i) => {
        if (!searchVal || e.title.toLowerCase().indexOf(searchVal) > -1) {
            paragraph[i].style['display'] = 'block';
        } else if (!searchVal || e.address.toLowerCase().indexOf(searchVal) > -1) {
        paragraph[i].style['display'] = 'block';
        } else {
            paragraph[i].style['display'] = 'none';
        }
    });

    // institutions_Lviv_Region.forEach((e, i) => {
    //     e.weDo.forEach((el) => {
    //         let searchedIn = el.toLowerCase();
    //         if (searchedIn.indexOf(searchVal) > -1) {
    //             paragraph[i].style['display'] = 'block';
    //         }
    //     });
    //     e.weDont.forEach((el) => {
    //         let searchedIn = el.toLowerCase();
    //         if ( searchedIn.indexOf(searchVal) > -1) {
    //             paragraph[i].style['display'] = 'block';
    //         }
    //     });
    // })
    institutions_Lviv_Region.forEach((e, i) => {
        e.weDo.forEach((el) => {
            let searchedIn = el.toLowerCase();
            if (searchedIn.indexOf(searchVal) > -1) {
                paragraph[i].style['display'] = 'block';
            }
        });
        e.weDont.forEach((el) => {
            let searchedIn = el.toLowerCase();
            if ( searchedIn.indexOf(searchVal) > -1) {
                paragraph[i].style['display'] = 'block';
            }
        });
    })


})