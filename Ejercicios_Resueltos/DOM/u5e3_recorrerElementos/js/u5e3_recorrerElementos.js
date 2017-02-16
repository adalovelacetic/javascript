window.addEventListener("load", inicio);

var txt;
var cont;

/**
  * Función que se ejecuta tras cargar el HTML. Asigna los eventos a los elementos que los contienen
  */
function inicio(){
    document.getElementById("enviar").addEventListener("click", recorrer);
}

/**
  * Comprueba los elementos que tiene el formulario, recorriéndolos uno por uno.
  */
function recorrer(){
	//Iniciamos aquí el texto porque sino se va añadiendo cada vez que pulsamos el botón recorrer
    txt="";
    cont=0;
    var hijos = document.getElementById("miFormulario").childNodes;
    //Recorremos todos los hijos del formulario y comprobamos uno a uno
    for(var i=0; i<hijos.length; i++){
        comprobar(hijos[i]);
    }
    //Añadimos el texto recopilado en el elemento info
    document.getElementById("info").innerHTML += txt;

}

/**
  * Revisa el elemento pasado por parámetro y comprueba sus valores.
  */
function comprobar(elemento){
    var tipo = elemento.nodeType; //Comprobamos el nombre del elemento    
    if (tipo == 8){ //Es un comentario
        cont++; 
        txt += "<br/>"+cont+" : "+elemento.nodeName+" "+elemento.textContent;  
    } else if (tipo == 1){
        cont++;

        //Estas comprobaciones nos sirven para asignar "Vacía" o "Vacío" a la clase o al identificador, para que muestre algo 
        if (elemento.className) clase = elemento.className;
        else clase ="Vacía";
        if (elemento.id) id = elemento.id;
        else id= "Vacío";
        switch (elemento.nodeName){
        	//Podríamos tratar de extraer las líneas de texto en una función, pero cada una es diferente.
            case ("INPUT"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" | Tipo:"+ elemento.type+" | Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.value;
                break;
            case ("LABEL"):
                txt += "<br/>"+cont+": "+elemento.nodeName+" | For: "+elemento.htmlFor+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.textContent;
                break;  
            case ("BUTTON"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Valor: "+elemento.value;
                break;
            case ("TEXTAREA"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id+" | Contenido: "+elemento.textContent;
                break;
            case ("SELECT"):
                txt += "<br/>"+cont+": "+ elemento.nodeName+" |  Name: "+elemento.name+" | Clase: "+clase+" | Id: "+id;
                var opciones = elemento.children;
                for (var i = 0; i<opciones.length; i++){
                    txt += "<br/>&nbsp;&nbsp;&nbsp;&nbsp;"+cont+"."+i+": "+ opciones[i].nodeName+" |  Contenido: "+opciones[i].textContent;
                }
                break;
            case ("BR"): //Podemos extraerlo también como elemento del formulario; es de tipo 1 porque es un elemento.
            	txt += "<br/>"+cont+": "+elemento.nodeName;
            	break;
        }
    }
    //Nota: el cont lo aumentamos en cada tipo, y no al final de la función, porque el texto (espacios, saltos de línea...) también son elementos del formulario, y los contaría.
}