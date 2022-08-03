const cardContiner = document.querySelector(".card-continer")
let input =document.querySelector("#search-input")

const createCardEle =(ele)=>{
    const card = document.createElement("div")
    card.classList.add("card")

    const img =document.createElement("img")
    img.src = ele.strDrinkThumb
    card.appendChild(img)

    const infoDiv =document.createElement("div")
    infoDiv.classList.add("info")

    const Name =document.createElement("h3")
    Name.textContent = ele.strDrink
    Name.classList.add("name")
    infoDiv.appendChild(Name)
    const category =document.createElement("p")
    category.textContent =`Category: ${ele.strCategory}`
    infoDiv.appendChild(category)
    
    const ingredients =document.createElement("p")
    ingredients.textContent =`Ingredients: ${ele.strIngredient1}, ${ele.strIngredient2} `
    infoDiv.appendChild(ingredients)
    card.appendChild(infoDiv)

    const buttons = document.createElement("div")
    buttons.classList.add("buttons")
    const videoBtn = document.createElement("button")
    videoBtn.classList.add("youtube-btn")

    const videoLink = document.createElement("a")
    videoLink.textContent="Recipe Video"
    videoLink.href =ele.strYoutube
    videoBtn.appendChild(videoLink)
    const recipeBtn = document.createElement("button")
    recipeBtn.textContent="Recipe"
    recipeBtn.classList.add("recipe-btn")
    buttons.appendChild(videoBtn)
    buttons.appendChild(recipeBtn)
    videoBtn.appendChild(videoLink)
    infoDiv.appendChild(buttons)
    cardContiner.appendChild(card)
}


const loopFun =(data)=>{
    console.log(data);
data.drinks.forEach(ele => {
    createCardEle(ele)
});
}

console.log("bbbbbbbb")
fetchData('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a', loopFun)


let searchBtn = document.querySelector("#search-btn")
searchBtn.addEventListener("click", (e)=> {
    e.preventDefault()
    fetchData(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input.value}`, search)
})
