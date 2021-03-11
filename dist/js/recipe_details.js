const showRecipeDetails = async function() {

    const response = await axios.get(`https://api.spoonacular.com/recipes/${this.param}/information`, {
        params: {
            apiKey: "8f2b2a25716c451fbeef469525454868",
            includeNutrition: false
        }
    });
    printRecipeDetails(response.data);
}

const recipeDetailWindow = document.querySelector(".details");
const recipeDetailTitle = document.querySelector(".details__title");
const listOfIngredients = document.querySelector(".details__ingredients");
const listOfSteps = document.querySelector(".details__steps");

const printRecipeDetails = (data) => {
    recipeDetailTitle.innerText = data.title;
    listOfIngredients.innerHTML = "";
    listOfSteps.innerHTML = "";
    
    for (let ingredient of data.extendedIngredients) {
        let listItem = createListItem(ingredient.name);
        listOfIngredients.appendChild(listItem);
    }

    if (data.analyzedInstructions.length < 1) {
        
        let message = document.createElement("li");
        listOfSteps.innerText = "Unfortunetaly there are no steps for this recipe :( \n \n however you should probably just mix everything together :)";
    } else {
        let steps = data.analyzedInstructions[0].steps;
        for (let index of steps) {
            let listItem = createListItem(index.step);
            listOfSteps.appendChild(listItem);
        }
    }

    recipeDetailWindow.classList.remove("hide");
}

const createListItem = (name) => {
    let item = document.createElement("li");
    item.innerText = name;
    return item;
}
