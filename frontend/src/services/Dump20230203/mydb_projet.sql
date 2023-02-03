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
-- Table structure for table `projet`
--

DROP TABLE IF EXISTS `projet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `lien` varchar(255) DEFAULT NULL,
  `image` mediumtext,
  `entreprise_id` int NOT NULL,
  PRIMARY KEY (`id`,`entreprise_id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_projet_entreprise_idx` (`entreprise_id`),
  CONSTRAINT `fk_projet_entreprise` FOREIGN KEY (`entreprise_id`) REFERENCES `entreprise` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projet`
--

LOCK TABLES `projet` WRITE;
/*!40000 ALTER TABLE `projet` DISABLE KEYS */;
INSERT INTO `projet` VALUES (2,'La ruche','Premier projet lors de la formation, trombinoscope de présentation de notre promo de développeurs.','https://github.com/Atouzani7/P1-laRuche.git','https://github.com/Atouzani7/P1-laRuche/blob/main/assets/Logo_p1.png?raw=true',1),(3,'Blind test','Jeu musical. L’objectif est de trouver le plus vite possible le titre de la chanson joué.','https://github.com/WildCodeSchool/2022-09-JS-Lille-project-2-g1-techlegends.git','https://raw.githubusercontent.com/WildCodeSchool/2022-09-JS-Lille-project-2-g1-techlegends/dev/frontend/src/assets/Logo.png',1),(4,'Siloc','Gestion d’une flote de véhicule','https://github.com/WildCodeSchool/2022-09-JS-Lille-project-3-g3-origin.git','data:image/png;base64,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',1),(5,'Origin’s Digital','Origins Digital est une plateforme où vous pouvez regarder vos films / séries  favoris','https://github.com/WildCodeSchool/2022-09-JS-Lille-project-3-g3-origin.git','https://img.newstank.fr/crop/fill/f5fdf7057d8dd8cef45682b30206bb3e/0/0/672/294/1200/627/image-article-221347.jpg',2),(6,'Portfolio','Ce site, un portfolio qui réuni mes différents projets créer.','https://github.com/Atouzani7/portfolioCP','https://raw.githubusercontent.com/Atouzani7/portfolioCP/15c690ce5966eb762ed64501ee6ca11dd20b3d22/frontend/src/assets/logo.svg',1);
/*!40000 ALTER TABLE `projet` ENABLE KEYS */;
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
