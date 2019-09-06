
var contenedor = document.getElementById('root');
var character = document.querySelector("#Characters");
var nombre = document.querySelector("#nombre_personaje");

var request = new XMLHttpRequest()
request.open('GET', 'https://rickandmortyapi.com/api/character/', true)
request.onload = function () {


    var data = JSON.parse(this.response);
    console.log(data);
    var tamano = data.results.length;

    var prueba = data.results[0].image;
    console.log(prueba);

    for (i = 0; i <= tamano; i++) {


        var carta = document.createElement('div');
        carta.setAttribute('class', 'card');


        var imagen = document.createElement('img');
        imagen.src = data.results[i].image;

        var cardBody = document.createElement('div');
        cardBody.setAttribute('class', 'card-body');

        var a = document.createElement('button');
        a.setAttribute('class', 'btn btn-success');

        a.textContent = "See Details";
        a.style.color = "white";
        a.onclick = function () {

            //Es aca donde se le hace click a un boton y la idea es agarrar el src , compararlo para traer los datos del personaje
            //elegido, guardarlos en una variable y ponerlos en la pagina description.html 

            for (i = 0; i <= tamano; i++) {

                /* var prueba= data.results[i].image;
                 alert(prueba);
 
                  alert(data.results[i].status + data.results[i].name + data.results[i].species);*/
                location.href = "file:///C:/Users/Paula/Desktop/ejerciciosplataforma/clasesjavascript/proyectos/rickMorty/description.html";

            }

        };

        contenedor.appendChild(carta);
        carta.appendChild(imagen);
        carta.appendChild(cardBody);
        cardBody.appendChild(a);
    }
}
request.send()