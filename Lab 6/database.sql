-- MySQL dump 10.13  Distrib 5.7.12, for osx10.9 (x86_64)
--
-- Host: mysql.cs.iastate.edu    Database: db319team104
-- ------------------------------------------------------
-- Server version	5.7.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookLocation`
--

DROP TABLE IF EXISTS `bookLocation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bookLocation` (
  `BookId` int(10) NOT NULL,
  `ShelfId` int(10) NOT NULL,
  PRIMARY KEY (`BookId`,`ShelfId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookLocation`
--

LOCK TABLES `bookLocation` WRITE;
/*!40000 ALTER TABLE `bookLocation` DISABLE KEYS */;
INSERT INTO `bookLocation` VALUES (1,1),(2,1),(12,1),(13,2),(22,1),(67,1),(99,3),(123,1),(433,2),(567,1),(990,3),(1234,1),(5675,1),(6767,3),(12344,1),(56756,1),(98765,4),(123445,1),(567567,1),(867567,1),(867967,1),(1234456,1),(8679676,1),(12344567,1),(123445678,1),(1234456788,1);
/*!40000 ALTER TABLE `bookLocation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `books` (
  `BookId` int(10) NOT NULL,
  `BookTitle` varchar(255) DEFAULT NULL,
  `Author` varchar(255) DEFAULT NULL,
  `Availability` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`BookId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `books`
--

LOCK TABLES `books` WRITE;
/*!40000 ALTER TABLE `books` DISABLE KEYS */;
INSERT INTO `books` VALUES (1,'asdf','g',1),(2,'asdf','g',1),(5,'harry potter','you know who',1),(12,'Art book','who care',1),(13,'Science book','who care',1),(22,'New Art book','him',1),(42,'hi','jk',1),(44,'potato','him',1),(65,'plplpl','you know who',1),(67,'hello','me',1),(89,'lksajbg','you know who',1),(99,'haha','me',1),(123,'asdf','g',1),(433,'New Science Book','one guy',1),(444,'potato','him',1),(567,'book14','hh',1),(777,'lord of the rings','you know who',1),(990,'what','THat one dude',1),(1234,'asdf','g',1),(5675,'book15','hh',1),(6767,'New Sport Book','hg',1),(9090,'uyfer','you know who',1),(12344,'asdf','g',1),(12345,'new book ','Him',1),(56756,'book16','hh',1),(98765,'New Lit book','lkj',1),(123445,'asdf','g',1),(567567,'book17','hh',1),(867567,'book18','hh',1),(867967,'book19','hh',1),(1234456,'asdf','g',1),(8679676,'book20','hh',1),(12344567,'asdf','g',1),(123445678,'asdf','g',1),(1234456788,'asdf','g',1);
/*!40000 ALTER TABLE `books` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loanHistory`
--

DROP TABLE IF EXISTS `loanHistory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loanHistory` (
  `UserName` varchar(255) NOT NULL,
  `BookId` int(10) NOT NULL,
  `DueDate` date DEFAULT NULL,
  `ReturnedDate` date DEFAULT NULL,
  PRIMARY KEY (`UserName`,`BookId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loanHistory`
--

LOCK TABLES `loanHistory` WRITE;
/*!40000 ALTER TABLE `loanHistory` DISABLE KEYS */;
INSERT INTO `loanHistory` VALUES ('testUser',12,'2017-03-31','2017-03-31'),('testUser',22,'2017-03-31','2017-03-31'),('testUser',67,'2017-03-31','2017-03-31'),('testUser',100,'2017-03-31','2017-03-31'),('testUser',1000,'2017-03-31','2017-03-31'),('testUser',65656,'2017-03-31','2017-03-31'),('testUser',123333,'2017-03-31','2017-03-31');
/*!40000 ALTER TABLE `loanHistory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelves`
--

DROP TABLE IF EXISTS `shelves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shelves` (
  `ShelfId` int(10) NOT NULL,
  `ShelfName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ShelfId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelves`
--

LOCK TABLES `shelves` WRITE;
/*!40000 ALTER TABLE `shelves` DISABLE KEYS */;
INSERT INTO `shelves` VALUES (1,'Art'),(2,'Science'),(3,'Sport'),(4,'Literature');
/*!40000 ALTER TABLE `shelves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `UserName` varchar(255) NOT NULL,
  `Password` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `Phone` bigint(10) DEFAULT NULL,
  `Librarian` tinyint(4) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UserName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('testLib','098f6bcd4621d373cade4e832627b4f6','test@test.com',3332221111,1,'lk','jm'),('testUser','098f6bcd4621d373cade4e832627b4f6','test@test.com',2176215986,0,'hj','jn');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-03-31 17:12:22
