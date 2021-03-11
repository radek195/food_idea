//API Key: 8f2b2a25716c451fbeef469525454868


const startButton = document.querySelector(".start__button");
startButton.addEventListener("click", () => {
    window.scrollTo(0, window.screen.height);
})

const search = new SearchClass();
//ingredient_search.js for refference
ingredientInput.addEventListener("input", onIngredientInput);

//info_search.js for refference
for (let btn of addInfoBtns) {
    btn.addEventListener("click", addInfo);
}

//recipe_search.js for refference
searchBtn.addEventListener("click", showResults);

//close recipe details listener
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", (event) => {
    event.target.parentElement.classList.add("hide");
})

