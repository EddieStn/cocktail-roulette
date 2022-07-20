const body = document.body;


function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}



// Objects array
const cocktails = [
    {
    name: "Cuba Libre", 
    ingredients: `<ul>
    <li>½ lime</li>
    <li>50ml white rum</li>
    <li>100ml cola</li>
    <li>ice</li></ul>` ,
    method: `<br>
    Cut ½ a lime into four small wedges. Squeeze the juice 
    from two of the wedges into a tall glass. Drop the remaining wedges 
    into the glass and fill with ice. 
    Pour in the rum then fill up with cola and stir gently. # Prep:5 mins - Serves 1`
},
    {
    name: "Mudslide",
    ingredients: `<ul>
    <li>50g dark chocolate</li>
    <li>60ml coffee-flavoured liqueur</li>
    <li>60ml vodka</li>
    <li>60ml Irish cream liqueur</li>
    <li>100ml double cream</li>
    <li>ice</li>
    </ul>`,
    method: `<br>
    STEP 1 =>
    Put two small tumblers in the fridge to chill overnight.
    Put 30g of the chocolate in a shallow bowl and melt in the microwave in short bursts.
    Dip the rim of the chilled glasses in the melted chocolate, 
    then stand them upright so it gradually drips down the sides. 
    Return to the fridge until you're ready to serve.
    <br>
    STEP 2 =>
    Fill a cocktail shaker with ice, then pour in the coffee-flavoured liqueur,
    vodka, Irish cream liqueur and double cream. Shake until the outside of the shaker is very cold.
    <br>
    STEP 3 =>
    Put a few ice cubes in the prepared glasses, then strain in the cocktail.
    Finely grate over the remaining chocolate and serve with a paper straw.`
},
];


let input = document.querySelector('#input')
const subBtn = document.querySelector('#submit-btn')
const searchResults = document.querySelector('#search-results')

subBtn.addEventListener('click', (e) => {
    // prevent page reload
    e.preventDefault()
    // get users input
    const term = input.value.trim()

    // iterate over cocktails and find any values that match search term
    const results = cocktails.filter(cocktail => {
        return cocktail.ingredients.includes(term.toLowerCase())
    })
 
    let html = ``
    // populate html template literal
    results.map(result => { 
        html += `
        <h2>${result.name}</h2>
        <h3>Ingredients: ${result.ingredients}</h3>
        <h3>Method: ${result.method}</h3>
        `
    })
    // if noresults and html is empty : else - populate search results
    html == '' ? searchResults.innerHTML = `<h2>Sorry, no results found matching "${term}"</h2><h2>Please try rum / gin / vodka / whiskey</h2>` : searchResults.innerHTML = html
    
    // reset input 
    input.value = ''
})

// Search by pressing Enter 
document.getElementById("input").addEventListener("keydown", function(event) { 
    if (event.key === "Enter") {
    getCocktails();
    }
})

function showRandomCocktail() {
    
}

// console.log(cocktails.filter(c => c.ingredients === "rum"))