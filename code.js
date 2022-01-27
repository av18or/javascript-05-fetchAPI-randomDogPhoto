let img = document.createElement("img");

// fetch(file)
// .then(get JSON data)
// .then(convert JSON data to useable data);
// .then(set img url to the useable data);

fetch("https://random.dog/woof.json", { method: "GET" })
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
    img.src = jsonData.url;
  });

document.body.append(img);
