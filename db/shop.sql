-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Feb 14, 2024 at 09:42 PM
-- Server version: 5.7.23
-- PHP Version: 7.0.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(512) NOT NULL,
  `Description` varchar(512) NOT NULL,
  `Price` decimal(10,0) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `Name`, `Description`, `Price`) VALUES
(1, 'Xbox Series X', 'Xbox Series X 1TB SSD Console - Includes Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming Velocity Architecture', '500'),
(2, 'MSI 2023 Newest Katana 15 Gaming Laptop', 'MSI 2023 Newest Katana 15 Gaming Laptop, 15.6\" 144 Hz IPS Display, Intel Core i7 12650H (Up to 4.7 GHz), GeForce RTX 4070, 16GB RAM, 1TB SSD, Wi-Fi 6, 4-Zone RGB Gaming Keyboard, Windows 11 Home', '1190'),
(3, 'Corsair Voyager a1600 Gaming Laptop', 'Corsair Voyager a1600 Gaming Laptop (AMD Ryzen R9 6900HS, AMD Radeon RX 6800M, 32GB DDR5, 16\" 2560x1600 240Hz IPS Screen, Cherry MX Ultra-Low Profile Keyswitches, Windows 11 Home Advanced) Black', '2000'),
(4, 'ASUS Zenbook Pro', 'ASUS Zenbook Pro 16 Laptop 16\" 165Hz Refresh Rate Display, Intel i7-12650H CPU, DialPad, NVidia GeForce RTX 3070 Ti Graphics, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX6601ZW-DB76', '1000'),
(5, 'MSI Force GC30V2 Wireless Gaming Controller', 'MSI Force GC30V2 Wireless Gaming Controller, Dual Vibration Motors, Dual Connection Modes, Interchangable D-Pads, Compatible with PC & Android', '30'),
(6, 'PDP Victrix Pro BFG Wireless Gaming Controller for Playstation 5', 'PDP Victrix Pro BFG Wireless Gaming Controller for Playstation 5 / PS5, PS4, PC, Modular Gamepad, Remappable Buttons, Customizable Triggers/Paddles/D-Pad, PC App', '175'),
(7, 'Razer Huntsman Elite Gaming Keyboard', 'Razer Huntsman Elite Gaming Keyboard: Fast Keyboard Switches - Clicky Optical Switches - Chroma RGB Lighting - Magnetic Plush Wrist Rest - Dedicated Media Keys & Dial - Classic Black', '40'),
(8, 'Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard', 'Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches Gen2 w/Sound Dampeners & 8000Hz Polling Rate - Detachable TypeC Cable - Doubleshot PBT Keycaps - Ergonomic Wrist Rest', '100'),
(9, 'Razer DeathAdder Essential Gaming Mouse', 'Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black', '30'),
(10, 'Logitech G502 HERO High Performance Wired Gaming Mouse', 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac', '50');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Firstname` varchar(512) NOT NULL,
  `Lastname` varchar(512) NOT NULL,
  `Username` varchar(512) NOT NULL,
  `Email` varchar(512) NOT NULL,
  `Password` varchar(512) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Firstname`, `Lastname`, `Username`, `Email`, `Password`) VALUES
(1, 'Joe', 'Smith', 'joe.smith@gmail.com', 'joe.smith@gmail.com', '$2b$12$XI16uSKQFiMUs21nYWY.L.mSjDwOzDbI7CSz5GdJxNDJz8D5OFdL2'),
(2, 'Jane', 'Smith', 'jane.smith@gmail.com', 'jane.smith@gmail.com', '$2b$12$Iv8IEb9uQpE3mOM78jzZSeJcH0hPkzOmr78e9HSb5EE1Ssy5LaXVW');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
