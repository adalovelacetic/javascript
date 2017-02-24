<?php
header("Content-Type: application/json; charset=UTF-8");

$where = ($_POST["where"]);

$servidor = "localhost";
$usuario = "root";
$password = "";
$bbdd = "sense8";

//Crear la conexión
$conexion = new mysqli($servidor, $usuario, $password, $bbdd);
mysqli_set_charset($conexion, "utf8");

//Comprobamos la conexión
if ($conexion ->connect_error){
    die("Error en la conexion: "+$conexion->connect_error);
}else{
    //Conexión correcta
    
    //Creamos la consulta SQL
    $sql = "SELECT idPersonaje, nombre, descripcion, pais, imagen, tipo FROM personajes $where";
    $resultado = $conexion ->query($sql);
    
    $salida = array();
    $salida = $resultado->fetch_all(MYSQL_ASSOC);
    
    echo json_encode($salida);
}
$conexion->close();

?>