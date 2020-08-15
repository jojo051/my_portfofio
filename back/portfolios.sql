DROP DATABASE IF EXISTS portfolios;

CREATE DATABASE portfolios;

USE portfolios;

/* Création des tables  */

CREATE TABLE `projet`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`name` VARCHAR (80) NOT NULL,
  `image` VARCHAR(250) NOT NULL,
  `type` VARCHAR(80) NOT NULL,
  `texte_pitch` VARCHAR(500) NOT NULL,
  `lien` VARCHAR(250),
  `time` VARCHAR(50),
	PRIMARY KEY (`id`)
);

CREATE TABLE `etape` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR (80) NOT NULL,
  `explanatory_text` VARCHAR(500),
  `image` VARCHAR(250) NOT NULL,
  `projet_id` INT ,
  PRIMARY KEY (`id`)
);


/* Création des tables de jointure  */


/*------ insertions--------*/

INSERT INTO projet (`id`, `name`, `image`, `type`, `texte_pitch`, `lien`, `time` ) VALUES (1, 'Sacree Campus', 'https://zupimages.net/up/20/33/rre8.png', 'Vitrine', 'lorem', 'https', '3 semaines'),(2, 'Cocktail paradise', 'https://zupimages.net/up/20/33/ltyw.png', 'Web app', 'lorem', 'https', '6 semaines'),(3, 'Tonton somelier', 'https://zupimages.net/up/20/33/cipg.png', 'Web app', 'lorem', 'https', '8 semaines');

INSERT INTO etape (`id`, `name`, `explanatory_text`, `image`) VALUES (1, 'wireframe', 'lorem ipssoun',  'img'), (2, 'millieu','lorem ipssoun', 'img'), (3, 'fin','lorem ipssoun', 'img');


/* ------ contraintes ----*/ 

ALTER TABLE etape
ADD CONSTRAINT `fk_etape_projet`
FOREIGN KEY (`projet_id`)
REFERENCES `projet`(`id`);
