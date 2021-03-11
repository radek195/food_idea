//API Key: 8f2b2a25716c451fbeef469525454868

const ingredientInput = document.querySelector(".ingredient__input");
const ingredientContainer = document.querySelector(".ingredient__list");
const parameter = document.querySelectorAll(".parameters__item");
const parameterContainer = document.querySelector(".parameters");

//function that fetch data about possible ingredients upon populting search-textfield
let timeout;
const onIngredientInput = event => {
    //as user type, timeout clear
    if (timeout) {
        clearTimeout(timeout);
    }

    //fetch data if user has not typed for 1s
    timeout = setTimeout(() => {
        searchByIngredient(event.target.value)
    }, 1000)
}


const searchByIngredient = async (ingredient) => {
    const response = await axios.get('https://api.spoonacular.com/food/ingredients/search', {
        params: {
            apiKey: "8f2b2a25716c451fbeef469525454868",
            query: ingredient
        }
    });
    createIngredientList(response.data.results, ingredientContainer);
}

const createIngredientList = (arr, container) => {
    ingredientContainer.innerText = "";
    //loop over 5 items of fetched data
    for (let i = 0; i < 6; i++) {
        let item = createIngredient(arr[i].name);
        container.appendChild(item);
    }
}

const createIngredient = (name) => {
    let ingredientItem = document.createElement("li");
    ingredientItem.textContent = name;
    ingredientItem.classList.add("ingredient__item");
    //check if parameter has already been chosen
    if (search.parameters.includes(name)) {
        //add green checkmark
        ingredientItem.classList.add("ingredient__item--selected");
    }
    ingredientItem.addEventListener("click", () => {
        ingredientItem.classList.add("ingredient__item--selected");
        addParam(name);
    });
    return ingredientItem;
}

const addParam = (text) => {
    //check if parameter has not already been chosen
    if (!search.parameters.includes(text)) {
        let item = createParam(text);
        parameterContainer.appendChild(item);
    }
}

const createParam = (name) => {
    search.addParameter(name);
    let param = document.createElement("div");
    param.textContent = name;
    param.classList.add("parameters__item", "parameters__item--delete");
    param.addEventListener("click", () => {
        param.remove();
        //delete parameter from parameters array
        search.parameters = search.parameters.filter(e => e !== name);
        let items = document.querySelectorAll(".ingredient__item");
        for (let item of items) {
            if (item.innerText == name) {
                item.classList.remove("ingredient__item--selected")
            } 
        };
    });
    return param;
}





















