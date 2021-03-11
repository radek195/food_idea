
const searchType = document.querySelectorAll(".categories__item");
const searchBlock = document.querySelectorAll(".search-item");


const animateButton = (clicked) => {
    for (let i = 0; i < searchType.length; i++) {
        searchType[i].classList.remove("categories__item--active");
    }
    clicked.classList.add("categories__item--active");
}
const showSearchUI = (clicked) => {
    for (let j of searchBlock) {
        j.classList.add("hide");
        if(j.classList.contains(clicked.innerText.toLowerCase())) {
            j.classList.remove("hide");
        };
    }
}

//loop that adds listener for search type
for (let k of searchType) {
    k.addEventListener("click", (event) => {
        //adding button animation
        animateButton(event.target);

        //adding funcionalities upon click
        showSearchUI(event.target);
    })
}