// NAVIGATION

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed');
    } else {
        mysitenav.setAttribute('data-navstate', 'open');
    }
};

var drawernavlinks = document.querySelectorAll('.drawer nav a');
var drawerheader = document.querySelector('.drawer .site-nav');
var j;
for (j = 0; j < drawernavlinks.length; j++) {
    drawernavlinks[j].onclick = function () {
        drawerheader.setAttribute('data-navstate', 'closed');
    };
}

// SEARCH FUNCTION

function mySearchFunction() {
    var input, filter, ul, li, item, i, txtValue;
    input = document.getElementById('input');
    filter = input.value.toUpperCase();
    ul = document.getElementById('brand-name');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        item = li[i];

        txtValue = item.textContent || item.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = 'flex';
            li[i].style.placeContent = 'center';
        } else {
            li[i].style.display = 'none';
        }
    }
}

// CLEAR SEARCH

function clearSearch() {
    var input, ul, li, i;
    input = document.getElementById('input');
    ul = document.getElementById('brand-name');
    li = ul.getElementsByTagName('li');

    input.value = '';

    for (i = 0; i < li.length; i++) {
        li[i].style.display = 'none';
        li[i].classList.remove('selected');
    }

    const buttons = document.querySelectorAll('.sort-buttons button');
    buttons.forEach(button => button.classList.remove('active'));

    const showAllButton = document.getElementById('all-brands');
    showAllButton.classList.remove('active');
    showAllButton.textContent = 'show all';
}

// SORT BUTTONS

document.addEventListener('DOMContentLoaded', () => {
    const list = document.getElementById('brand-name');
    const buttons = document.querySelectorAll('.sort-buttons button');

    // HIDE BRAND NAMES ON PAGE LOAD

    const liElements = list.querySelectorAll('li');
    liElements.forEach(li => {
        li.style.display = 'none';
    });

    // FOR ACTIVE BUTTON

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Deselect "Show All" Button if another button is clicked
            if (button.id !== 'all-brands') {
                const showAllButton = document.getElementById('all-brands');
                showAllButton.classList.remove('active');
                showAllButton.textContent = 'show all'; // Reset text to "Show All"
            }
        });
    });

    // SORTING

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            const items = Array.from(list.querySelectorAll('li'));

            const sortedItems = items.sort((a, b) => {
                const isACategory = a.classList.contains(category) ? 0 : 1;
                const isBCategory = b.classList.contains(category) ? 0 : 1;
                return isACategory - isBCategory;
            });

            list.innerHTML = '';

            sortedItems.forEach(item => list.appendChild(item));

            items.forEach(item => {
                if (item.classList.contains(category)) {
                    item.style.display = 'list-item';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // SHOW ALL ITEMS

    const showAllButton = document.getElementById('all-brands');

    showAllButton.addEventListener('click', () => {
        const isShowingAll = showAllButton.textContent === 'show all';

        if (isShowingAll) {

            const items = Array.from(liElements);

            const sortedItems = items.sort((a, b) => {
                const textA = a.textContent.trim().toUpperCase();
                const textB = b.textContent.trim().toUpperCase();
                return textA.localeCompare(textB);
            });

            list.innerHTML = '';

            sortedItems.forEach(item => {
                list.appendChild(item);
                item.style.display = 'list-item';
            });

            showAllButton.textContent = 'hide all';
        } else {

            liElements.forEach(li => {
                li.style.display = 'none';
            });

            showAllButton.textContent = 'show all';
        }

        buttons.forEach(btn => btn.classList.remove('active'));
        showAllButton.classList.add('active');
    });

});
