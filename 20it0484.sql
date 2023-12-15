-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 11, 2023 at 11:11 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `20it0484`
--

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(14) NOT NULL,
  `role` varchar(18) NOT NULL,
  `NIC` varchar(14) NOT NULL,
  `password` varchar(25) NOT NULL,
  `stu_id` varchar(22) NOT NULL,
  `fName` varchar(18) NOT NULL,
  `lName` varchar(18) NOT NULL,
  `email` varchar(30) NOT NULL,
  `phone` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`id`, `role`, `NIC`, `password`, `stu_id`, `fName`, `lName`, `email`, `phone`) VALUES
(10, 'student', '982172799v', 'jkl@3#','20IT0484', 'Infaz', 'Gafoor', 'infasgafoor2020@gmail.com', 754749010),
(11, 'teacher', '199020402499', 'amj@#', '20IT0488', 'Mohamed', 'Amjath', 'amjath1@gmail.com', 0776754389),
(12, 'student', '199918802290', '43215', '20IT0434', 'Ahamed', 'Fayaz', 'fayas1@gmail.com', 778942790),
(24, 'student', '965467890v', 'ifx@$&', '19IT0456', 'Dhana', 'Kariyawasam', 'dhana1@gmail.com', 73456278);

-- --------------------------------------------------------

--
-- Table structure for table `result`
--

CREATE TABLE `result` (
  `id` int(11) NOT NULL,
  `stu_id` varchar(15) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `marks` float NOT NULL,
  `grade` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `result`
--

INSERT INTO `result` (`id`, `stu_id`, `subject`, `marks`, `grade`) VALUES
(33, '20it0443', 'IT1101 - Applied Science', 87, 'A'),
(34, '20it0452', 'IT1203 - Fund.of.SE', 69, 'B'),
(35, '20it0452', 'IT1109 - Web Tech', 91, 'A'),
(36, '20IT0534', 'IT1201 - Digital Electronics', 70, 'B');

-- --------------------------------------------------------

--
-- Table structure for table `semesterMarks`
--

CREATE TABLE `semesterMarks` (
  `id` int(10) NOT NULL,
  `studentId` varchar(12) NOT NULL,
  `NIC` varchar(14) NOT NULL,
  `semester` int(13) NOT NULL,
  `subject` varchar(42) NOT NULL,
  `grade` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `userdetails`
--

CREATE TABLE `userdetails` (
  `id` int(10) NOT NULL,
  `role` varchar(18) NOT NULL,
  `fName` varchar(15) NOT NULL,
  `lName` varchar(15) NOT NULL,
  `NIC` varchar(14) NOT NULL,
  `phoneno` int(12) NOT NULL,
  `email` varchar(30) NOT NULL,
  `studentId` varchar(20) DEFAULT NULL,
  `address` varchar(88) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userdetails`
--

INSERT INTO `userdetails` (`id`, `role`, `fname`, `lName`, `NIC`, `phoneno`, `email`, `studentId`, `address`) VALUES
(1, 'student', 'Mohamed', 'Infaz', '982172799v', 754749010, 'infasgafoor2020@gmail.com', '20it0484', '91A/1, hospital road,Sainthamaruthu-10');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `NIC` (`NIC`);

--
-- Indexes for table `result`
--
ALTER TABLE `result`
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `idx_` (`stu_id`,`subject`),
  ADD KEY `sub_name` (`subject`);

--
-- Indexes for table `semesterMarks`
--
ALTER TABLE `semesterMarks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `studentId` (`studentId`),
  ADD KEY `NIC` (`NIC`);

--
-- Indexes for table `userdetails`
--
ALTER TABLE `userdetails`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `NIC` (`NIC`),
  ADD UNIQUE KEY `studentId` (`studentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `result`
--
ALTER TABLE `result`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `semesterMarks`
--
ALTER TABLE `semesterMarks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userdetails`
--
ALTER TABLE `userdetails`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `semesterMarks`
--
ALTER TABLE `semesterMarks`
  ADD CONSTRAINT `semesterMarks_ibfk_1` FOREIGN KEY (`NIC`) REFERENCES `userdetails` (`NIC`),
  ADD CONSTRAINT `semesterMarks_ibfk_2` FOREIGN KEY (`studentId`) REFERENCES `userdetails` (`studentId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
