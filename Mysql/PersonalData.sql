/*
SQLyog Community v12.2.4 (64 bit)
MySQL - 5.7.14-log : Database - webdata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`webdata` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `webdata`;

/*Table structure for table `datasave` */

DROP TABLE IF EXISTS `datasave`;

CREATE TABLE `datasave` (
  `id` bigint(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  `sex` varchar(10) NOT NULL,
  `phone` varchar(11) NOT NULL,
  `univer` varchar(20) NOT NULL,
  `beforname` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=196 DEFAULT CHARSET=utf8;

/*Data for the table `datasave` */

insert  into `datasave`(`id`,`name`,`sex`,`phone`,`univer`,`beforname`) values 
(1,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(2,'sutasinee rotoao','0','0999999999','3','Miss.'),
(3,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(4,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(5,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(6,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(7,'sutasinee rotoao','0','0999999999','3','Miss.'),
(8,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(9,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(10,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(11,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(12,'sutasinee rotoao','0','0999999999','3','Miss.'),
(13,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(14,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(15,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(16,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(17,'sutasinee rotoao','0','0999999999','3','Miss.'),
(18,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(19,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(20,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(21,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(22,'sutasinee rotoao','0','0999999999','3','Miss.'),
(23,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(24,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(25,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(26,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(27,'sutasinee rotoao','0','0999999999','3','Miss.'),
(28,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(29,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(30,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(31,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(32,'sutasinee rotoao','0','0999999999','3','Miss.'),
(33,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(34,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(35,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(36,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(37,'sutasinee rotoao','0','0999999999','3','Miss.'),
(38,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(39,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(40,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(41,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(42,'sutasinee rotoao','0','0999999999','3','Miss.'),
(43,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(44,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(45,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(46,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(47,'sutasinee rotoao','0','0999999999','3','Miss.'),
(48,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(49,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(50,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(51,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(52,'sutasinee rotoao','0','0999999999','3','Miss.'),
(53,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(54,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(55,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(56,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(57,'sutasinee rotoao','0','0999999999','3','Miss.'),
(58,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(59,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(60,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(61,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(62,'sutasinee rotoao','0','0999999999','3','Miss.'),
(63,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(64,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(65,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(66,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(67,'sutasinee rotoao','0','0999999999','3','Miss.'),
(68,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(69,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(70,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(71,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(72,'sutasinee rotoao','0','0999999999','3','Miss.'),
(73,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(74,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(75,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(76,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(77,'sutasinee rotoao','0','0999999999','3','Miss.'),
(78,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(79,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(80,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(81,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(82,'sutasinee rotoao','0','0999999999','3','Miss.'),
(83,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(84,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(85,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(86,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(87,'sutasinee rotoao','0','0999999999','3','Miss.'),
(88,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(89,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(90,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(91,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(92,'sutasinee rotoao','0','0999999999','3','Miss.'),
(93,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(94,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(95,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(96,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(97,'sutasinee rotoao','0','0999999999','3','Miss.'),
(98,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(99,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(100,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(101,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(102,'sutasinee rotoao','0','0999999999','3','Miss.'),
(103,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(104,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(105,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(106,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(107,'sutasinee rotoao','0','0999999999','3','Miss.'),
(108,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(109,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(110,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(111,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(112,'sutasinee rotoao','0','0999999999','3','Miss.'),
(113,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(114,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(115,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(116,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(117,'sutasinee rotoao','0','0999999999','3','Miss.'),
(118,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(119,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(120,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(121,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(122,'sutasinee rotoao','0','0999999999','3','Miss.'),
(123,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(124,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(125,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(126,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(127,'sutasinee rotoao','0','0999999999','3','Miss.'),
(128,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(129,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(130,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(131,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(132,'sutasinee rotoao','0','0999999999','3','Miss.'),
(133,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(134,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(135,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(136,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(137,'sutasinee rotoao','0','0999999999','3','Miss.'),
(138,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(139,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(140,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(141,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(142,'sutasinee rotoao','0','0999999999','3','Miss.'),
(143,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(144,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(145,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(146,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(147,'sutasinee rotoao','0','0999999999','3','Miss.'),
(148,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(149,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(150,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(151,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(152,'sutasinee rotoao','0','0999999999','3','Miss.'),
(153,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(154,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(155,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(156,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(157,'sutasinee rotoao','0','0999999999','3','Miss.'),
(158,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(159,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(160,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(161,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(162,'sutasinee rotoao','0','0999999999','3','Miss.'),
(163,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(164,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(165,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(166,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(167,'sutasinee rotoao','0','0999999999','3','Miss.'),
(168,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(169,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(170,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(171,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(172,'sutasinee rotoao','0','0999999999','3','Miss.'),
(173,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(174,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(175,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(176,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(177,'sutasinee rotoao','0','0999999999','3','Miss.'),
(178,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(179,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(180,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(181,'teerapat suksanghuan','1','0111111111','1','Mr.'),
(182,'sutasinee rotoao','0','0999999999','3','Miss.'),
(183,'sumatus sumsumtoday','1','0594959345','2','Mr.'),
(184,'สมหมาย ใจดี','1','0111111111','1','นาย'),
(185,'เดือนเพ็ญ เย็นใจ','0','0444444444','1','นางสาว'),
(186,'llllllllllppp lllllllllllll','1','0232323232','1','Mr.'),
(187,'pppllllllppp lllllllllllll','1','0232323232','1','Mr.'),
(189,'ยมบาล ชาญชัย','1','0984233845','3','นาย'),
(190,'สมหัว มึนเมา','1','0984233845','1','นาย'),
(191,'ยานยน คนไทย','1','0984233845','2','นาย'),
(192,'รู้รัก สามัคคี','1','0984233845','1','นาย'),
(193,'tres dsfdsf','1','0943245453','1','Mr.');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
