const body = document.body;
const divSpirit = document.getElementById("user-search")

function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}

function getCocktails() {
    let userValue = document.getElementById("spirit-input").value;
    let result = document.createElement("h2")
    divSpirit.append(result)
    if (userValue === "rum") {
        result.innerText = `
        Pina Colada
        Ingredients: rum, ice
        Method: mix`
    } else if (userValue === "vodka") {
        result.innerText = `
        Mudslide
        Ingredients: vodka, ice
        Method: mix`
    } else if (userValue === "whiskey") {
        result.innerText = `
        Godfather
        Ingredients: whiskey, coca-cola, ice
        Method: mix`
    } 
    
}

document.getElementById("spirit-input").addEventListener("keydown", function(event) { 
    if (event.key === "Enter") {
    getCocktails();
    }
})

function showRecipe() {
    
}

// const cocktails = new Set();
const cocktails = [
    {name: "Cuba Libre", ingredients: "rum"},
    {name: "Mudslide", ingredients: "vodka"}
];

// cocktails.push({
//     "name": "Cuba Libre",
//     "ingredients": [
//         "½ lime",
//         "50ml white rum", 
//         "100ml cola", 
//         "ice"],
//     "method": `Cut ½ a lime into four small wedges. Squeeze the juice from two of the wedges into a tall glass. 
//             Drop the remaining wedges into the glass and fill with ice. Pour in the rum then fill up with cola and stir gently.`
// })

// cocktails.push({
//     name: "Mudslide",
//     ingredients: [
//         "50g dark chocolate",
//         "ice",
//         "60ml coffee-flavoured liqueur",
//         "60ml vodka",
//         "60ml Irish cream liqueur",
//         "100ml double cream"],
//     method: `
//         STEP 1
//         Put two small tumblers in the fridge to chill overnight.
//         Put 30g of the chocolate in a shallow bowl and melt in the microwave in short bursts.
//         Dip the rim of the chilled glasses in the melted chocolate, 
//         then stand them upright so it gradually drips down the sides. 
//         Return to the fridge until you're ready to serve.

//         STEP 2
//         Fill a cocktail shaker with ice, then pour in the coffee-flavoured liqueur,
//         vodka, Irish cream liqueur and double cream. Shake until the outside of the shaker is very cold.

//         STEP 3
//         Put a few ice cubes in the prepared glasses, then strain in the cocktail.
//         Finely grate over the remaining chocolate and serve with a paper straw.`
// })



// console.log(cocktails.filter(c => c.ingredients === "rum"))