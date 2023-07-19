const apiKey = "YOUR OWN API KEY FROM spoonacular";

const form = document.querySelector("form");
const searchInput = document.querySelector(".recipe-input");
const recipeContainer = document.querySelector(".container");
const showMoreRecipes = document.querySelector(".show-more-btn");


// when form is submitted call getRecipes
form.addEventListener("submit", (e) => {
  e.preventDefault();
  getRecipes();
});

showMoreRecipes.addEventListener("click", (e) =>{
  getRecipes();
});

let itemNumbers = 10;

// getting recipes from api
async function getRecipes(){
  
  searchInputValue = searchInput.value;
  const apiUrl  = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${searchInputValue}&number=${itemNumbers}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
    
    let dataResults = data.map( (item) => {
    return `
    <div class="card">
      <image id="card-img" src="${item.image}" alt="${item.title}"></image>
        <div class="info">
          <h1>${item.title}</h1>
      </div>
    </div>
    `;
    });

    itemNumbers += 10;

    if(itemNumbers === 20){
      showMoreRecipes.classList.toggle("show-more-btn-display");
    }else if(itemNumbers === 110){
      showMoreRecipes.classList.toggle("show-more-btn-display");
    }

    recipeContainer.innerHTML = dataResults.join("");


}
