const body = document.body;


function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}

/** getCocktails funtion shows the user
 *  various cocktails based on their input
 */
function getCocktails() {
    const userValue = document.getElementById("spirit-input").value;
    const divSpirit = document.getElementById("user-search")
    const result = document.createElement("h2")
    divSpirit.append(result)
    
    if (userValue === "rum") {
        let text = "";
        for (const value of cocktailsSet) {
            text += value + "<br>";
        }
        result.innerHTML = text;
    } else if (userValue === "gin") {
        result.innerText = `
        Pink gin iced tea
        Ingredients: 100ml pink gin...
        Method: mix`
    } else if (userValue === "vodka") {
        result.innerText = `
        Mudslide
        Ingredients: vodka...
        Method: mix`
    } else if (userValue === "whiskey") {
        result.innerText = `
        Godfather
        Ingredients: whiskey...
        Method: mix`
    } else 
    result.innerText = 
    `Nothing found based on your search.
    Please try rum / gin / vodka / whiskey`
}

// Search by pressing Enter 
document.getElementById("spirit-input").addEventListener("keydown", function(event) { 
    if (event.key === "Enter") {
    getCocktails();
    }
})


// Objects array
const cocktails = [
    {name: "Cuba Libre", ingredients: "rum"},
    {name: "Mudslide", ingredients: "vodka"}
];

// Objects set
const cocktailsSet = new Set();

let str = JSON.stringify(cocktailsSet);

cocktailsSet.add({
    name: "Cuba Libre", ingredients: "rum"
})
cocktailsSet.add({
    name: "Mudslide", ingredients: "vodka"
})

// cocktails.filter(c => c.ingredients === "rum")


function showRandomCocktail() {
    
}

// console.log(cocktails.filter(c => c.ingredients === "rum"))