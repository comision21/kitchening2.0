-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: kitchening21_db
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Dumping data for table `Addresses`
--

LOCK TABLES `Addresses` WRITE;
/*!40000 ALTER TABLE `Addresses` DISABLE KEYS */;
/*!40000 ALTER TABLE `Addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES (1,'Carnes',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(2,'Pescados y Mariscos',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(3,'Pastas',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(4,'Sopas',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(5,'Desayunos y meriendas',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(6,'Bebidas',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(7,'Guarniciones',NULL,'2023-10-04 16:48:07','2023-10-04 16:48:07');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (1,'d38f73fb-7c0b-4afc-8ce4-bb1a45ccfa12.jpg',1,1,'2023-10-04 16:50:00','2023-10-04 16:50:00',NULL),(2,'5ba528b2-8b25-476f-9a66-7998c9c632d7.webp',0,1,'2023-10-04 16:50:00','2023-10-04 16:50:00',NULL),(3,'807897a1-684c-440b-b8db-7387d8e426f7.webp',0,1,'2023-10-04 16:50:00','2023-10-04 16:50:00',NULL),(4,'773d5608-a753-41ea-94c1-920fac5335fe.webp',0,1,'2023-10-04 16:50:00','2023-10-04 16:50:00',NULL),(5,'8f00356d-6246-411b-b92a-4c24671c4672.webp',1,2,'2023-10-04 19:02:53','2023-10-04 19:02:53',NULL),(6,'489077e7-f726-40ff-b6d8-3c1495f2e756.webp',0,2,'2023-10-04 19:02:54','2023-10-04 19:02:54',NULL),(7,'ba1a39f0-d6bc-44a2-a4f2-52fd372346cb.webp',0,2,'2023-10-04 19:02:54','2023-10-04 19:02:54',NULL),(8,'e3b881ac-6e3b-42eb-9cfd-26ec653c966a.webp',0,2,'2023-10-04 19:02:54','2023-10-04 19:02:54',NULL),(9,'f171cff7-d6ca-42e3-af02-89475235ec67.webp',1,3,'2023-10-04 19:06:29','2023-10-04 19:06:29',NULL),(10,'d6f45546-ce0e-4e18-96e9-abf7ecca6a28.webp',0,3,'2023-10-04 19:06:29','2023-10-04 19:06:29',NULL),(11,'2a4734ea-631d-4ff2-94c7-b73b15611ee8.webp',0,3,'2023-10-04 19:06:29','2023-10-04 19:06:29',NULL),(12,'1c067253-c05b-4c1a-9514-ab0029d91015.webp',0,3,'2023-10-04 19:06:29','2023-10-04 19:06:29',NULL),(13,'c0bf675b-c176-461b-aefe-a45023644c1b.jpg',1,4,'2023-10-04 19:18:48','2023-10-04 19:18:48',NULL),(14,'5d4e2560-4e8e-4217-b786-1b8ae93cb07c.jpg',0,4,'2023-10-04 19:18:48','2023-10-04 19:18:48',NULL),(15,'6b163e62-beca-460a-a243-61aed464eb79.jpg',0,4,'2023-10-04 19:18:48','2023-10-04 19:18:48',NULL),(16,'884d501a-a621-40f8-95b0-9da18a75c6b1.jpg',0,4,'2023-10-04 19:18:48','2023-10-04 19:18:48',NULL),(17,'811df8e3-2edd-4410-ab05-5e306ed79f94.jpg',1,5,'2023-10-04 19:27:58','2023-10-04 19:27:58',NULL),(18,'70ed5a8e-4c42-4a4d-9f67-e212f0a85734.jpg',0,5,'2023-10-04 19:27:58','2023-10-04 19:27:58',NULL),(19,'17934189-3859-4398-b3d9-8128470b5948.jpg',0,5,'2023-10-04 19:27:58','2023-10-04 19:27:58',NULL),(20,'6df57ba4-622b-4c3d-97d0-8b65a2868f39.jpg',0,5,'2023-10-04 19:27:58','2023-10-04 19:27:58',NULL),(21,'69af59ba-9049-44e0-9cb1-fe4f89215f3d.jpg',1,6,'2023-10-05 14:20:05','2023-10-05 14:20:05',NULL),(24,'61101741-bed0-43a0-b069-94e15b2bb95a.jpg',0,6,'2023-10-05 14:20:36','2023-10-05 14:20:36',NULL),(25,'8a55d683-cd63-4c30-960d-e69ae960d06e.jpg',0,6,'2023-10-05 14:20:36','2023-10-05 14:20:36',NULL),(26,'17b922c5-d127-4805-be1d-749e38557689.png',0,6,'2023-10-05 14:20:36','2023-10-05 14:20:36',NULL),(27,'76f581b6-410d-4ec0-a572-1f4e4d472cfd.jpg',1,7,'2023-10-05 14:31:20','2023-10-05 14:31:20',NULL),(30,'1925619f-510e-489f-8bca-2cad2bbbcf54.jpg',0,7,'2023-10-05 14:31:52','2023-10-05 14:31:52',NULL),(31,'d8bfe4c0-8afa-458e-af18-04832d720257.jpg',0,7,'2023-10-05 14:31:52','2023-10-05 14:31:52',NULL),(32,'966d6b1f-22a1-439a-b412-6c60c438bdde.jpg',0,7,'2023-10-05 14:31:52','2023-10-05 14:31:52',NULL);
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Items`
--

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;
/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'Tallarines a la boloñesa',2500,10,'Una de las salsas que mejor acompaña a unos tallarines es, sin duda, una salsa o ragú a la boloñesa. Una carne picada y bien guisadita con su tomate que, acompañando a un plato de pasta, forma un plato completo. Una receta fácil y muy recurrida.',3,2,'2023-10-04 16:50:00','2023-10-04 16:50:00',NULL),(2,'Paella valenciana tradicional',4000,10,'La auténtica y tradicional paella valenciana: te explicamos cómo hacerla paso a paso, con todo detalle, de manera sencilla y con todos los trucos y aspectos clave para conseguir la paella perfecta.',2,2,'2023-10-04 19:02:53','2023-10-04 19:02:53',NULL),(3,'Ensaladilla rusa',2800,0,'La ensaladilla rusa es uno de los platos más populares de nuestra gastronomía, no hay quien se resista a una tapa de esta ensalada fría. Si aún no la has hecho, hoy te mostramos la receta original paso a paso. Nada más fácil y delicioso.',7,4,'2023-10-04 19:06:29','2023-10-04 19:06:29',NULL),(4,'Rollitos de calabacín',2000,0,'Sorprender con un picoteo fresco, fácil y rápido es totalmente posible con esta receta que te proponemos. Elaboramos unos rollitos de calabacín rellenos de La Gula del Norte®, pimiento verde, pimiento rojo y cebolleta. La combinación es exquisita y perfecta para compartir en ocasiones especiales.',7,1,'2023-10-04 19:18:48','2023-10-04 19:18:48',NULL),(5,'Carta de postres',3500,0,'El chef Patissier Gustavo Nari realiza cinco variedades de postres compuestos, con presentaciones modernas y una gran cantidad de técnicas aplicadas. Cada una de las recetas está integrada por varias elaboraciones para lograr el emplatado deseado.',5,3,'2023-10-04 19:27:58','2023-10-04 19:27:58',NULL),(6,'Pan casero',1200,0,'Hacer pan en casa es algo maravilloso, aunque meterse en ello suele imponer un poco. Asusta leer una receta y encontrarse con términos como masa madre, larga fermentación, etc, pero ese no es nuestro caso. La receta de pan casero con harina común que hoy traemos es todo lo contrario. Perfecta para estrenarse en el mundo del pan y con total garantía de éxito.',5,6,'2023-10-05 14:20:05','2023-10-05 14:20:36',NULL),(7,'Chocolate tóxico',3000,0,'Al chocolate, alimento de dioses, se le atribuyen tantas maldades como beneficios, según la óptica desde la que se mire. Más allá de la pura experiencia placentera que produce devorarlo, casi todas sus bondades se las debemos al cacao y las sustancias que contiene, verdadera fuente de propiedades saludables. Sin embargo, también el cacao puede ser tóxico para el ser humano. Como se suele decir, el veneno está en la dosis.',5,6,'2023-10-05 14:31:20','2023-10-05 14:31:52','2023-10-05 15:07:19');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Roles`
--

LOCK TABLES `Roles` WRITE;
/*!40000 ALTER TABLE `Roles` DISABLE KEYS */;
INSERT INTO `Roles` VALUES (1,'Administrador','2023-10-04 16:48:07','2023-10-04 16:48:07'),(2,'Usuario','2023-10-04 16:48:07','2023-10-04 16:48:07');
/*!40000 ALTER TABLE `Roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Sections`
--

LOCK TABLES `Sections` WRITE;
/*!40000 ALTER TABLE `Sections` DISABLE KEYS */;
INSERT INTO `Sections` VALUES (1,'Entradas','2023-10-04 16:48:07','2023-10-04 16:48:07'),(2,'Platos principales','2023-10-04 16:48:07','2023-10-04 16:48:07'),(3,'Postres','2023-10-04 16:48:07','2023-10-04 16:48:07'),(4,'Ensaladas','2023-10-04 16:48:07','2023-10-04 16:48:07'),(5,'Bebidas','2023-10-04 16:48:07','2023-10-04 16:48:07'),(6,'Cafetería','2023-10-04 16:48:07','2023-10-04 16:48:07'),(7,'Vinos','2023-10-04 16:48:07','2023-10-04 16:48:07');
/*!40000 ALTER TABLE `Sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES `sequelizemeta` WRITE;
/*!40000 ALTER TABLE `sequelizemeta` DISABLE KEYS */;
INSERT INTO `sequelizemeta` VALUES ('20230922143935-create-category.js'),('20230922144051-create-section.js'),('20230922144310-create-product.js'),('20230922144808-create-image.js'),('20230922144934-create-role.js'),('20230922145047-create-user.js'),('20230922145349-create-address.js'),('20230922145516-create-status.js'),('20230922150314-create-order.js'),('20230922150541-create-item.js'),('20231005145305-change-column-deleteAt-Products.js'),('20231005150534-change-column-deleteAt-Images.js');
/*!40000 ALTER TABLE `sequelizemeta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Statuses`
--

LOCK TABLES `Statuses` WRITE;
/*!40000 ALTER TABLE `Statuses` DISABLE KEYS */;
/*!40000 ALTER TABLE `Statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Admin','Kitchening','admin@gmail.com','$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW',NULL,1,'2023-10-04 16:48:07','2023-10-04 16:48:07'),(2,'User','Kitchening','user@gmail.com','$2a$10$khdNA1e5pfBwVikAUZE1.OwMw8gS27wnUDfMBA6OqO5IVv2jrwXMW',NULL,2,'2023-10-04 16:48:07','2023-10-04 16:48:07');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-11 11:20:13
