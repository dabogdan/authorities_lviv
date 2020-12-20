let searchUsers = document.querySelector('#search-institution'),
    titles = document.querySelectorAll('.title'),
    address = document.querySelectorAll('.address'),
    searchVal,
    paragraph = document.querySelectorAll('.paragraph');

searchUsers.addEventListener('keydown', function() {
    searchVal = this.value.toLowerCase();

    for (let i = 0; i < paragraph.length; i++) {
        if (!searchVal || paragraph[i].textContent.toLowerCase().indexOf(searchVal) > -1) {
            paragraph[i].style['display'] = 'block';
        }
        else {
            paragraph[i].style['display'] = 'none';
        }
    }
});