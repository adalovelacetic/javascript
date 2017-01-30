-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 29-01-2017 a las 19:27:46
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `normandia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `armas`
--

CREATE TABLE IF NOT EXISTS `armas` (
  `idArma` int(11) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(20) NOT NULL,
  `bando` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `armas`
--

INSERT INTO `armas` (`idArma`, `nombre`, `descripcion`, `imagen`, `bando`) VALUES
(1, 'Springfield 1903A3', 'Fue un fusil de cerrojo fabricado en los Estados Unidos.', 'springfield.jpg', 1),
(2, 'Browning 1919', 'Fue una ametralladora media calibre 7,62 mm que fue ampliamente empleada durante el siglo XX.', 'browning.jpg', 1),
(3, 'MP40', 'Fue un subfusil muy popular entre las tropas de la Alemania nazi durante la Segunda Guerra Mundial', 'mp40.jpg', 2),
(4, 'MG42', 'Fue una ametralladora media desarrollada por Alemania que entro en servicio en 1942.', 'mg42.jpg', 2),
(5, 'M1 Garand', 'Fue el primer fusil semiautomatico de los Estados Unidos que llego a ser un fusil comun para la infanteria', 'm1garand.jpg', 1),
(6, 'Panzerschreck', 'Fue un lanzacohetes antitanque reutilizable de calibre 88 mm desarrollado por Alemania en la Segunda Guerra Mundial', 'panzerschreck.jpg', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `armas`
--
ALTER TABLE `armas`
  ADD PRIMARY KEY (`idArma`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `armas`
--
ALTER TABLE `armas`
  MODIFY `idArma` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
