-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2024 at 04:56 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

CREATE TABLE `products` (
  `ID` int(11) NOT NULL,
  `Name` varchar(512) NOT NULL,
  `Description` varchar(512) NOT NULL,
  `Price` decimal(10,0) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`ID`, `Name`, `Description`, `Price`) VALUES
(1, 'Xbox Series X', 'Xbox Series X 1TB SSD Console - Includes Wireless Controller - Up to 120 frames per second - 16GB RAM 1TB SSD - Experience True 4K Gaming Velocity Architecture', 500),
(2, 'MSI 2023 Newest Katana 15 Gaming Laptop', 'MSI 2023 Newest Katana 15 Gaming Laptop, 15.6\" 144 Hz IPS Display, Intel Core i7 12650H (Up to 4.7 GHz), GeForce RTX 4070, 16GB RAM, 1TB SSD, Wi-Fi 6, 4-Zone RGB Gaming Keyboard, Windows 11 Home', 1190),
(3, 'Corsair Voyager a1600 Gaming Laptop', 'Corsair Voyager a1600 Gaming Laptop (AMD Ryzen R9 6900HS, AMD Radeon RX 6800M, 32GB DDR5, 16\" 2560x1600 240Hz IPS Screen, Cherry MX Ultra-Low Profile Keyswitches, Windows 11 Home Advanced) Black', 2000),
(4, 'ASUS Zenbook Pro', 'ASUS Zenbook Pro 16 Laptop 16\" 165Hz Refresh Rate Display, Intel i7-12650H CPU, DialPad, NVidia GeForce RTX 3070 Ti Graphics, 32GB RAM, 1TB SSD, Windows 11 Home, Tech Black, UX6601ZW-DB76', 1000),
(5, 'MSI Force GC30V2 Wireless Gaming Controller', 'MSI Force GC30V2 Wireless Gaming Controller, Dual Vibration Motors, Dual Connection Modes, Interchangable D-Pads, Compatible with PC & Android', 30),
(6, 'PDP Victrix Pro BFG Wireless Gaming Controller for Playstation 5', 'PDP Victrix Pro BFG Wireless Gaming Controller for Playstation 5 / PS5, PS4, PC, Modular Gamepad, Remappable Buttons, Customizable Triggers/Paddles/D-Pad, PC App', 175),
(7, 'Razer Huntsman Elite Gaming Keyboard', 'Razer Huntsman Elite Gaming Keyboard: Fast Keyboard Switches - Clicky Optical Switches - Chroma RGB Lighting - Magnetic Plush Wrist Rest - Dedicated Media Keys & Dial - Classic Black', 40),
(8, 'Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard', 'Razer Huntsman V2 TKL Tenkeyless Gaming Keyboard: Fastest Linear Optical Switches Gen2 w/Sound Dampeners & 8000Hz Polling Rate - Detachable TypeC Cable - Doubleshot PBT Keycaps - Ergonomic Wrist Rest', 100),
(9, 'Razer DeathAdder Essential Gaming Mouse', 'Razer DeathAdder Essential Gaming Mouse: 6400 DPI Optical Sensor - 5 Programmable Buttons - Mechanical Switches - Rubber Side Grips - Classic Black', 30),
(10, 'Logitech G502 HERO High Performance Wired Gaming Mouse', 'Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons, On-Board Memory, PC / Mac', 50);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `Firstname` varchar(512) NOT NULL,
  `Lastname` varchar(512) NOT NULL,
  `Username` varchar(512) NOT NULL,
  `Email` varchar(512) NOT NULL,
  `Password` varchar(512) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`ID`, `Firstname`, `Lastname`, `Username`, `Email`, `Password`) VALUES
(2, 'Seo', 'James', 'Seo.James', 'Seo.James@gmail.com', '$2b$12$Iv8IEb9uQpE3mOM78jzZSeJcH0hPkzOmr78e9HSb5EE1Ssy5LaXVW'),
(13, 'Reo', 'James', 'Reo.James', 'reo.james@test.com', '$2b$12$onFYB1S.yhA0J5OL5xni9uS86ody.fFDLGyJpj.GDAtWWcwhH77ja');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
