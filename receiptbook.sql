-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 16, 2018 at 02:05 PM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `receiptbook`
--

-- --------------------------------------------------------

--
-- Table structure for table `email`
--

CREATE TABLE `email` (
  `emailTo` varchar(40) DEFAULT NULL,
  `emailFrom` varchar(40) DEFAULT NULL,
  `subject` varchar(40) DEFAULT NULL,
  `content` varchar(500) DEFAULT NULL,
  `dateSent` date DEFAULT NULL,
  `emailId` int(11) NOT NULL,
  `newOld` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `email`
--

INSERT INTO `email` (`emailTo`, `emailFrom`, `subject`, `content`, `dateSent`, `emailId`, `newOld`) VALUES
('nikkiT@test.com', 'niallm@test.com', 'MTG', 'When do you want to go', '2018-02-12', 2, 'o'),
('niallm@test.com', 'nikkiT@test.com', 'RE:MTG', 'In a little while if that is ok', '2018-02-12', 3, 'o'),
('seanm@test.com', 'niallm@test.com', 'Project', 'What tech should be used in the project?', '2018-03-12', 4, 'n'),
('joshS@test.com', 'niallm@test.com', 'Salvation', 'Have you heard of our lord and saviour Sauron', '2018-03-03', 5, 'o');

-- --------------------------------------------------------

--
-- Table structure for table `receiptitem`
--

CREATE TABLE `receiptitem` (
  `transactionId` varchar(255) NOT NULL,
  `itemprice` varchar(45) NOT NULL,
  `itemname` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receiptitem`
--

INSERT INTO `receiptitem` (`transactionId`, `itemprice`, `itemname`) VALUES
('5af3269d90721000013654bb', '£1.10', ' HOVIS BREAD 800G'),
('5af3269d90721000013654bb', '£2.00', ' EASTER FARM CAKE 4 PACK'),
('5af3269d90721000013654bb', '£1.80', ' FREE RANGE EGGS. 6 PACK'),
('5af3269d90721000013654bb', '£0.30', ' CIABATTA EACH'),
('5af3269d90721000013654b8', '£1.10', ' HOVIS BREAD 800G'),
('5af3269d90721000013654b8', '£2.00', ' EASTER FARM CAKE 4 PACK'),
('5af3269d90721000013654b8', '£1.80', ' FREE RANGE EGGS. 6 PACK'),
('5af3269d90721000013654b8', '£0.30', ' CIABATTA EACH');

-- --------------------------------------------------------

--
-- Table structure for table `receipts`
--

CREATE TABLE `receipts` (
  `receiptId` int(11) NOT NULL,
  `imageText` varchar(20000) DEFAULT NULL,
  `imgPath` varchar(100) DEFAULT NULL,
  `transactionId` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `receipts`
--

INSERT INTO `receipts` (`receiptId`, `imageText`, `imgPath`, `transactionId`) VALUES
(10, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt12.png', '5af3269d90721000013654b9'),
(17, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt13.png', '5af3269d90721000013654bd'),
(18, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt14.png', '5af3269d90721000013654bd'),
(19, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt15.png', '5af3269d90721000013654bd'),
(22, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt13.png', '5af3269d90721000013654ba'),
(23, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt14.png', '5af3269d90721000013654ba'),
(34, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt12.png', '5af3269d90721000013654bb'),
(35, NULL, 'C:/Users/Conor/AnypointStudio/workspace/BOIProject/src/main/images/newreceipt11.png', '5af3269d90721000013654b8');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(40) NOT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `password`) VALUES
('CECILIA MARTIN', '123456'),
('joshS@test.com', '123456'),
('niallm@test.com', '123456'),
('nikkiT@test.com', '123456'),
('seanm@test.com', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `email`
--
ALTER TABLE `email`
  ADD PRIMARY KEY (`emailId`),
  ADD KEY `emailTo` (`emailTo`),
  ADD KEY `emailFrom` (`emailFrom`);

--
-- Indexes for table `receipts`
--
ALTER TABLE `receipts`
  ADD PRIMARY KEY (`receiptId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `email`
--
ALTER TABLE `email`
  MODIFY `emailId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `receipts`
--
ALTER TABLE `receipts`
  MODIFY `receiptId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `email`
--
ALTER TABLE `email`
  ADD CONSTRAINT `email_ibfk_1` FOREIGN KEY (`emailTo`) REFERENCES `users` (`username`),
  ADD CONSTRAINT `email_ibfk_2` FOREIGN KEY (`emailFrom`) REFERENCES `users` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
