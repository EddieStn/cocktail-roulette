const body = document.body;


function spinTheWheel() {
    let x = 1000; // min value
    let y = 9000; // max value

    let deg = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("inner-box").style.transform = "rotate("+deg+"deg)";
}


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
        <hr>
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


// Cocktails array

const cocktails = [
    {
    name: "Cuba Libre", 
    ingredients: `<ul>
    <li>½ lime</li>
    <li>50ml white rum</li>
    <li>100ml cola</li>
    <li>ice</li>
    </ul>` ,
    method: `<br>
    Cut ½ a lime into four small wedges. Squeeze the juice 
    from two of the wedges into a tall glass. Drop the remaining wedges 
    into the glass and fill with ice. 
    Pour in the rum then fill up with cola and stir gently.
    <br>Prep:5 mins / Serves 1`
}, {
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
    STEP 1 <br>
    Put two small tumblers in the fridge to chill overnight.
    Put 30g of the chocolate in a shallow bowl and melt in the microwave in short bursts.
    Dip the rim of the chilled glasses in the melted chocolate, 
    then stand them upright so it gradually drips down the sides. 
    Return to the fridge until you're ready to serve.
    <br>
    STEP 2 <br>
    Fill a cocktail shaker with ice, then pour in the coffee-flavoured liqueur,
    vodka, Irish cream liqueur and double cream. Shake until the outside of the shaker is very cold.
    <br>
    STEP 3 <br>
    Put a few ice cubes in the prepared glasses, then strain in the cocktail.
    Finely grate over the remaining chocolate and serve with a paper straw.
    <br>Prep:5 mins / Cook:2 mins plus overnight chilling / Serves 2`
}, {
    name: "Pink gin iced tea",
    ingredients: `<ul>
    <li>1 chamomile tea bag</li>
    <li>100ml pink gin</li>
    <li>100ml spiced rum</li>
    <li>100ml elderflower cordial</li>
    <li>100ml pink grapefruit juice</li>
    <li>ice</li>
    <li>thyme sprigs, to garnish</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Brew the chamomile tea bag with 500ml boiling water, 
    steep for 2-3 mins or following pack instructions. Remove the bag and leave to cool for 5 mins.

    STEP 2 <br>
    Pour into a large jug with the pink gin, rum, elderflower cordial and juice. 
    Add ice and stir, then add the thyme sprigs and stir again before serving.
    <br>Prep 15min / Serves 6`
}, {
    name: "Espresso martini",
    ingredients: `<ul>
    <li>100g golden caster sugar for the sugar syrup</li>
    <li>ice</li>
    <li>100ml vodka</li>
    <li>50ml freshly brewed espresso coffee</li>
    <li>50ml coffee liqueur (eg. Kahlua)</li>
    <li>4 coffee beans (optional)</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Start by making the sugar syrup. Put the caster sugar in a small pan over a medium heat and pour in 50ml water. Stir, and bring to the boil.

    STEP 2 <br>
    Turn off the heat and allow the mixture to cool. Put 2 martini glasses in the fridge to chill.

    STEP 3 <br>
    Once the sugar syrup is cold, pour 1 tbsp into a cocktail shaker along with a handful of ice, the vodka, espresso and coffee liqueur. Shake until the outside of the cocktail shaker feels icy cold.

    STEP 4 <br>
    Strain into the chilled glasses. Garnish each one with coffee beans if you like.
    <br> Prep 5 mins / Cook:5 mins plus cooling / Serves 2
`
}, {
    name: "Mojito",
    ingredients: `<ul>
    <li>juice of 1 lime</li>
    <li>1 tsp granulated sugar</li>
    <li>small handful mint leaves, plus extra sprig to serve</li>
    <li>60ml white rum</li>
    <li>soda water, to taste</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Muddle the lime juice, sugar and mint leaves in a small jug, 
    crushing the mint as you go – you can use the end of a rolling pin for this. 
    Pour into a tall glass and add a handful of ice.

    STEP 2 <br>
    Pour over the rum, stirring with a long-handled spoon.
    Top up with soda water, garnish with mint and serve.
    <br> Prep 5min / Serves 1`
}, {
    name: "Hurricane",
    ingredients: `<ul>
    <li>50ml dark rum</li>
    <li>50ml white rum</li>
    <li>1 passion fruit</li>
    <li>1 orange , juiced</li>
    <li>1 lemon , juiced</li>
    <li>50ml sugar syrup</li>
    <li>2 tsp grenadine</li>
    <li>4 cocktail cherries (to garnish)</li>
    <li>2 orange slices (to garnish)</li>
    </ul>`,
    method: `
    STEP 1 <br>
    Fill a cocktail shaker with ice then add the rums. Scoop the flesh and seeds from the passion fruit and add to the shaker along with the orange and lemon juices, sugar syrup and grenadine.

    STEP 2 <br>
    Shake well until the outside of the cocktail shaker feels icy cold. 
    Fill two hurricane glasses with fresh ice then double strain the drink into the prepared glasses.

    STEP 3 <br>
    Garnish each one with an orange slice skewered onto a cocktail stick and a couple of cocktail cherries.
    <br> Prep 5min / Serves 2`
}, {
    name: "Sex on the beach",
    ingredients: `<ul>
    <li>ice</li>
    <li>50ml vodka</li>
    <li>25ml peach schnapps</li>
    <li>2 oranges, juiced, plus 2 slices to garnish</li>
    <li>50ml cranberry juice</li>
    <li>glacé cherries, to garnish (optional)</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Fill two tall glasses with ice cubes. Pour the vodka,
    peach schnapps and fruit juices into a large jug and stir.

    STEP 2 <br>
    Divide the mixture between the two glasses and stir gently to combine.
    Garnish with the cocktail cherries and orange slices.
    <br> Prep 5min / Serves 2`
}, {
    name: "Pina Colada",
    ingredients: `<ul>
    <li>120ml pineapple juice</li>
    <li>60ml white rum</li>
    <li>60ml coconut cream</li>
    <li>wedge of pineapple, to garnish (optional)</li>
    </ul>`,
    method: `<br>
    Pulse all the ingredients along with a handful of ice in a blender until smooth.
    Pour into a tall glass and garnish as you like
    <br>Prep 5 / Serves 1`
}, {
    name: "Singapore sling",
    ingredients: `<ul>
    <li>25ml dry gin</li>
    <li>25ml cherry brandy</li>
    <li>25ml Benedictine</li>
    <li>handful of ice, to serve</li>
    <li>few drops Angostura bitters</li>
    <li>50ml pineapple juice</li>
    <li>25ml lime juice</li>
    <li>sparkling water to top up</li>
    <li>For the garnish</li>
    <li>1 thin slice of fresh pineapple (to garnish - optional)</li>
    <li>cocktail cherry (to garnish)</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Pour the gin, cherry brandy and Benedictine into a mixing glass or a jug. Add the ice and Angostura bitters. Stir well until the outside of the glass feels cold.
    
    STEP 2 <br>
    Pour the mix into a tall glass, then add the pineapple juice and lime juice and stir gently. Top up with sparkling water and garnish.
    <br> Prep 5min / Serves 1`
}, {
    name: "Pink negroni",
    ingredients: `<ul>
    <li>35ml pink gin</li>
    <li>25ml rose vermouth , or sweet white vermouth</li>
    <li>15ml Aperol</li>
    <li>ice</li>
    <li>wedge of pink grapefruit and a basil leaf, to garnish</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Combine the pink gin, vermouth and Aperol in a tumbler with a small handful of ice. Stir until the outside of the glass feels cold.
    
    STEP 2 <br>
    Garnish with a wedge of pink grapefruit and a basil leaf.
    <br> Prep 5min / Serves 1`
}, {
    name: "Hugo",
    ingredients: `<ul>
    <li>small handful of mint leaves, plus 1 mint sprig to garnish</li>
    <li>20ml elderflower cordial</li>
    <li>20ml gin</li>
    <li>ice</li>
    <li>25ml soda water</li>
    <li>120ml prosecco</li>
    <li>1 lime wedge, to garnish</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Gently scrunch the mint in your hands to lightly bruise it, then put in the bottom of a large wine glass. Pour over the elderflower cordial and gin and leave to infuse for 1-2 mins.
    
    STEP 2 <br>
    Fill the glass with ice, then pour over the soda water and prosecco. Stir gently to combine. Garnish with the lime wedge and mint sprig before serving.
    <br> Prep 5min / Serves 1`
}, {
    name: "Whiskey sour",
    ingredients: `<ul>
    <li>50ml bourbon</li>
    <li>35ml lemon juice</li>
    <li>12½ml 2:1 sugar syrup</li>
    <li>2 dashes Angostura bitters</li>
    <li>½ fresh egg white</li>
    <li>ice</li>
    <li>50p-sized piece of lemon zest</li>
    <li>slice of orange and a cherry on a stick to garnish</li>
    </ul>`,
    method: `<br>
    STEP 1
    Shake all of the ingredients (except for the lemon zest) hard with ice and strain into an ice-filled rocks glass. 
    Squeeze the lemon zest, shiny side down over the drink so the scented oils spray across the surface. Discard the zest, add the garnish and serve.
    <br> Prep 5min / cook 5min / serves 1`
}, {
    name: "Sweet manhattan cocktail",
    ingredients: `<ul>
    <li>50ml bourbon or rye whiskey</li>
    <li>25ml rosso vermouth</li>
    <li>5ml syrup from a jar of maraschino cherries (eg. Luxardo)</li>
    <li>2 dashes Angostura bitters</li>
    <li>ice</li>
    <li>For the garnish</li>
    <li>maraschino cherry</li>
    <li>a twist of pared lemon</li>
    </ul>`,
    method: `<br>
    STEP 1
    Stir the ingredients with ice in a mixing glass, then strain into a cocktail glass. Garnish and serve.
    <br> Prep 5min / Serves 1`
}, {
    name: "Irish whiskey old fashioned",
    ingredients: `<ul>
    <li>40ml Irish whiskey</li>
    <li>10ml elderflower cordial</li>
    <li>10ml Sauternes</li>
    <li>ice</li>
    <li>pared lemon zest, to garnish</li>
    </ul>`,
    method: `<br>
    STEP 1 <br>
    Put everything except the lemon zest in a tumbler and give it a quick stir to combine and dilute. Garnish with the lemon zest to serve.
    <br> Prep 5min / Serves 1`
}];


