function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";

}

function getCocktails() {
    let userValue = document.getElementById("spirit-input").value;
    alert("You chose: " +userValue);
}

function showRecipe() {
    
}

const cocktails = new Set();

cocktails.add({
    name: "Cuba Libre",
    ingredients: [],
    method: ""
})
cocktails.add({
    name: "Pina Colada",
    ingredients: [],
    method: ""
})

console.log(cocktails)
console.log("hello")