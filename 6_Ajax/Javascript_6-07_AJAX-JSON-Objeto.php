<?php
//Para evitar que los warning salgan en la pantalla y se traten como texto JSON
error_reporting(0);

$objeto ="";
$objeto->nombre = "Ada";
$objeto->nacimiento = 1815;
$objeto->pais = "Reino Unido";

//Codificamos el objeto a JSON
$miJSON = json_encode($objeto);

echo $miJSON;

?>