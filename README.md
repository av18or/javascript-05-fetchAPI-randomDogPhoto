# javascript-05-fetchAPI-randomDogPhoto

// Here is an alternative way to write the getNewDogImg function

// OPTION B - .then
function getNewDogImg(){
fetch("https://random.dog/woof.json")
.then((response) => {
return response.json();
})
.then((data) => {
img.src = data.url;
});
}
