const recipeResults = document.querySelector(".result");
const searchBtn = document.querySelector(".parameters__search");

const showResults = async () => {
    
    recipeResults.innerHTML = "";
    let response = await searchRecipes();
    
    if(response.length > 0) {
        for (let k = 0; k < response.length; k++) {
            let tile = createRecipeTile(response[k].image, response[k].title);
            
            tile.param = response[k].id;
            //recipe_details.js for refference
            tile.addEventListener("click", showRecipeDetails);
            recipeResults.appendChild(tile);
        }
        window.scrollTo(0, recipeResults.offsetTop);
    } else {
        alert("There are no recipes under this criteria :(");
    }
    
}
const searchRecipes = async () => {
    const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
            apiKey: "8f2b2a25716c451fbeef469525454868",
            includeIngredients: search.parameters.toString(),
            minCalories: search.minCal,
            maxCalories: search.maxCal,
            minCarbs: search.minCarbs,
            maxCarbs: search.maxCarbs,
            minProtein: search.minProtein,
            maxProtein: search.maxProtein,
            minFat: search.minFat,
            maxFat: search.maxFat
        }
    })
    return response.data.results;  
}
const createRecipeTile = (imgSrc, dishName) => {
    let tile = document.createElement("div");
    tile.textContent = "";
    tile.classList.add("result__item");

    let tileImg = document.createElement("img");
    tileImg.src = imgSrc;
    tileImg.alt = dishName;
    tileImg.classList.add("result__item__img");

    let tileName = document.createElement("p");
    tileName.innerText = dishName;
    tileName.classList.add("result__item__name");
    tile.appendChild(tileImg);
    tile.appendChild(tileName);
    
    return tile;
}

