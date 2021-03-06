/*
SQLyog Community v8.71 
MySQL - 5.7.24 : Database - aero_platzi
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`aero_platzi` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `aero_platzi`;

/*Table structure for table `cities` */

DROP TABLE IF EXISTS `cities`;

CREATE TABLE `cities` (
  `cities_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `city_name` varchar(64) NOT NULL,
  PRIMARY KEY (`cities_id`),
  KEY `idx_city_name` (`city_name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `cities` */

insert  into `cities`(`cities_id`,`city_name`) values (1,'Bogotá'),(5,'Cali'),(2,'Ciudad de México'),(6,'Guadalajara'),(9,'Manizales'),(3,'Medellin'),(4,'Monterrey'),(7,'Pereira'),(8,'Puebla');

/*Table structure for table `clients` */

DROP TABLE IF EXISTS `clients`;

CREATE TABLE `clients` (
  `client_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  PRIMARY KEY (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `clients` */

insert  into `clients`(`client_id`,`name`) values (1,'Adrián Camilo González'),(2,'Ruben Hernández Puerta'),(3,'Verónica Rivera Silva'),(4,'Jhon Isnober Díaz Ruiz'),(5,'Daniela Lara Lozano'),(6,'Amaury Soto Garay');

/*Table structure for table `flight_status` */

DROP TABLE IF EXISTS `flight_status`;

CREATE TABLE `flight_status` (
  `status_id` smallint(5) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  PRIMARY KEY (`status_id`),
  KEY `idx_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

/*Data for the table `flight_status` */

insert  into `flight_status`(`status_id`,`name`) values (2,'BOARDING'),(3,'CANCELLED'),(1,'DELAYED'),(6,'ENDED'),(5,'IN-FLIGHT'),(4,'ON-TIME');

/*Table structure for table `flights` */

DROP TABLE IF EXISTS `flights`;

CREATE TABLE `flights` (
  `flight_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `flight_number` int(10) unsigned NOT NULL,
  `departure_date` date NOT NULL,
  `origin_id` int(10) unsigned NOT NULL,
  `departure_time` time NOT NULL,
  `destination_id` int(10) unsigned NOT NULL,
  `boarding_gate` char(4) NOT NULL,
  `flight_status_id` smallint(5) unsigned NOT NULL,
  `passengers_limit` smallint(5) unsigned DEFAULT NULL,
  PRIMARY KEY (`flight_id`),
  KEY `FK_flights_origin` (`origin_id`),
  KEY `FK_flights_destination` (`destination_id`),
  KEY `FK_flights_status` (`flight_status_id`),
  CONSTRAINT `FK_flights_destination` FOREIGN KEY (`destination_id`) REFERENCES `cities` (`cities_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_flights_origin` FOREIGN KEY (`origin_id`) REFERENCES `cities` (`cities_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_flights_status` FOREIGN KEY (`flight_status_id`) REFERENCES `flight_status` (`status_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `flights` */

insert  into `flights`(`flight_id`,`flight_number`,`departure_date`,`origin_id`,`departure_time`,`destination_id`,`boarding_gate`,`flight_status_id`,`passengers_limit`) values (1,0,'2021-03-06',1,'06:00:00',2,'4',1,320);

/*Table structure for table `passengers_by_flight` */

DROP TABLE IF EXISTS `passengers_by_flight`;

CREATE TABLE `passengers_by_flight` (
  `passengers_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `flight_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`passengers_id`),
  KEY `FK_passengers` (`client_id`),
  KEY `FK_passengers_by_flight` (`flight_id`),
  CONSTRAINT `FK_passengers` FOREIGN KEY (`client_id`) REFERENCES `clients` (`client_id`),
  CONSTRAINT `FK_passengers_by_flight` FOREIGN KEY (`flight_id`) REFERENCES `flights` (`flight_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `passengers_by_flight` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
