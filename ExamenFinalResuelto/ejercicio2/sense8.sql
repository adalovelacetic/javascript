-- phpMyAdmin SQL Dump
-- version 4.4.3
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 19-02-2017 a las 23:19:23
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `sense8`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personajes`
--

CREATE TABLE IF NOT EXISTS `personajes` (
  `idPersonaje` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `descripcion` text NOT NULL,
  `pais` varchar(25) NOT NULL,
  `continente` varchar(25) NOT NULL,
  `imagen` varchar(25) NOT NULL,
  `tipo` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `personajes`
--

INSERT INTO `personajes` (`idPersonaje`, `nombre`, `descripcion`, `pais`, `continente`, `imagen`, `tipo`) VALUES
(1, 'Will Gorski', 'Un policía de Chicago perseguido por un asesinato no resuelto de su niñez.', 'EEUU', 'America', 'will.png', 1),
(2, 'Riley Blue', 'Nacida como Riley Gunnarsdottir, una DJ islandesa; con un pasado atribulado que la hizo huir a Londres.', 'Inglaterra', 'Europa', 'riley.png', 1),
(3, 'Capheus', 'Un compasivo conductor Matatu de autobús en Nairobi con un gran sentido de justicia, que desesperadamente trata de ganar dinero para comprar medicina para su madre contagiada de SIDA.', 'Kenia', 'Africa', 'capheus.png', 1),
(4, 'Sun Bak', 'Una mujer de negocios de Seúl y estrella naciente en kickboxing underground.', 'Corea', 'Asia', 'sun.png', 1),
(5, 'Lito Rodríguez', 'Un gay en el armario y actor que vive en Ciudad de México.', 'España', 'Europa', 'lito.png', 1),
(6, 'Kala Dandekar', 'Una química farmacéutica y devota hinduista de Mumbai, que está comprometida para casarse con un hombre que no ama.', 'India', 'Asia', 'kala.png', 1),
(7, 'Wolfgang Bogdanow', 'Un ladrón de cajas fuertes de Berlín que tiene asuntos pendientes con su padre y forma parte del crimen organizado.', 'Alemania', 'Europa', 'wolfgang.png', 1),
(8, 'Nomi Marks', 'Una mujer transgénero lesbiana de San Francisco, bloguera política y hacker.', 'EEUU', 'America', 'nomi.png', 1),
(9, 'Angelica', 'Una sensate de un grupo anterior que viene a ser la «madre» de los ocho nuevos sensates cuando activa la conexión psíquica de ellos.', 'EEUU', 'America', 'sense8.png', 2),
(10, 'Jonas Maliki', 'Un sensate de un grupo diferente que se relaciona con los ocho nuevos sensates.', 'Reino Unido', 'Europa', 'sense8.png', 2),
(11, 'Whispers', 'Un anterior sensate vuelto contra su propia clase y quién dirige un grupo de personas que quieren capturar y matar sensates.', 'EEUU', 'America', 'sense8.png', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `personajes`
--
ALTER TABLE `personajes`
  ADD PRIMARY KEY (`idPersonaje`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `personajes`
--
ALTER TABLE `personajes`
  MODIFY `idPersonaje` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
