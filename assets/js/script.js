const body = document.body;

let input = document.querySelector('#input')
const subBtn = document.querySelector('#submit-btn')
const searchResults = document.querySelector('#search-results')

subBtn.addEventListener('click', (e) => {
    // prevent page reload
    e.preventDefault();
    // get users input
    const term = input.value.trim()

    getRandomCocktails(term)
    displayCocktails(term);
})

let results;

function getRandomCocktails(term) {
    // iterate over cocktails and find any values that match search term
    results = cocktails.filter(cocktail => {
        if (term.length > 0) {
            return cocktail.ingredients.includes(term.toLowerCase())
        } 
    })
}
function displayCocktails(term) {
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
    html == '' ? searchResults.innerHTML = `<h2>Sorry, no results found matching ${term}</h2><h2>Please try rum / gin / vodka / whiskey</h2>` : searchResults.innerHTML = html
    
    // reset input 
    input.value = ''
}



function showRandomCocktail() {
    
}

function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}