document.addEventListener("DOMContentLoaded", ()=>{
    beerCollection()
});
let beerData;
let clickedBeer;
let image_url = "https://images.punkapi.com/v2"

function beerCollection() {
    fetch("https://api.punkapi.com/v2/beers")
    .then(response => response.json())
    .then(data=>{
        displayBeer(data);
    })
}
function displayBeer(data) {
    data.forEach(element=>{
        showBeer(element)
    })
}
function showBeer(element) {
    const div = document.querySelector("#beer-list")
    const id=element.id;
    const innerDiv = document.createElement("div");
    innerDiv.className = "wrapper col-md-4"
    innerDiv.innerHTML = `
    <img class="beer-image" src="${image_url}/${id}.png"></img>
    <h4>${element.name}</h4>
    <p>${element.description}</p>
    `
    div.appendChild(innerDiv)
    innerDiv.addEventListener('click', () =>{
        clickedBeer = element;
        showOneBeer(element);
    });
}
function showOneBeer(element){
    const div = document.querySelector("#beer-list")
    div.innerHTML = ""
    const id=element.id;
    const innerDiv = document.createElement('div');
    innerDiv.innerHTML = `
    <img class="beer-image" src="${image_url}/${id}.png"></img>
    <h4>${element.name}</h4>
    <p>${element.description}</p>
    `
    div.appendChild(innerDiv)
}