-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: localhost    Database: banruou
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ct_dondathang`
--

DROP TABLE IF EXISTS `ct_dondathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_dondathang` (
  `MADONG` char(10) NOT NULL,
  `MADDH` char(10) NOT NULL,
  `SOLUONG` int DEFAULT NULL,
  `GIA` float DEFAULT NULL,
  PRIMARY KEY (`MADONG`,`MADDH`),
  KEY `MADDH_idx` (`MADDH`),
  CONSTRAINT `ct_dondathang_FK` FOREIGN KEY (`MADDH`) REFERENCES `dondathang` (`MADDH`),
  CONSTRAINT `MADONG` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_dondathang`
--

LOCK TABLES `ct_dondathang` WRITE;
/*!40000 ALTER TABLE `ct_dondathang` DISABLE KEYS */;
INSERT INTO `ct_dondathang` VALUES ('001','test',1,10),('002','test',2,30);
/*!40000 ALTER TABLE `ct_dondathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_khuyenmai`
--

DROP TABLE IF EXISTS `ct_khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_khuyenmai` (
  `MAKM` char(10) NOT NULL,
  `MADONG` char(10) NOT NULL,
  `PHANTRAMGIAM` int DEFAULT NULL,
  PRIMARY KEY (`MAKM`,`MADONG`),
  KEY `ct_khuyenmai_FK` (`MADONG`),
  CONSTRAINT `ct_khuyenmai_FK` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`),
  CONSTRAINT `ct_khuyenmai_FK_1` FOREIGN KEY (`MAKM`) REFERENCES `khuyenmai` (`MAKM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_khuyenmai`
--

LOCK TABLES `ct_khuyenmai` WRITE;
/*!40000 ALTER TABLE `ct_khuyenmai` DISABLE KEYS */;
INSERT INTO `ct_khuyenmai` VALUES ('002','001',20),('002','004',40),('002','020',55),('003','003',10),('003','009',50),('003','011',50),('003','012',50),('003','013',50),('003','015',55),('004','002',15),('004','005',15),('004','010',15);
/*!40000 ALTER TABLE `ct_khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_phieudat`
--

DROP TABLE IF EXISTS `ct_phieudat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_phieudat` (
  `IDCTPD` int NOT NULL AUTO_INCREMENT,
  `MAPD` char(20) NOT NULL,
  `MADONG` char(10) NOT NULL,
  `SOLUONG` int DEFAULT NULL,
  `GIA` float DEFAULT NULL,
  PRIMARY KEY (`IDCTPD`),
  UNIQUE KEY `ct_phieudat_UN` (`MAPD`,`MADONG`),
  KEY `MAPD_idx` (`MAPD`),
  KEY `ct_phieudat_FK` (`MADONG`),
  CONSTRAINT `ct_phieudat_FK` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`),
  CONSTRAINT `ct_phieudat_FK_1` FOREIGN KEY (`MAPD`) REFERENCES `phieudat` (`MAPD`)
) ENGINE=InnoDB AUTO_INCREMENT=324 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_phieudat`
--

LOCK TABLES `ct_phieudat` WRITE;
/*!40000 ALTER TABLE `ct_phieudat` DISABLE KEYS */;
INSERT INTO `ct_phieudat` VALUES (121,'9dgsO5pE3U','007',1,13.49),(122,'9dgsO5pE3U','009',1,57),(123,'9dgsO5pE3U','011',1,12.495),(124,'X9K5vMjJSo','009',1,57),(125,'X9K5vMjJSo','015',2,16.6455),(126,'u8qpi6CEfi','007',4,13.495),(127,'u8qpi6CEfi','017',3,13.99),(128,'u8qpi6CEfi','018',3,236),(129,'u8qpi6CEfi','019',3,59.99),(130,'X2jJCuQm1T','020',1,63.99),(131,'X2jJCuQm1T','021',1,28.99),(132,'X2jJCuQm1T','022',1,35.99),(133,'X2jJCuQm1T','023',4,21.99),(134,'X2jJCuQm1T','025',3,50.99),(135,'X2jJCuQm1T','026',3,46.99),(136,'X2jJCuQm1T','027',2,16.99),(137,'zOKT9PWVzs','017',1,13.99),(138,'mADOojURxz','023',1,21.99),(139,'mADOojURxz','007',1,13.495),(140,'duWmipKsBV','007',1,13.495),(141,'dThCf7e2cO','021',3,28.99),(142,'dThCf7e2cO','022',1,35.99),(143,'23dHqEtK2d','007',2,13.495),(144,'23dHqEtK2d','023',1,21.99),(145,'23dHqEtK2d','017',1,13.99),(146,'WP69Nqq1jp','017',1,13.99),(147,'WP69Nqq1jp','007',2,13.495),(150,'5ae7cb41-7053-43bb-','001',1,23),(151,'5ae7cb41-7053-43bb-','008',1,30.99),(152,'5ae7cb41-7053-43bb-','007',1,13.495),(153,'5ae7cb41-7053-43bb-','002',1,186.15),(154,'f0d201c9-d7f1-4661-','001',1,23),(155,'f0d201c9-d7f1-4661-','008',1,30.99),(156,'f0d201c9-d7f1-4661-','007',1,13.495),(157,'f0d201c9-d7f1-4661-','002',1,186.15),(158,'e0899f6a-1a1f-430e-','008',1,30.99),(159,'e0899f6a-1a1f-430e-','001',2,46),(160,'e0899f6a-1a1f-430e-','007',1,13.495),(161,'e0899f6a-1a1f-430e-','002',1,186.15),(162,'c62ccd4b-13ae-4659-','008',1,30.99),(163,'c62ccd4b-13ae-4659-','001',7,161),(164,'c62ccd4b-13ae-4659-','007',1,13.495),(165,'c62ccd4b-13ae-4659-','002',1,186.15),(166,'c62ccd4b-13ae-4659-','003',1,175),(192,'d3ff01f0-0eaa-4567-','001',7,161),(193,'d3ff01f0-0eaa-4567-','008',1,30.99),(194,'d3ff01f0-0eaa-4567-','007',1,13.495),(195,'d3ff01f0-0eaa-4567-','002',1,186.15),(196,'d3ff01f0-0eaa-4567-','003',1,175),(197,'c923e99b-ff01-4f6e-','001',7,161),(198,'c923e99b-ff01-4f6e-','007',1,13.495),(199,'c923e99b-ff01-4f6e-','008',1,30.99),(200,'c923e99b-ff01-4f6e-','002',1,186.15),(201,'c923e99b-ff01-4f6e-','003',1,175),(202,'81a9cd7c-2869-434b-','001',3,69),(203,'81a9cd7c-2869-434b-','003',5,875),(204,'81a9cd7c-2869-434b-','005',2,253.3),(205,'\"74R78673WH626841V\"','003',5,875),(206,'\"74R78673WH626841V\"','001',3,69),(207,'\"74R78673WH626841V\"','005',2,253.3),(208,'\"91341459A2177464E\"','003',5,875),(209,'\"91341459A2177464E\"','005',2,253.3),(210,'\"91341459A2177464E\"','001',3,69),(211,'\"3NS46399M87040303\"','001',3,69),(212,'\"3NS46399M87040303\"','003',5,875),(213,'\"3NS46399M87040303\"','005',2,253.3),(214,'a604ff9a-bddb-475f-','001',3,69),(215,'a604ff9a-bddb-475f-','003',5,875),(216,'a604ff9a-bddb-475f-','005',2,253.3),(217,'7c30fdc8-bc2b-4625-','001',3,69),(218,'7c30fdc8-bc2b-4625-','003',5,875),(219,'7c30fdc8-bc2b-4625-','005',2,253.3),(220,'7c30fdc8-bc2b-4625-','033',2,36),(221,'132ea4eb-0b89-462b-','001',3,69),(222,'132ea4eb-0b89-462b-','003',5,875),(223,'132ea4eb-0b89-462b-','005',2,253.3),(224,'132ea4eb-0b89-462b-','033',2,36),(225,'f1f52db4-7262-4ae3-','001',3,69),(226,'f1f52db4-7262-4ae3-','003',5,875),(227,'f1f52db4-7262-4ae3-','005',2,253.3),(228,'f1f52db4-7262-4ae3-','033',2,36),(229,'6c0d4a06-4d09-40ed-','001',3,69),(230,'6c0d4a06-4d09-40ed-','003',5,875),(231,'6c0d4a06-4d09-40ed-','005',2,253.3),(232,'33b5f50f-8137-4cad-','001',3,69),(233,'33b5f50f-8137-4cad-','003',5,875),(234,'33b5f50f-8137-4cad-','005',2,253.3),(235,'33b5f50f-8137-4cad-','033',2,36),(236,'\"18C92168BV8172035\"','002',2,186.15),(237,'\"18C92168BV8172035\"','001',2,23),(238,'d08bb59a-91fc-450c-','001',2,23),(239,'d08bb59a-91fc-450c-','002',2,186.15),(240,'\"7BR80795P88132227\"','001',2,23),(241,'\"7BR80795P88132227\"','002',2,186.15),(242,'b129f9de-ca0b-495d-','003',2,175),(243,'\"8HS94468SX486092J\"','003',2,175),(244,'f99bde03-df75-4b3a-','003',2,175),(245,'51aa1761-043a-4bcc-','003',2,175),(246,'\"9SA55363D4886474L\"','003',3,175),(247,'a05d6797-47a4-4076-','002',2,186.15),(248,'\"1SR42480BD5412720\"','002',2,186.15),(249,'\"8UG01965GS562511Y\"','002',2,186.15),(250,'\"4Y161656PD935411K\"','002',2,186.15),(251,'185e4888-8d9c-40a5-','002',2,186.15),(252,'185e4888-8d9c-40a5-','033',3,18),(253,'ce6d894e-2ab0-4819-','002',2,186.15),(254,'ce6d894e-2ab0-4819-','033',3,18),(255,'b3d6880f-058c-461d-','002',2,186.15),(256,'b3d6880f-058c-461d-','033',3,18),(257,'87eece54-bdbd-4f14-','002',2,186.15),(258,'87eece54-bdbd-4f14-','033',3,18),(259,'b8dbaa02-3dfa-4e10-','002',2,186.15),(260,'b8dbaa02-3dfa-4e10-','033',3,18),(261,'3762e719-0f3d-4ec0-','002',2,186.15),(262,'3762e719-0f3d-4ec0-','033',3,18),(263,'1dbbc9a7-87fa-4260-','002',2,186.15),(264,'1dbbc9a7-87fa-4260-','033',3,18),(265,'46d6b486-9f53-4f7c-','002',2,186.15),(266,'46d6b486-9f53-4f7c-','033',3,18),(267,'7bcc5871-1c13-48bb-','002',2,186.15),(268,'7bcc5871-1c13-48bb-','033',3,18),(269,'bea03cbe-f9cb-4f98-','002',2,186.15),(270,'0e82330a-99d2-4158-','002',2,186.15),(271,'17ee4c20-fb92-4f64-','002',2,186.15),(272,'50c60893-e30b-4d7e-','002',2,186.15),(273,'69a52594-0393-4d54-','002',2,186.15),(274,'f3807abc-41c2-4b42-','002',2,186.15),(275,'f3807abc-41c2-4b42-','033',1,18),(276,'45b560d8-67a2-43a3-','002',2,186.15),(277,'62364e6c-194b-4ca8-','002',2,186.15),(278,'812a9b52-d9b9-4aa0-','002',2,186.15),(279,'d777fd4a-c6ec-4427-','002',2,186.15),(280,'d49627b9-3a07-4d64-','002',2,186.15),(281,'b470fa41-8752-4f7e-','002',2,186.15),(282,'0f602f81-6faf-4339-','002',1,186.15),(283,'a7a49c99-299b-4bb5-','002',1,186.15),(285,'0d722399-4ab6-4086-','002',1,186.15),(286,'0d722399-4ab6-4086-','033',1,18),(287,'ecebb1f9-1cf0-49c5-','002',1,186.15),(288,'ecebb1f9-1cf0-49c5-','033',1,18),(289,'3c71e1c5-116d-4a27-','002',1,186.15),(290,'3c71e1c5-116d-4a27-','033',1,18),(291,'1959d3dd-2b6e-47cc-','002',1,186.15),(292,'1959d3dd-2b6e-47cc-','033',1,18),(293,'abb87b99-4e26-49af-','002',1,186.15),(294,'abb87b99-4e26-49af-','033',1,18),(295,'7cb98e34-a082-49e0-','002',1,186.15),(296,'7cb98e34-a082-49e0-','033',1,18),(313,'e3124a25-cf1b-4092-','002',1,186.15),(314,'e3124a25-cf1b-4092-','033',1,18),(315,'\"2N630978YV471325S\"','001',2,18.4),(316,'\"2N630978YV471325S\"','002',1,186.15),(317,'53935db9-9dba-4e30-','003',1,180),(318,'53935db9-9dba-4e30-','002',1,219),(319,'\"44482559P8501020N\"','003',1,180),(320,'\"44482559P8501020N\"','002',1,219),(321,'c044c096-c012-4396-','003',1,180),(322,'c044c096-c012-4396-','002',1,219),(323,'c044c096-c012-4396-','032',2,2411);
/*!40000 ALTER TABLE `ct_phieudat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_phieunhap`
--

DROP TABLE IF EXISTS `ct_phieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_phieunhap` (
  `MAPN` char(10) NOT NULL,
  `MADONG` char(10) NOT NULL,
  `SOLUONG` int DEFAULT NULL,
  `GIA` float DEFAULT NULL,
  PRIMARY KEY (`MAPN`,`MADONG`),
  KEY `MADONG_idx` (`MADONG`),
  CONSTRAINT `ct_phieunhap_FK` FOREIGN KEY (`MAPN`) REFERENCES `phieunhap` (`MAPN`),
  CONSTRAINT `ct_phieunhap_FK_1` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_phieunhap`
--

LOCK TABLES `ct_phieunhap` WRITE;
/*!40000 ALTER TABLE `ct_phieunhap` DISABLE KEYS */;
/*!40000 ALTER TABLE `ct_phieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ct_phieutra`
--

DROP TABLE IF EXISTS `ct_phieutra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ct_phieutra` (
  `MAPT` char(10) NOT NULL,
  `IDCTPD` int NOT NULL,
  `SOLUONG` int DEFAULT NULL,
  PRIMARY KEY (`MAPT`,`IDCTPD`),
  KEY `ct_phieutra_FK_1` (`IDCTPD`),
  CONSTRAINT `ct_phieutra_FK` FOREIGN KEY (`MAPT`) REFERENCES `phieutra` (`MAPT`),
  CONSTRAINT `ct_phieutra_FK_1` FOREIGN KEY (`IDCTPD`) REFERENCES `ct_phieudat` (`IDCTPD`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ct_phieutra`
--

LOCK TABLES `ct_phieutra` WRITE;
/*!40000 ALTER TABLE `ct_phieutra` DISABLE KEYS */;
/*!40000 ALTER TABLE `ct_phieutra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cungcap`
--

DROP TABLE IF EXISTS `cungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cungcap` (
  `MANCC` char(10) NOT NULL,
  `MADONG` char(10) NOT NULL,
  `GIA` float DEFAULT NULL,
  PRIMARY KEY (`MANCC`,`MADONG`),
  KEY `cungcap_FK_1` (`MADONG`),
  CONSTRAINT `cungcap_FK` FOREIGN KEY (`MANCC`) REFERENCES `nhacungcap` (`MANCC`),
  CONSTRAINT `cungcap_FK_1` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cungcap`
--

LOCK TABLES `cungcap` WRITE;
/*!40000 ALTER TABLE `cungcap` DISABLE KEYS */;
INSERT INTO `cungcap` VALUES ('001','001',10),('001','002',100);
/*!40000 ALTER TABLE `cungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danhgia`
--

DROP TABLE IF EXISTS `danhgia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danhgia` (
  `MAKH` char(10) NOT NULL,
  `MADONG` char(10) NOT NULL,
  `NGAYDANHGIA` date NOT NULL,
  `NOIDUNG` varchar(2000) DEFAULT NULL,
  `RATING` int DEFAULT NULL,
  PRIMARY KEY (`MAKH`,`MADONG`,`NGAYDANHGIA`),
  KEY `danhgia_FK` (`MADONG`),
  CONSTRAINT `danhgia_FK` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`),
  CONSTRAINT `danhgia_FK_1` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danhgia`
--

LOCK TABLES `danhgia` WRITE;
/*!40000 ALTER TABLE `danhgia` DISABLE KEYS */;
INSERT INTO `danhgia` VALUES ('001','004','2022-09-02','Ngon',5),('002','001','2022-09-03','Tạm được!',4),('004','001','2021-08-16','Ngon',4),('004','002','2021-08-16','Ngon',4),('004','003','2021-08-16','Ngon',4),('004','004','2021-08-16','Ngon',4),('004','005','2021-08-16','Ngon',4),('004','006','2021-08-16','Ngon',4),('004','007','2021-08-16','Ngon',4),('004','008','2021-08-16','Ngon',4),('004','009','2021-08-16','Ngon',4),('004','010','2021-08-16','Ngon',4),('004','011','2021-08-16','Ngon',4),('004','012','2021-08-16','Ngon',4),('004','013','2021-08-16','Ngon',4),('004','014','2021-08-16','Ngon',4),('004','015','2021-08-16','Ngon',4),('004','016','2021-08-16','Ngon',4),('004','017','2021-08-16','Ngon',4),('004','018','2021-08-16','Ngon',4),('004','019','2021-08-16','Ngon',4),('004','020','2021-08-16','Ngon',4),('004','021','2021-08-16','Ngon',4),('004','022','2021-08-16','Ngon',4),('004','023','2021-08-16','Ngon',4),('004','024','2021-08-16','Ngon',4),('004','025','2021-08-16','Ngon',4),('004','026','2021-08-16','Ngon',4),('004','027','2021-08-16','Ngon',4),('004','028','2021-08-16','Ngon',4),('004','029','2021-08-16','Ngon',4),('004','030','2021-08-16','Ngon',4),('004','031','2021-08-16','Ngon',4),('004','032','2021-08-16','Ngon',4),('004','033','2021-08-16','Ngon',4);
/*!40000 ALTER TABLE `danhgia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dondathang`
--

DROP TABLE IF EXISTS `dondathang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dondathang` (
  `MADDH` char(10) NOT NULL,
  `NGAYDAT` date DEFAULT NULL,
  `MANV` char(10) NOT NULL,
  `MANCC` char(10) NOT NULL,
  PRIMARY KEY (`MADDH`),
  KEY `MANCC_idx` (`MANCC`),
  KEY `MANV_idx` (`MANV`),
  CONSTRAINT `MANCC` FOREIGN KEY (`MANCC`) REFERENCES `nhacungcap` (`MANCC`),
  CONSTRAINT `MANV` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dondathang`
--

LOCK TABLES `dondathang` WRITE;
/*!40000 ALTER TABLE `dondathang` DISABLE KEYS */;
INSERT INTO `dondathang` VALUES ('test','2022-08-20','001','001');
/*!40000 ALTER TABLE `dondathang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dongruou`
--

DROP TABLE IF EXISTS `dongruou`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dongruou` (
  `MADONG` char(10) NOT NULL,
  `TENDONG` varchar(100) DEFAULT NULL,
  `TRANGTHAI` varchar(45) DEFAULT NULL,
  `HINHANH` varchar(45) DEFAULT NULL,
  `MOTA` varchar(45) DEFAULT NULL,
  `CHITIET` varchar(500) DEFAULT NULL,
  `SOLUONGTON` int unsigned DEFAULT NULL,
  `MALOAI` char(10) DEFAULT NULL,
  `MATH` char(10) DEFAULT NULL,
  PRIMARY KEY (`MADONG`),
  KEY `MATH_idx` (`MATH`),
  KEY `MALOAI_idx` (`MALOAI`),
  CONSTRAINT `MALOAI` FOREIGN KEY (`MALOAI`) REFERENCES `loairuou` (`MALOAI`),
  CONSTRAINT `MATH` FOREIGN KEY (`MATH`) REFERENCES `thuonghieu` (`MATH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dongruou`
--

LOCK TABLES `dongruou` WRITE;
/*!40000 ALTER TABLE `dongruou` DISABLE KEYS */;
INSERT INTO `dongruou` VALUES ('001','Rémy Martin','Chưa có hàng','img/ruou1.png','700 ml / 41%','Rượu Remy Martin VSOP là dòng cognac cổ điển và nhà Cognac bán chạy nhất toàn cầu, đặc biệt là tại thị trường Mỹ. Chai Remy Martin VSOP 2014 vẫn kiểu chai cổ điển, đóng chai 70cl, 40%, nhãn chai có vài biến tấu trông hiện đại hơn. Tuy nhiên công nghệ chống giả cho những thị trường Vietnam thì chưa thấy hãng áp dụng riêng. Được nhập chính ngạch bởi Remy VietNam và chất lượng sản phẩm này ổn định là điểm cộng để giữ chân những khách hàng trung thành dòng cognac thanh tao và đằm mượt này.',30,'001','007'),('002','Hennessy V.S Cognac',NULL,'img/ruou2.png','700 ml / 40%',NULL,37,'006','005'),('003','Camus Cognac Borderies XO',NULL,'img/ruou3.png','700 ml / 40%',NULL,21,'006','003'),('004','Belasco Llma Cognac',NULL,'img/ruou4.png','700 ml / 40%',NULL,30,'006','008'),('005','Belasco Llma Cognac X',NULL,'img/ruou5.png','700 ml / 40%',NULL,32,'006','008'),('006','Vodka Ciroc 6 lít','','img/ruou-vodka-ciroc-6-lit.png','6000 ml / 41%','Rượu Vodka Cîroc được coi là loại vodka \"cực kỳ cao cấp\" của Pháp được làm từ những quả nhó ngon nhất của Pháp, được sản xuất tại nhà máy Distillerie de Chevanceaux, miền Nam nước Pháp,thay vì những nguyên liệu truyền thống như ngô, cao lương, lúa mạch, lúa mỳ hay khoai tây.',30,'008','004'),('007','Chivas Extra',NULL,'img/ruou7.jpg','700 ml / 40%',NULL,0,'001','006'),('008','Chivas Extra 13 năm Sherry Cask','','img/ruou8.jpg','700 ml / 41%','Rượu Chivas Extra 13 năm Oloroso Sherry Cask, con số 13 lấy cảm hửng từ 13 King Street Emporium ở Aberdeen của anh em nhà Chivas. Chivas 13 Oloroso Sherry Cask được ủ trong thùng Oloroso sherry cask, là loại thùng cho ra rượu whisky ngon nhất cũng là loại thùng ủ whisky mắc nhất.',150,'001','006'),('009','Chivas 21 năm MALTS BLEND','','img/ruou9.jpg','700 ml / 40%','',80,'001','006'),('010','DOMAINE DES GRAVES D’ARDONNEAU CUVEE PRESTIGE BLAYE','','img/ruou10.jpg','700 ml / 42%','',100,'002','009'),('011','CHATEAU LA GAMAYE','','img/ruou11.jpg','700 ml / 45%','',200,'002','009'),('012','HEINRICH ZWEIGELT','','img/ruou12.jpg','750 ml / 13%','',150,'002','009'),('013','FLEUR DU CAP SHIRAZ','','img/ruou13.jpg','750 ml / 14%','',200,'002','009'),('014','CHATEAU HAUT SELVE GRAVES WHITE','','img/ruou14.jpg','750 ml / 13%','',100,'003','009'),('015','CHATEAU DE CHANTEGRIVE GRAVES WHITE','','img/ruou15.jpg','750 ml / 13%','',120,'003','009'),('016','BARON PHILIPPE DE ROTHSCHILD BORDEAUX WHITE','','img/ruou16.jpg','750 ml / 13%','',80,'003','009'),('017','MALIBU','','img/ruou17.jpg','700 ml / 21%','',200,'004','010'),('018','APPLETON ESTATE 30 NĂM',NULL,'img/ruou18.jpg','700 ml / 43%',NULL,100,'004','011'),('019','APPLETON ESTATE 12 NĂM',NULL,'img/ruou19.jpg','700 ml / 43%',NULL,120,'004','011'),('020','BACARDI 10 NĂM - GRAN RESERVA DIEZ',NULL,'img/ruou20.jpg','700 ml / 40%',NULL,130,'005','002'),('021','BACARDI CARTA NEGRA BLACK',NULL,'img/ruou21.jpg','700 ml / 40%',NULL,20,'005','002'),('022','BACARDI ANEJO CUATRO 4 NĂM',NULL,'img/ruou22.jpg','700 ml / 40%',NULL,60,'005','002'),('023','Vodka Smirnoff Red','','img/VodkaSmirnoffRed.jpg','700ml / 45%',NULL,30,'008','013'),('024','Chivas 18 năm','Chưa có hàng','img/chivas-18.jpg','700ml / 40%','Rượu Chivas 18 năm là dòng Whisky phối trộn xuất sắc và nổi tiếng nhất hiện nay.Trong từng giọt rượu được ủ ít nhất 18 năm trong thùng gỗ sồi sẽ cho ra nhiều tầng lớp hương vị khác nhau khi thưởng thức.',30,'001','006'),('025','Vodka Ciroc','Chưa có hàng','img/ruou-vodka-ciroc.jpg','750ml /40%',NULL,30,'008','004'),('026','Vodka Ciroc Peach','Chưa có hàng','img/ruou-vodka-ciroc-peach.jpg','750ml / 37,5%',NULL,30,'008','004'),('027','Vodka Absolut Kurant','Chưa có hàng','img/ruou-vodka-absolut-kurant.jpg','750ml /40%',NULL,30,'008','014'),('028','Royal Salute 21 Beach POLO Edition','Chưa có hàng','img/ruou6.jpg','700ml / 40%','Royal Salute 21 năm Beach Polo Edition, trong seri Polo Edition phát hành năm 2018.',30,'001','006'),('029','ARMAGNAC LARRESSINGLE VSOP','Chưa có hàng','img/Armagnac-Larressingle-VSOP.jpg','700ml / 40%',NULL,30,'011','015'),('030','CHATEAU LAUBADE BAS ARMAGNAC 1986','Chưa có hàng','img/Chateau-Laubade-Bas-Armagnac-1986.jpg','700ml / 40%',NULL,30,'011','016'),('031','CHATEAU LAUBADE BAS ARMAGNAC 1962','Chưa có hàng','img/Chateau-Laubade-Bas-Armagnac-1962.jpg','500 ml / 40%',NULL,39,'011','016'),('032','CHATEAU LAUBADE BAS ARMAGNAC 1950','Chưa có hàng','img/Chateau-Laubade-Bas-Armagnac-1950.jpg','500 ml / 40%',NULL,28,'011','016'),('033','Vodka Absolut Raspberri',NULL,'img/ruou-vodka-absolut-raspberri-dau.png','750 ml / 40%',NULL,0,'008','014'),('050','tien','1','img/chivas-18.jpg','1','1',10,'001','001'),('051','asd','asd','img/banner6.jpg','asd','asd',11,'001','001'),('052','test1','','img/Chateau-Laubade-Bas-Armagnac-1962.jpg','asd','asd',10,'002','001'),('053','test2','asd','img/ruou3.png','asd','asd',9,'001','001');
/*!40000 ALTER TABLE `dongruou` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `MAHD` char(20) NOT NULL,
  `NGAY` date DEFAULT NULL,
  `THANHTIEN` float DEFAULT NULL,
  `MASOTHUE` varchar(45) DEFAULT NULL,
  `MANV` char(10) DEFAULT NULL,
  `MAPD` char(20) NOT NULL,
  PRIMARY KEY (`MAHD`),
  UNIQUE KEY `hoadon_MAPD_IDX` (`MAPD`) USING BTREE,
  KEY `hoadon_FK_1` (`MANV`),
  CONSTRAINT `hoadon_FK` FOREIGN KEY (`MAPD`) REFERENCES `phieudat` (`MAPD`),
  CONSTRAINT `hoadon_FK_1` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES ('012742e0-d715-4cfe-','2022-09-06',5221,'0839270058','001','c044c096-c012-4396-'),('03350b8b-6cbc-4208-','2022-09-06',13.99,'005584844','001','zOKT9PWVzs'),('096321b8-9948-4fa7-','2022-09-06',222.95,'4132531973','001','\"2N630978YV471325S\"'),('0c508675-7665-43d6-','2022-09-06',204.15,'5625332022','001','3c71e1c5-116d-4a27-'),('11a26e81-5e74-45ae-','2022-09-06',5088.6,'1722883262','001','\"74R78673WH626841V\"'),('19d3cfbf-e931-493c-','2022-09-06',1532.64,'491197032','001','c923e99b-ff01-4f6e-'),('1fd4e456-d5f1-4303-','2022-09-06',5088.6,'8483278694','001','\"3NS46399M87040303\"'),('233a0a27-0bc8-484b-','2022-09-06',372.3,'074037136','001','\"4Y161656PD935411K\"'),('37c94f7f-8535-4e44-','2022-09-06',418.3,'541027643','001','\"18C92168BV8172035\"'),('48948408-5760-4a9e-','2022-09-06',399,'2812146595','001','\"44482559P8501020N\"'),('48c99580-bc2a-4c35-','2022-09-06',13.495,'7965785304','001','duWmipKsBV'),('4e3c3502-8f3c-4bfa-','2022-09-06',204.15,'8587078354','001','e3124a25-cf1b-4092-'),('5103cfd1-fd23-47eb-','2022-09-06',62.97,'8897148013','001','23dHqEtK2d'),('553cddd1-7a70-43ed-','2022-09-06',372.3,'7603633328','001','\"1SR42480BD5412720\"'),('631f5a9d-d7cf-424f-','2022-09-06',1532.64,'047989205','001','d3ff01f0-0eaa-4567-'),('64d58067-c577-4481-','2022-09-06',399,'539846669','001','53935db9-9dba-4e30-'),('6bbbbeb1-5f44-4b83-','2022-09-06',426.3,'4156587784','001','7bcc5871-1c13-48bb-'),('6dde503d-970e-47ac-','2022-09-06',253.635,'1887328555','001','f0d201c9-d7f1-4661-'),('7aa095a9-41c8-4a8c-','2022-09-06',322.635,'4426436457','001','e0899f6a-1a1f-430e-'),('8f4067fc-0a2f-4e7b-','2022-09-06',122.96,'3786025799','001','dThCf7e2cO'),('9b19eca6-b3a5-4e5c-','2022-09-06',372.3,'126887331','001','\"8UG01965GS562511Y\"'),('b12c22cb-c458-49ff-','2022-09-06',35.485,'071406842','001','mADOojURxz'),('c5e1d7a4-2518-4c27-','2022-09-06',90.291,'8554983107','001','X9K5vMjJSo'),('c7373abb-17a3-4714-','2022-09-06',426.3,'4575288988','001','b3d6880f-058c-461d-'),('c9c137bf-9e26-4968-','2022-09-06',82.985,'6879374142','001','9dgsO5pE3U'),('da50ef54-9a62-404b-','2022-09-06',372.3,'2911639428','001','812a9b52-d9b9-4aa0-'),('dc0e7ab4-456f-4942-','2022-09-06',390.3,'2250323793','001','f3807abc-41c2-4b42-'),('dc5c8672-1ba8-4fda-','2022-09-06',426.3,'8147267508','001','ce6d894e-2ab0-4819-'),('e5b53691-0743-4c0f-','2022-09-06',544.85,'8887578603','001','X2jJCuQm1T'),('e74d5925-1291-4b05-','2022-09-06',253.635,'315691735','001','5ae7cb41-7053-43bb-'),('ec19b925-b00f-4318-','2022-09-06',1532.64,'6617518016','001','c62ccd4b-13ae-4659-'),('f1f1b0bd-e2f8-42dd-','2022-09-06',204.15,'0229611078','001','0d722399-4ab6-4086-'),('f3da217e-7aaf-418c-','2022-09-06',983.92,'7160908877','001','u8qpi6CEfi');
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `MAKH` char(10) NOT NULL,
  `HO` varchar(45) DEFAULT NULL,
  `TEN` varchar(15) DEFAULT NULL,
  `GIOITINH` varchar(5) DEFAULT NULL,
  `NGAYSINH` date DEFAULT NULL,
  `DIACHI` varchar(200) DEFAULT NULL,
  `SDT` varchar(20) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `USERNAME` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `MANQ` char(10) DEFAULT NULL,
  PRIMARY KEY (`MAKH`),
  KEY `khachhang_FK` (`MANQ`),
  CONSTRAINT `khachhang_FK` FOREIGN KEY (`MANQ`) REFERENCES `nhomquyen` (`MANQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES ('001','Trần Vũ Hoàng','Tien1','Nam','1996-11-29','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh2@gmail.com','hoangtam2','$2b$10$9GHMhSlMAbRxRHLVG3hRTefJ/pslsnzSB3bgh8NQ7hrQ3n7/k80aC','1'),('002','Trần Vũ Hoàng','ABC','Nam','1996-11-06','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh96@gmail.com','hoangtam','$2b$10$snLS0Cr4hs6qGR07khDFr.zS8Azn1xBisIuFRnWYfPFsadfIhjJxK','1'),('004','Trần Vũ Hoàng','string','Nam','1996-11-29','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh96@gmail.com','hoangtam1','$2b$10$zGxCjAyWoVrwOb/RPssaJul66sVWoWUk983.A1eklmbms97D8uQme','1'),('006','Trần Vũ Hoàng','D','Nam','1996-11-30','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh4@gmail.com','hoangtam4','$2b$10$dSPPxX4hIBXyWISAnK.DdeNPihn5NkDmsuodcyEwai5NzwVX.5Aki','1'),('007','Trần Vũ Hoàng','E','Nam','1996-11-30','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh5@gmail.com','hoangtam5','$2b$10$TwB7JdYYXTSNa2p74OjdFuVxQ9g6FTenvv4Ma3GPkUBUO4ZSJAQSy','1'),('008','Trần Văn','A','Nam','1996-11-30','63/5 đường số 13','0963548171','billybu96969@gmail.com','hoangtam7','$2b$10$M0OkjouLpPGVXaIDffwca.ceAUBI3NOkk3vRwZ1hxklqI8HbT.QsW','1');
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khuyenmai`
--

DROP TABLE IF EXISTS `khuyenmai`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khuyenmai` (
  `MAKM` char(10) NOT NULL,
  `TENKM` varchar(45) DEFAULT NULL,
  `NGAYBATDAU` date DEFAULT NULL,
  `NGAYKETTHUC` date DEFAULT NULL,
  `LIDO` varchar(200) DEFAULT NULL,
  `MANV` char(10) DEFAULT NULL,
  PRIMARY KEY (`MAKM`),
  KEY `khuyenmai_FK` (`MANV`),
  CONSTRAINT `khuyenmai_FK` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khuyenmai`
--

LOCK TABLES `khuyenmai` WRITE;
/*!40000 ALTER TABLE `khuyenmai` DISABLE KEYS */;
INSERT INTO `khuyenmai` VALUES ('001','Sale up Summer','2021-07-29','2021-09-01','Covid khuyến mãi','001'),('002','Sale up Winter','2021-09-02','2021-12-23','Khuyến mãi cho Noel','001'),('003','Sale up bonus 50%','2021-12-24','2022-09-30','Giảm giá siêu khủng','001'),('004','Sale New Year','2022-10-01','2022-12-30','Khuyến mãi đầu năm','001'),('005','1','2023-01-01','2023-01-31','1','001');
/*!40000 ALTER TABLE `khuyenmai` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loairuou`
--

DROP TABLE IF EXISTS `loairuou`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loairuou` (
  `MALOAI` char(10) NOT NULL,
  `TENLOAI` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MALOAI`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loairuou`
--

LOCK TABLES `loairuou` WRITE;
/*!40000 ALTER TABLE `loairuou` DISABLE KEYS */;
INSERT INTO `loairuou` VALUES ('001','Whisky'),('002','Vang đỏ'),('003','Vang trắng'),('004','Rum'),('005','Tequilla'),('006','Cognag'),('007','Champagne'),('008','Vodka'),('009','Grappa'),('010','Scotch'),('011','Armagnac');
/*!40000 ALTER TABLE `loairuou` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacungcap`
--

DROP TABLE IF EXISTS `nhacungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacungcap` (
  `MANCC` char(10) NOT NULL,
  `TENNCC` varchar(45) DEFAULT NULL,
  `DIACHI` varchar(200) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `SDT` char(20) DEFAULT NULL,
  PRIMARY KEY (`MANCC`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='			\n';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacungcap`
--

LOCK TABLES `nhacungcap` WRITE;
/*!40000 ALTER TABLE `nhacungcap` DISABLE KEYS */;
INSERT INTO `nhacungcap` VALUES ('001','Bia Sài Gòn','Quận  7, thành phố HCM','BiaSG@gmail.com','0222897665'),('002','Chivas Sài Gòn','123 man thiện, quận 9','chivassg@gmail.com','0123456789'),('003','Vodka Sài Gònn','99 man thiện, quận 9','vodkasg@gmail.com','0111111111');
/*!40000 ALTER TABLE `nhacungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhanvien`
--

DROP TABLE IF EXISTS `nhanvien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhanvien` (
  `MANV` char(10) NOT NULL,
  `HO` varchar(45) DEFAULT NULL,
  `TEN` varchar(15) DEFAULT NULL,
  `GIOITINH` varchar(5) DEFAULT NULL,
  `NGAYSINH` datetime DEFAULT NULL,
  `DIACHI` varchar(200) DEFAULT NULL,
  `SDT` varchar(10) DEFAULT NULL,
  `EMAIL` varchar(45) DEFAULT NULL,
  `USERNAME` varchar(20) DEFAULT NULL,
  `PASSWORD` varchar(200) DEFAULT NULL,
  `MANQ` char(10) DEFAULT NULL,
  PRIMARY KEY (`MANV`),
  KEY `nhanvien_FK` (`MANQ`),
  CONSTRAINT `nhanvien_FK` FOREIGN KEY (`MANQ`) REFERENCES `nhomquyen` (`MANQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='		';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhanvien`
--

LOCK TABLES `nhanvien` WRITE;
/*!40000 ALTER TABLE `nhanvien` DISABLE KEYS */;
INSERT INTO `nhanvien` VALUES ('001','Trần Vũ Hoàng','Tâm','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tamtvh@gmail.com','tamnv1','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','2'),('002','Trần Vũ Hoàng','A','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam1@gmail.com','tamnv2','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','2'),('003','Trần Vũ Hoàng','B','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam2@gmail.com','tamgh1','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','3'),('004','Trần Vũ Hoàng','C','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam3@gmail.com','tamgh2','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','3'),('005','Trần Vũ Hoàng','D','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam4@gmail.com','tamgh3','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','3'),('006','Trần Vũ Hoàng','E','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam5@gmail.com','tamgh4','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','3'),('007','Trần Vũ Hoàng','F','Nam','1996-11-30 00:00:00','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','tam6@gmail.com','tamnv3','$2b$10$5pxFvINh8rCLu03kzywYPuuO3EqiTP/0vnp3QhZsMOEy/vBVyPYs2','2');
/*!40000 ALTER TABLE `nhanvien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhomquyen`
--

DROP TABLE IF EXISTS `nhomquyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhomquyen` (
  `MANQ` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `TENNQ` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`MANQ`),
  UNIQUE KEY `nhomquyen_UN` (`TENNQ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhomquyen`
--

LOCK TABLES `nhomquyen` WRITE;
/*!40000 ALTER TABLE `nhomquyen` DISABLE KEYS */;
INSERT INTO `nhomquyen` VALUES ('2','ADMIN'),('1','KHACHHANG'),('3','NVGH');
/*!40000 ALTER TABLE `nhomquyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieudat`
--

DROP TABLE IF EXISTS `phieudat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieudat` (
  `MAPD` char(20) NOT NULL,
  `NGAYDAT` date NOT NULL,
  `HONN` varchar(45) DEFAULT NULL,
  `TENNN` varchar(15) DEFAULT NULL,
  `DIACHINN` varchar(200) DEFAULT NULL,
  `SDTNN` char(20) DEFAULT NULL,
  `GHICHU` varchar(255) DEFAULT NULL,
  `TRANGTHAI` varchar(45) DEFAULT NULL,
  `MANVD` char(10) DEFAULT NULL,
  `MANVGH` char(10) DEFAULT NULL,
  `MAKH` char(10) DEFAULT NULL,
  PRIMARY KEY (`MAPD`),
  KEY `phieudat_FK` (`MAKH`),
  KEY `phieudat_FK_1` (`MANVD`),
  CONSTRAINT `phieudat_FK` FOREIGN KEY (`MAKH`) REFERENCES `khachhang` (`MAKH`),
  CONSTRAINT `phieudat_FK_1` FOREIGN KEY (`MANVD`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieudat`
--

LOCK TABLES `phieudat` WRITE;
/*!40000 ALTER TABLE `phieudat` DISABLE KEYS */;
INSERT INTO `phieudat` VALUES ('\"18C92168BV8172035\"','2022-01-21','Tran Vu','hoang','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','ngay 22/8 luc 13h','Đã giao','001','006','002'),('\"1SR42480BD5412720\"','2022-01-27','Trần Văn','A','63/5 đường số 13','0963548171','123','Đã giao','001','004','008'),('\"2N630978YV471325S\"','2022-01-03','Trần Vũ Hoàng','ABC1','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','123','Đã giao','001','005','002'),('\"3NS46399M87040303\"','2022-04-20','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','jjj','Đã giao','001','003','002'),('\"44482559P8501020N\"','2022-02-06','Hồ Ngọc','Hà','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','003','002'),('\"4Y161656PD935411K\"','2022-02-27','Nguyễn Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','005','008'),('\"74R78673WH626841V\"','2022-04-20','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','004','002'),('\"7BR80795P88132227\"','2022-08-22','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','002'),('\"8HS94468SX486092J\"','2022-08-24','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','002'),('\"8UG01965GS562511Y\"','2022-03-27','Trần Văn','A','63/5 đường số 13','0963548171','123','Đã giao','001','006','008'),('\"91341459A2177464E\"','2022-08-20','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','jjj','Chưa duyệt',NULL,'','002'),('\"9SA55363D4886474L\"','2022-08-26','Trần Vũ Hoàng','paypal','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','paypal','Chưa duyệt',NULL,'','002'),('0d722399-4ab6-4086-','2022-03-27','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','004','008'),('0e82330a-99d2-4158-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('0f602f81-6faf-4339-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('132ea4eb-0b89-462b-','2022-08-21','Trần Vũ Hoàng','D','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('17ee4c20-fb92-4f64-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('185e4888-8d9c-40a5-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('1959d3dd-2b6e-47cc-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('1dbbc9a7-87fa-4260-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('23dHqEtK2d','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã phân công','001','003','004'),('33b5f50f-8137-4cad-','2022-08-21','Trần Vũ Hoàng','D','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('3762e719-0f3d-4ec0-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('3c71e1c5-116d-4a27-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','006','008'),('45b560d8-67a2-43a3-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('46d6b486-9f53-4f7c-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('50c60893-e30b-4d7e-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('51aa1761-043a-4bcc-','2022-08-24','Nguyễn Văn','A','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','ffffff','Chưa duyệt',NULL,'','002'),('53935db9-9dba-4e30-','2022-04-06','Hồ Quang','Hiếu','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','...','Đã giao','001','004','002'),('5ae7cb41-7053-43bb-','2022-04-14','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','006','002'),('62364e6c-194b-4ca8-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('69a52594-0393-4d54-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('6c0d4a06-4d09-40ed-','2022-08-21','Trần Vũ Hoàng','D','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('7908cba5-73c8-40bf-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('7bcc5871-1c13-48bb-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Đã giao','001','005','008'),('7c30fdc8-bc2b-4625-','2022-08-21','Trần Vũ Hoàng','D','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('7cb98e34-a082-49e0-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('812a9b52-d9b9-4aa0-','2022-05-27','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','003','008'),('81a9cd7c-2869-434b-','2022-08-20','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','123123','Chưa duyệt',NULL,'','002'),('87eece54-bdbd-4f14-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('9dgsO5pE3U','2022-05-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','004','004'),('a05d6797-47a4-4076-','2022-08-26','Trần Vũ Hoàng','E','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','1','Chưa duyệt',NULL,'','007'),('a604ff9a-bddb-475f-','2022-08-21','Trần Vũ Hoàng','T','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('a7a49c99-299b-4bb5-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('abb87b99-4e26-49af-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('b129f9de-ca0b-495d-','2022-08-23','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','aaaddd','Chưa duyệt',NULL,'','002'),('b3d6880f-058c-461d-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Đã giao','001','005','008'),('b470fa41-8752-4f7e-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('b8dbaa02-3dfa-4e10-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('bea03cbe-f9cb-4f98-','2022-08-27','Trần Văn','Transac','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('c044c096-c012-4396-','2022-08-06','Văn Mai','Hương','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','003','002'),('c62ccd4b-13ae-4659-','2022-06-18','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','12345','Đã giao','001','003','002'),('c923e99b-ff01-4f6e-','2022-06-18','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','004','002'),('ce6d894e-2ab0-4819-','2022-06-27','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','005','008'),('d08bb59a-91fc-450c-','2022-08-21','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','002'),('d3ff01f0-0eaa-4567-','2022-07-18','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','abcde','Đã giao','001','005','002'),('d49627b9-3a07-4d64-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('d777fd4a-c6ec-4427-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('dThCf7e2cO','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','003','004'),('duWmipKsBV','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã phân công','001','006','004'),('e0899f6a-1a1f-430e-','2022-08-14','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','testttt','Đã phân công','001','005','002'),('e3124a25-cf1b-4092-','2022-07-28','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','006','008'),('ecebb1f9-1cf0-49c5-','2022-08-27','Trần Văn','A','63/5 đường số 13','0963548171','','Chưa duyệt',NULL,'','008'),('f0d201c9-d7f1-4661-','2022-07-14','Trần Vũ Hoàng','A','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','123','Đã giao','001','003','002'),('f1f52db4-7262-4ae3-','2022-08-21','Trần Vũ Hoàng','D','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,'','006'),('f3807abc-41c2-4b42-','2022-06-27','Trần Văn','A','63/5 đường số 13','0963548171','','Đã giao','001','003','008'),('f99bde03-df75-4b3a-','2022-08-24','Nguyễn Văn','A','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','ffffff','Chưa duyệt',NULL,'','002'),('mADOojURxz','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã phân công','001','004','004'),('u8qpi6CEfi','2022-02-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','005','006'),('WP69Nqq1jp','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Chưa duyệt',NULL,NULL,'004'),('X2jJCuQm1T','2022-02-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã giao','001','006','006'),('X9K5vMjJSo','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã phân công','001','005','006'),('zOKT9PWVzs','2022-08-10','Trần Vũ Hoàng','Tâm','63/5 đường 13, Bình Trưng Tây, Quận 2, Thành Phố HCM','0942987724','','Đã phân công','001','004','004');
/*!40000 ALTER TABLE `phieudat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieunhap`
--

DROP TABLE IF EXISTS `phieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieunhap` (
  `MAPN` char(10) NOT NULL,
  `NGAYLAP` date DEFAULT NULL,
  `MANV` char(10) NOT NULL,
  `MADDH` char(10) NOT NULL,
  PRIMARY KEY (`MAPN`),
  UNIQUE KEY `MADDH_idx` (`MADDH`) USING BTREE,
  KEY `MANV_idx` (`MANV`),
  CONSTRAINT `phieunhap_FK` FOREIGN KEY (`MADDH`) REFERENCES `dondathang` (`MADDH`),
  CONSTRAINT `phieunhap_FK_1` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieunhap`
--

LOCK TABLES `phieunhap` WRITE;
/*!40000 ALTER TABLE `phieunhap` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieutra`
--

DROP TABLE IF EXISTS `phieutra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieutra` (
  `MAPT` char(10) NOT NULL,
  `NGAYTRA` date DEFAULT NULL,
  `MAHD` char(10) NOT NULL,
  `MANV` char(10) NOT NULL,
  PRIMARY KEY (`MAPT`),
  KEY `phieutra_FK` (`MAHD`),
  KEY `phieutra_FK_1` (`MANV`),
  CONSTRAINT `phieutra_FK` FOREIGN KEY (`MAHD`) REFERENCES `hoadon` (`MAHD`),
  CONSTRAINT `phieutra_FK_1` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieutra`
--

LOCK TABLES `phieutra` WRITE;
/*!40000 ALTER TABLE `phieutra` DISABLE KEYS */;
/*!40000 ALTER TABLE `phieutra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thaydoigia`
--

DROP TABLE IF EXISTS `thaydoigia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thaydoigia` (
  `MADONG` char(10) NOT NULL,
  `NGAYTHAYDOI` date NOT NULL,
  `GIA` float DEFAULT NULL,
  `MANV` char(10) NOT NULL,
  PRIMARY KEY (`MADONG`,`NGAYTHAYDOI`,`MANV`),
  KEY `thaydoigia_FK_1` (`MANV`),
  CONSTRAINT `thaydoigia_FK` FOREIGN KEY (`MADONG`) REFERENCES `dongruou` (`MADONG`),
  CONSTRAINT `thaydoigia_FK_1` FOREIGN KEY (`MANV`) REFERENCES `nhanvien` (`MANV`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thaydoigia`
--

LOCK TABLES `thaydoigia` WRITE;
/*!40000 ALTER TABLE `thaydoigia` DISABLE KEYS */;
INSERT INTO `thaydoigia` VALUES ('001','2021-09-20',23,'001'),('001','2022-09-06',25,'001'),('002','2021-08-16',219,'002'),('003','2021-08-19',175,'001'),('003','2022-09-01',200,'001'),('004','2021-08-17',241,'001'),('005','2021-08-17',149,'001'),('006','2021-08-17',400,'001'),('007','2021-09-17',26.99,'001'),('008','2021-08-17',30.99,'001'),('009','2021-08-17',115,'001'),('010','2021-08-17',29.99,'001'),('011','2021-08-17',24.99,'001'),('012','2021-08-17',38.99,'001'),('013','2021-08-17',26.99,'001'),('014','2021-08-17',46.99,'001'),('015','2021-08-17',36.99,'001'),('016','2021-08-17',18.99,'001'),('017','2021-08-17',13.99,'001'),('018','2021-08-17',236,'001'),('019','2021-08-17',59.99,'001'),('020','2021-08-17',63.99,'001'),('021','2021-08-17',28.99,'001'),('022','2021-08-17',35.99,'001'),('023','2021-08-17',21.99,'001'),('024','2021-08-17',50.99,'001'),('025','2021-08-17',50.99,'001'),('026','2021-08-17',46.99,'001'),('027','2021-08-17',16.99,'001'),('028','2021-08-17',153,'001'),('029','2021-08-17',83.99,'001'),('030','2021-08-17',274,'001'),('031','2021-08-17',876,'001'),('032','2021-08-17',2411,'001'),('033','2021-08-17',18,'001'),('050','2021-08-17',20,'001'),('051','2022-08-30',11,'007'),('052','2022-08-30',100,'007'),('053','2022-08-30',19,'007');
/*!40000 ALTER TABLE `thaydoigia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thuonghieu`
--

DROP TABLE IF EXISTS `thuonghieu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thuonghieu` (
  `MATH` char(10) NOT NULL,
  `TENTH` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`MATH`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='	';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thuonghieu`
--

LOCK TABLES `thuonghieu` WRITE;
/*!40000 ALTER TABLE `thuonghieu` DISABLE KEYS */;
INSERT INTO `thuonghieu` VALUES ('001','Raynal'),('002','Bacardi'),('003','Camus'),('004','Ciroc'),('005','Hennessy'),('006','Chivas'),('007','Resmy Martin'),('008','Belasco '),('009','Vang Pháp'),('010','Malibu'),('011','Appleton'),('012','Gò Công 1'),('013','Smirnoff'),('014','Absolut'),('015','LARRESSINGLE'),('016','LAUBADE');
/*!40000 ALTER TABLE `thuonghieu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'banruou'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-07  0:04:31
