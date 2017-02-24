window.addEventListener("load", inicio);

function inicio() {
    var botones = document.getElementsByTagName("button");
    for (var i = 0; i<botones.length; i++){
        botones[i].addEventListener("click", mostrar);
    }
}

function mostrar(e) {
    var where ="";
    if (e.target.id == "Sensate"){
        where = "where tipo = 1";
    } else if (e.target.id == "Otro personaje"){
        where = "where tipo = 2";
    } else {
        where = "where continente='"+e.target.id+"'";
    }

    var xhr = new XMLHttpRequest();
    var txt = "";
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var array = JSON.parse(this.responseText);
            txt += "<table><tr><th>Nombre</th><th>Descripcion</th><th>Pais</th><th>Imagen</th></tr>"
            for (x in array) {
                txt += "<tr><td>"+array[x].nombre + "</td><td>" + array[x].descripcion + "</td><td><img src='img/"+array[x].pais+".png' class='bandera'/></td><td><img src='img/"+array[x].imagen+"'/></td></tr>";
            }
            txt += "</table>";
            document.getElementById("texto").innerHTML = txt;
        }
    }
    xhr.open("POST", "sense8.php", true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("where="+where);
}