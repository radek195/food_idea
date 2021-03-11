const minCalInput = document.querySelector(".calories__input--min");
const maxCalInput = document.querySelector(".calories__input--max");
const minCarbInput = document.querySelector(".min-carb");
const maxCarbInput = document.querySelector(".max-carb");
const minProteinInput = document.querySelector(".min-prot");
const maxProteinInput = document.querySelector(".max-prot");
const minFatInput = document.querySelector(".min-fat");
const maxFatInput = document.querySelector(".max-fat");
const nutrientInputs = document.querySelectorAll(".nutrients__input");
const caloriesInputs = document.querySelectorAll(".calories__input");
const addInfo = () => {
    search.minCal = checkIfExist(minCalInput.value, true);
    search.maxCal = checkIfExist(maxCalInput.value, true);
    clearCaloriesInput();

    search.minCarb = checkIfExist(minCarbInput.value, true);
    search.maxCarb = checkIfExist(maxCarbInput.value, true);
    search.minProtein = checkIfExist(minProteinInput.value, true);
    search.maxProtein = checkIfExist(maxProteinInput.value, true);
    search.minFat = checkIfExist(minFatInput.value, true);
    search.maxFat = checkIfExist(maxFatInput.value, true);
    clearNutrientsInput();
    
    infoBtn.classList.remove("hide");
}

const clearNutrientsInput = () => {
    for (let input of nutrientInputs) {
        input.value = null;
    }
}

const clearCaloriesInput = () => {
    for (let input of caloriesInputs) {
        input.value = null;
    }
}

const addInfoBtns = document.querySelectorAll(".add__info");
const infoPanel = document.querySelector(".info");
const infoList = document.querySelector(".info__list");
const infoBtn = document.querySelector(".parameters__info");
const infoClose = document.querySelector(".info__close");
const infoReset = document.querySelector(".info__reset");



const showCalCriteria = () => {
    infoList.innerHTML = createInfoContent();
    infoPanel.classList.remove("hide");

}

const createInfoContent = () => {
    let string = `
        <li class="info__item">min calories: ${checkIfExist(search.minCal)}</li>
        <li class="info__item">max calories: ${checkIfExist(search.maxCal)}</li>
        <li class="info__item">carbs: ${checkIfExist(search.minCarb)} - ${checkIfExist(search.maxCarb)}</li>
        <li class="info__item">protein: ${checkIfExist(search.minProtein)} - ${checkIfExist(search.maxProtein)}</li>
        <li class="info__item">fat: ${checkIfExist(search.minFat)} - ${checkIfExist(search.maxFat)}</li>  
        `
    string = string.replaceAll("- - -", "-")
    return string;
}

const checkIfExist = (value, i) => {
    if (value) {
        return value;
    } else if (i) {
        return undefined;
    } else {
        return "-"
    }
}
infoBtn.addEventListener("click", showCalCriteria);


const close = (event) => {
    event.target.parentNode.classList.add("hide");
}
infoClose.addEventListener("click", close);

infoReset.addEventListener("click", () => {
    infoBtn.classList.add("hide");
    search.clearCalorie();
    search.clearFat();
    search.clearCarb();
    search.clearProtein();
    showCalCriteria();
})
