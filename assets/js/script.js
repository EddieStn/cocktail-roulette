
const input = document.querySelector('#input');
const subBtn = document.querySelector('#submit-btn');
const searchResults = document.querySelector('#search-results');
const spin = document.querySelector('#spin');
const display = document.querySelector('#display');
let results;
let timer;

/**
 * Search button event
 */
subBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const term = input.value.trim();
    getSearchedCocktails(term);
    displayCocktails();
});

/**
 * Spin the wheel event
 */
spin.addEventListener('click', (e) => {
    e.preventDefault();
    spinTheWheel();
    clearTimeout(timer);
    timer = setTimeout(() => {displayRandomCocktail();}, 5000);
    display.innerHTML = ``;
});


/**
 * Displays a random cocktail from the cocktails array when the spin button is pressed
 */
function displayRandomCocktail() {
    let index = cocktails[Math.floor(Math.random()*cocktails.length)];
    display.innerHTML = cocktails[index];
    cocktails.map(() => {
        display.innerHTML = `
        <h2>${index.name}</h2><br>
        <h3>Ingredients: ${index.ingredients}</h3><br>
        <h3>Method: ${index.method}</h3>
        `;
    });
}

/**
 * Iterate over cocktails and find any entries that match the user input
 */
function getSearchedCocktails(term) {
    results = cocktails.filter(cocktail => {
        if (term === "rum" || term === "vodka" || term === "whiskey" || term === "gin") {
            return cocktail.ingredients.includes(term.toLowerCase());
        }
    });
}

/**
 * Display cocktails matching input value
 */
function displayCocktails() {
    let html = ``;
    // populate html template literal
    results.map(result => { 
        html += `
        <h2>${result.name}</h2>
        <h3>Ingredients: ${result.ingredients}</h3>
        <h3>Method: ${result.method}</h3>
        <hr>
        `;
    });
    // if noresults and html is empty : else - populate search results
    if (html == '') {
        searchResults.innerHTML = `<h2>Nothing found based on your input</h2><h2>Please try rum / gin / vodka / whiskey</h2>`;
    } else {
        searchResults.innerHTML = html;
    }
    
    // reset input 
    input.value = '';
}

function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("wheel").style.transform = "rotate("+deg+"deg)";
}