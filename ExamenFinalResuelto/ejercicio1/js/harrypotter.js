window.addEventListener("load",inicio);
var cont;

function inicio() {
    cont = 1;
    document.getElementById("crear").addEventListener("click",crear);
}
function crear(){
    var casa = getCasa();
    var clase= "";
    var url = "";
    switch(casa){
        case 0: clase = "gryffindor"; break;
        case 1: clase = "hufflepuff"; break;
        case 2: clase = "ravenclaw"; break;
        case 3: clase = "slytherin"; break;
    }
    var div = document.createElement("div");
    div.setAttribute("class","carta");
    div.setAttribute("class",div.getAttribute("class")+" "+clase);
    div.setAttribute("id",cont);

    var h3 = document.createElement("h3");

    var img = document.createElement("img");
    img.setAttribute("src","img/"+clase+".png");

    var p = document.createElement("p");
    var txt = document.createTextNode(document.getElementsByTagName("textarea")[0].value);
    p.appendChild(txt);

    document.getElementById("cartas").appendChild(div);
    //El orden debe ser el siguiente: primero añadimos el h3 al div, luego la imagen al h3 y después el texto.
    div.appendChild(h3);
    h3.appendChild(img);
    h3.innerHTML += document.getElementsByName("nombre")[0].value;
    div.appendChild(p);

    div.addEventListener("click",mostrarMensaje);
    cont++;
}

function getCasa(){
    var casa = document.getElementsByName("casa");
    for(var i = 0; i< casa.length; i++){
        if (casa[i].checked==true){
           return i; 
        }
    }
}
function mostrarMensaje(e){
    var respuesta = confirm("¿Desea borrar la carta pulsada?");
    if (respuesta){
        document.getElementById("cartas").removeChild(e.target);
    }
}