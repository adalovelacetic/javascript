window.addEventListener("load", inicio);

/**
  * En la función inicio solamente añadimos los eventos a los elementos que corresponde.
  */ 
function inicio(){
    document.getElementById("roja").addEventListener("click", ver);
    document.getElementById("verde").addEventListener("click", ver);
    document.getElementById("azul").addEventListener("click", ver);
    document.getElementById("borrar").addEventListener("click", delClaseBorde);
    var imagenes = document.getElementsByTagName("img");
    for (var i = 0; i<imagenes.length; i++){
        imagenes[i].addEventListener("mouseover",info);
    }
}

/**
  * La función info recibe por parámetro el elemento que ha recibido el mouseover.
  * Se puede mostrar diréctamente la información del alt, pero sino, podemos hacer un switch para detallarlo más.
  */
function info(e){
    //document.getElementById("info").getElementsByTagName("p")[0].innerHTML = e.target.alt;
    var txt = ""; //Variable que va a sustituir al texto del párrafo
    switch (e.target.alt){
            case("Alexanderplatz"): txt = "Esta es la parada de Alexanderplatz"; break;
            case("HermannPlatz"): txt = "Esta es la parada de HermannPlatz"; break;
            case("Jungfernheide"): txt = "Esta es la parada de Jungfernheide"; break;
            case("Konstanzer"): txt = "Esta es la parada de Konstanzer"; break;
            case("Kurfurstenstrabe"): txt = "Esta es la parada de Kurfurstenstrabe"; break;
            case("Paulsternstrasse"): txt = "Esta es la parada de Paulsternstrasse"; break;
            case("Unterdenlinden"): txt = "Esta es la parada de Unterdenlinden"; break;
            case("Westhafen"): txt = "Esta es la parada de Westhafen"; break;
    }
    //No hacemos el innerHTML en cada case: lo podemos poner fuera.
     document.getElementById("info").getElementsByTagName("p")[0].innerHTML = txt;
}

/**
  *Función que elimina la clase borde de los elementos que la tienen
  */
function delClaseBorde(){
    var imagenes = document.getElementsByTagName("img");
    for (var i=0; i<imagenes.length; i++){
        //Si algún elemento no tiene el texto "borde", simplemente no lo cambia
        imagenes[i].className = imagenes[i].className.replace(" borde","");
    }
    
}

/* 
 * Función que recibe por parámetro el elemento que la pulsó y le asigna el borde a los elementos correspondientes.
 */
function ver(e){
    delClaseBorde();
    var seleccion = document.getElementsByClassName(e.target.id);
    for(var i=0; i<seleccion.length; i++){
        seleccion[i].className += " borde";
    }
}

//En la función anterior se pueden reducir las tres funciones que se ven a continuación
/*function verRoja(){
    delClaseBorde();
    var seleccion = document.getElementsByClassName("roja");
    alert(seleccion.length);
    for(var i=0; i<seleccion.length; i++){
        seleccion[i].className += " borde";
    }
}
function verAzul(){
    delClaseBorde();
    var seleccion = document.getElementsByClassName("azul");
    alert(seleccion.length);
    for(var i=0; i<seleccion.length; i++){
        seleccion[i].className += " borde";
    }
}
function verVerde(){
    delClaseBorde();
    var seleccion = document.getElementsByClassName("verde");
    alert(seleccion.length);
    for(var i=0; i<seleccion.length; i++){
        seleccion[i].className += " borde";
    }
}*/
