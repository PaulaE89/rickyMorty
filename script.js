let ima = document.querySelector("#imagen");
let ima_1 = document.querySelector("#imagen_1");
let ima_2 = document.querySelector("#imagen_2");


var request = new XMLHttpRequest()
request.open('GET', 'https://rickandmortyapi.com/api/character/', true)
request.onload = function () {

    var data = JSON.parse(this.response);
    console.log(data);



    var img = data.results[Math.floor(Math.random() * 20)].image;

    var img_1 = data.results[Math.floor(Math.random() * 20)].image;

    var img_2 = data.results[Math.floor(Math.random() * 20)].image;


    ima.src = img;
    ima_1.src = img_1;
    ima_2.src = img_2;



}

request.send()



