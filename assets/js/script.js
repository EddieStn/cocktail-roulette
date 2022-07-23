const body = document.body;

let input = document.querySelector('#input');
const subBtn = document.querySelector('#submit-btn');
const searchResults = document.querySelector('#search-results');
const spin = document.querySelector('#spin');
let display = document.querySelector('#display');
let results;

subBtn.addEventListener('click', (e) => {
    // prevent page reload
    e.preventDefault();
    // get users input
    const term = input.value.trim()

    getRandomCocktails(term)
    displayCocktails();
})


spin.addEventListener('click', (e) => {
    e.preventDefault();
    let index = getRandom(0, cocktails.length -1);
    display.innerHTML = cocktails[index];
});

function displayRandomCocktail() {

}

function getRandom(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

/**
 * Iterate over cocktails and find any values that match search term
 */
function getRandomCocktails(term) {
    results = cocktails.filter(cocktail => {
        if (term.length > 0) {
            return cocktail.ingredients.includes(term.toLowerCase())
        } 
    })
}

/**
 * Display cocktails matching input value
 */
function displayCocktails() {
    let html = ``
    // populate html template literal
    results.map(result => { 
        html += `
        <h2>${result.name}</h2>
        <h3>Ingredients: ${result.ingredients}</h3>
        <h3>Method: ${result.method}</h3>
        <hr>
        `
    })
    // if noresults and html is empty : else - populate search results
    html == '' ? searchResults.innerHTML = `<h2>You need to enter a valid input.</h2><h2>Please try rum / gin / vodka / whiskey</h2>` : searchResults.innerHTML = html
    
    // reset input 
    input.value = ''
}

function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}