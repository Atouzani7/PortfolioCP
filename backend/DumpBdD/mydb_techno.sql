-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: localhost    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `techno`
--

DROP TABLE IF EXISTS `techno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `techno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `spe` varchar(45) DEFAULT NULL,
  `image` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `techno`
--

LOCK TABLES `techno` WRITE;
/*!40000 ALTER TABLE `techno` DISABLE KEYS */;
INSERT INTO `techno` VALUES (1,'HTML','Front','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/HTLM.svg'),(2,'Css','Front','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/CSS.svg'),(3,'Javascript','Front','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/javascript.svg'),(4,'React.js','Front','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/react.svg'),(6,'Figma','Front','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/figma.svg'),(7,'Git','Front / Back','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/git.svg'),(8,'Node.js','Back','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/node.svg'),(9,'Express.js','Back','https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png');
/*!40000 ALTER TABLE `techno` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-03  1:31:29
